const http = require('http');
const { Server } = require('socket.io');

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('sendMessage', ({ from, to, content }) => {
    io.emit('receiveMessage', { from, to, content });
  });
});

// Cuối file:
server.listen(PORT, () => console.log(`Server with Socket.io on http://localhost:${PORT}`));
