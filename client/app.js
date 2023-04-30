const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require("socket.io")(server)
const port = 4000;

app.use(express.static(__dirname + '/public/'))

io.on('connection', (socket) => {
    socket.on('actualizarDatos', () => {
        io.emit('ok')
    })
})

server.listen(port, () => {
    console.log('http://localhost:4000')
})