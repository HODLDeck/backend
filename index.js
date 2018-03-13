const express = require('express'),
      app = express(),
      cookieSession = require('cookie-session'),
      mustacheExpress = require('mustache-express'),
      bodyParser = require('body-parser'),
      api = require('./src/controllers/api'),
      server = require('http').Server(app),
      devices = require('./src/models/devices')
      io = require('socket.io')(server);

var port = process.env.PORT || 4000

app.use('/api', api)

app.use('/static', express.static('static'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
  
server.listen(port, function () {
    console.log('listening on port '+port)
})

io.on('connection', function (socket) {
    socket.on('setKey', function (data) {
        devices.setAddress(data["magic-words"], data["address"])
        console.log(devices.getAll);
    });
});