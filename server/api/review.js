const router = require('express').Router()
const {Review} = require('../db/models')
module.exports = router


//POST /api/review -- put in a new review
router.post('/', async (req, res, next) => {
    try {
        const newReview = await Review.create(req.body);
        res.json(newReview)
    } catch (err) {
        next(err)
    }
})

//GET /api/review/3

router.get(`/:id`, async (req,res,next) => {
    try{
        const getReview = await Review.findAll({
            where: {
                bikeId: req.params.id
            }
        })
        res.json(getReview)
    } catch(err) {
        next(err)
    }
})
