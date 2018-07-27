
// should return true if user

const isUser = (req, res, next) => {
  if (req.user.dataValues.userType === 'user') {
    console.log('Authed normal user, send them in');
    return next()
  } else {
    console.log('not authed to view this page');
    res.status(404).send('Page not found --')
  }
}

module.exports = isUser
