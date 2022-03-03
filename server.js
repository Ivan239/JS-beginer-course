const { createServer } = require("http");

const httpServer = createServer();

const io = require("socket.io")(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
  socket.on('message', (message) => {
    const data = { text: message.text, date: new Date(), name: message.name }
    socket.broadcast.emit('message', data)
    socket.emit('message', data)
  })
});

httpServer.listen(3003);
