const os = require('os')
const io = require('socket.io')(3000, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  socket.on('actualizarDatos', (data) => {
    io.emit('ok', data);
  });
});

let interfaces = os.networkInterfaces();
let localAddr = Object.values(interfaces).flatMap(ifaces => ifaces.filter(data => data.family === 'IPv4' && !data.internal)).map(data => data.address)

console.log(localAddr)
