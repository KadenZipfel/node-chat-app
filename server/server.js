const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  
  socket.emit('newMessage', {
    from: 'John',
    text: 'Hey',
    createdAt: 123123
  });
  
  socket.on('createMessage', (message) => {
    console.log(message);
  });
  
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(port, () => {
  console.log('The server is running');
});