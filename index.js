const express = require('express'),
      cookieSession = require('cookie-session'),
      mustacheExpress = require('mustache-express'),
      bodyParser = require('body-parser'),
      api = require('./src/controllers/api'),
      frontend = require('./src/controllers/frontend'),

const app = express()

var port = process.env.PORT || 4000

app.use('/api', api)
app.use('/', frontend)

app.listen(port, function () {
    console.log('listening on port '+port)
})