const express = require('express')
const app = express()
var http = require('http').createServer(app)
var io = require('socket.io')(http);

app.use(express.static('public', {
  maxAge: '31556952000' // uses milliseconds per docs
}));

http.listen(3000, () => { console.log('listening on *:3000'); });

