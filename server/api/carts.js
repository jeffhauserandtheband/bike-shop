/* eslint-disable max-statements */
/* eslint-disable complexity */
const router = require('express').Router()
const {Cart,CartEntry,Bike,BikeImage} = require('../db/models')
module.exports = router


//POST /api/carts/:cartid/:bikeid
//cartid===0:create new cart?find existing cart
//if cart has entry for bikeid, increment it, else add new entry
//
//output: {id, subtotal, cartentries:[{bikeid,name,price,quantity,image}]}
router.post('/:cartId/:bikeId', async (req, res, next) => {
  let cart
  try {
    if (+req.params.cartId===0) {
      //get cookie or userid to link to cart
      let newCart={}
      cart = await Cart.create(newCart)
    } else {
      cart = await Cart.findById(+req.params.cartId);
    }
  } catch (err) {
    next(err)
    return
  }

  //go find bike before attempting to work with cart entry
  let bike;
  try {
    bike = await Bike.findById(+req.params.bikeId);
  } catch (err) {
    next(err)
    return
  }

  //now have cart with id.  see if entry with bikeId exists
  let needNewEntry=false;
  let cartEntry={}
  try {
    const cartEntries = await CartEntry.findAll({
      where:
        {cartId:cart.id,
         bikeId:bike.id}
    })
    if (cartEntries.length===0) {
      needNewEntry=true;
    } else if (cartEntries.length>1) {
      throw new Error('more than one cartentries with same cartId/bikeId')
    }
    cartEntry=cartEntries[0] //just get the one cart entry out
  } catch (err) {
    next(err)
    return
  }

  if (bike.inventory<1) {
    res.status(400).json('') //TODO- add message about no inventory
    return
  }

  //TODO: use sequelize transaction to decrement inventory and create/update cart entry
  //decrement inventory
  bike.inventory = bike.inventory-1;
  try {
    await Bike.update(
      {inventory: bike.inventory},
      {where: { id: bike.id }}
    );
  } catch (err) {
    next(err)
    return
  }

  //create cart entry if needed with quantity 1
  if (needNewEntry) {
    const newCartEntry={}
    newCartEntry.bikeId=bike.id;
    newCartEntry.cartId=cart.id;
    newCartEntry.quantity=1

    try {
      cartEntry =await  CartEntry.create(newCartEntry);
    } catch (err) {
      next(err)
      return
    }
  //update quantity in cart
  } else {
    try {
      cartEntry.quantity=cartEntry.quantity+1
      await CartEntry.update(
        {quantity:cartEntry.quantity},
        { where: { cartId: cart.id, bikeId: bike.id } }
      )
    } catch (err) {
    next(err)
    return
    }
  }

  /*create a complete cart for the front end to use -- will have some extra info that kinda looks like an order*/
  //join cart with cart entries
  try {
    cart = await Cart.findById(cart.id,
      {include: [{model:CartEntry}]}
    );
  } catch (err) {
    next(err)
    return
  }

  //now start building an object to send to front end
  const feCart={}
  feCart.subtotal=0.00;
  feCart.quantity=0; //total number of items in cart
  feCart.cartId = cart.id;
  feCart.cartEntries=[]
  for (let cartEntry of cart.cartentries) {
    let bike
    try {
      bike = await Bike.findById(cartEntry.bikeId,
        { include: [{model:BikeImage}]})
    } catch(err) {
      next(err)
      return
    }

    const feCartEntry={}
    feCartEntry.bikeId=bike.id;
    feCartEntry.name=bike.name;
    feCartEntry.quantity=cartEntry.quantity;
    feCart.quantity=feCart.quantity+cartEntry.quantity;
    feCartEntry.price=bike.price;
    feCart.subtotal=feCart.subtotal+(bike.price*cartEntry.quantity);

    if (bike.bikeimages && bike.bikeimages.length>0) {
      feCartEntry.image = bike.bikeimages[0].imageUrl
    }

    feCart.cartEntries.push(feCartEntry)
  }
  console.log(feCart)
  res.json(feCart)

})


//POST /api/carts/ -- for now assume nothing there and start writing it,
//will have to clean up later
router.post('/', async (req, res, next) => {
  try {
    //create basic cart entry, sequelize will ignore entries
    const cart= await Cart.create(req.body);

    //now go through entries and put those in db
    for (const entry of req.body.cartentries) {
      entry.cartId=cart.id;
      console.log(entry);
      const newEntry=await CartEntry.create(entry);
      console.log(newEntry);
    }
    const newCart = await Cart.findById(cart.id,
      {include: [{model: CartEntry}]})
    res.json(newCart)
  } catch (err) {
    next(err)
  }
})

//GET /api/carts/:id - get a single cart by id joined with its entries
router.get('/:id', async (req,res,next) => {
  try {
    const cart = await Cart.findById(req.params.id,
      {include: [{model: CartEntry}]})
    res.json(cart)
  } catch (err) {
    next(err)
  }
})
