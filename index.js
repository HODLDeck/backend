const app = require('express')(),
      cookieSession = require('cookie-session'),
      mustacheExpress = require('mustache-express'),
      bodyParser = require('body-parser'),
      api = require('./src/controllers/api'),
      server = require('http').Server(app),
      io = require('socket.io')(server);

var port = process.env.PORT || 4000

app.use('/api', api)
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
  
server.listen(port, "127.0.0.1", function () {
    console.log('listening on port '+port)
})

io.on('connection', function (socket) {
    // socket.emit('news', { hello: 'world' });
    // socket.on('my other event', function (data) {
    //     console.log(data);
    // });
});