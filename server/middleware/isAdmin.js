

// THIS CURRENTLY DOES NOT SUPPORT PROTECTION OF API ROUTES SINCE THIS WILL BLOCK AN AXIOS CALL

const isAdmin = (req, res, next) => {
  if (req.user.dataValues.userType === 'admin') {
    console.log('Authed admin user, send them in');
    return next()
  } else {
    console.log(req.user);
    console.log('not authed to view this page');
    res.status(404).send('Page not found --')
  }
}

module.exports = isAdmin
