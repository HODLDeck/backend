var express = require('express')
var router = express.Router()
var devices = require('./devices')

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/devices', devices.post)

// define the about route
router.get('/about', function (req, res) {
  res.send('About API')
})

module.exports = router