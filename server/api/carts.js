const router = require('express').Router()
const {Cart,CartEntry} = require('../db/models')
module.exports = router

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
