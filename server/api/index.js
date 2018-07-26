const router = require('express').Router()
const isAdmin = require('../middleware/isAdmin') // middleware to check if user is an admin
module.exports = router

// This is currently not configured to allow an axios request to hit this route
// router.use(isAdmin)

// -----> /api/......
router.use('/users', require('./users'))
router.use('/bikes', require('./bikes'))
router.use('/carts', require('./carts'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
