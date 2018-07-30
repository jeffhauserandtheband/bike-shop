const router = require('express').Router()
const {Bike,BikeImage,CategoryKey,CategoryValue} = require('../db/models')
const Sequelize = require('sequelize')
module.exports = router

const axios = require('axios')

//TODO:  ensure all POSTs are RESTful? find unique constraints outside of sequelize's auto pk?

//GET /api/bikes -- just get basic bike info  -- send everything up and let front end filter out what they want
//separate routes will enable retrieving categorykey/values for filter sidebar
router.get('/', async (req, res, next) => {
  try {
    console.log('query strings! ----------------', req.query.search)
    const bikes = await Bike.findAll({include: [{model: BikeImage},{model:CategoryValue}]})
    res.json(bikes)
  } catch (err) {
    next(err)
  }
})

// GET /api/bikes/categories -- get all of the categories for the SearchFilter
router.get('/categories', async (req, res, next) => {
  try {
    const categories = await CategoryKey.findAll({include: [{model: CategoryValue }]})
    res.json(categories)
  } catch (err) {
    next(err)
  }
})

// Search API route /api/bikes/query
router.get('/query', async (req, res, next) => {
  try {
    console.log('query strings! ----------------', req.query)
    const dataValues = await Bike.findAll({
      where: {
        name: {[Sequelize.Op.iLike]: `%${req.query.search}%`}
      }
    })
    console.log('test', dataValues)
    res.status(200).json(dataValues)
  } catch (err) {
    next(err)
  }
})

//GET /api/bikes/:id -- get a single bike -- satisfy requests from clicking on item in an order/cart
router.get('/:id', async (req, res, next) => {
  try {
    const bike = await Bike.findById(req.params.id,
      {include: [{model: BikeImage},{model: CategoryValue}]})

    res.json(bike)
  } catch (err) {
    next(err)
  }
})

router.post('/:id', async (req, res, next) => {
  try {
    const bike = await Bike.findById(req.params.id,
      {include: [{model: BikeImage},{model: CategoryValue}]})

    res.json(bike)
  } catch (err) {
    next(err)
  }
})

// POST /api/bikes/:id update a bike
router.put('/:id', async (req, res, next) => {
  try {
    const bike = await Bike.update(req.body, {
      where: {id: req.params.id},
      returning: true,
      plain: true,
    })
    res.status(201).json(bike)
  } catch (err) {
    next(err)
  }
})

//POST /api/bikes -- put in a new bike -- no pictures or categories yet
router.post('/',async (req,res,next) => {
  try {
    const newBike = await Bike.create(req.body);
    res.status(201).json(newBike)
  } catch (err) {
    next(err)
  }
})

//POST /api/bikes/categorykey -- create a new category key
router.post('/categorykey',async (req,res,next) => {
  try {
    const newCategoryKey = await CategoryKey.create(req.body);
    res.status(201).json(newCategoryKey)
  } catch (err) {
    next(err)
  }
})

//POST /api/bikes/:id/image -- create a new image and associate with a bike
//NOTE - no PUT method for bikes<->images, only create or delete of images/associations
router.post('/:id/image',async (req,res,next) => {
  try {
    const reqImage = req.body;
    req.body.bikeId = req.params.id;
    const newImage = await BikeImage.create(reqImage);
    res.status(201).json(newImage);
  } catch (err) {
    next(err)
  }
})

//POST /api/bikes/categorykey/:id -- create a new value under existing category
router.post('/categorykey/:id', async (req,res,next) => {
  try {
    const reqCategoryValue = req.body;
    req.body.categorykeyId = req.params.id;
    const newCategoryValue = await CategoryValue.create(req.body);
    res.status(201).json(newCategoryValue);
  } catch (err) {
    next(err)
  }
})

//POST /api/bikes/:bikeId/categoryvalue/:categoryValueId -- associates a category value with a bike
//NOTE - no PUT method for bikes<->categoryvalues -- association is created or deleted only
router.post('/:bikeId/categoryvalue/:categoryValueId',async (req,res,next) => {
  try {
    const bike = await Bike.findById(req.params.bikeId);
    if (!bike) {
      throw new Error(`Bike ${req.params.bikeId} not found`);
    }
    const categoryValue = await CategoryValue.findById(req.params.categoryValueId);
    if (!categoryValue) {
      throw new Error(`CategoryValue ${req.params.categoryValueId} not found`);
    }
    const resp = await categoryValue.addBike(bike);
    //TODO: error handling/check if sequelize throws on assocation exists?
    res.status(201).json(resp);
  } catch (err) {
  next(err)
  }
})
