const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  const idHandShake = socket.id;
  const { nameRoom } = socket.handshake.query;

  socket.join(nameRoom);
  console.log(`My device: ${idHandShake} joining room ${nameRoom}`)

  socket.on('event', res => {
    socket.to(nameRoom).emit('event', res); // Envio a todos los dispositivos
  })
});

server.listen(4800, () => {
  console.log("Listening 5001 port")
})