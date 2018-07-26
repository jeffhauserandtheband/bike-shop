const router = require('express').Router()
const {Review} = require('../db/models')
module.exports = router


//POST /api/review -- put in a new review
router.post('/', async (req, res, next) => {
    try {
        console.log('swoop')
        const newReview = await Review.create(req.body);
        res.json(newReview)
    } catch (err) {
        next(err)
    }
})