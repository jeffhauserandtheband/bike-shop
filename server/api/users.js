const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email', 'userType']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

// delete user  neeeds admin middleware
router.delete('/:userid', async (req, res, next) => {
  try {
    await User.destroy({
      where: {
        id: req.params.userid
      }
    })
    res.sendStatus(202)
  } catch (error) {
    console.error('Didnt delete user', error)
    next(error)
  }
})

//change user type needs middleware

router.put('/:userId', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId)
    await user.update({userType: req.body.userType})
    res.json(user)
  } catch (err) {
    next(err)
  }
})
