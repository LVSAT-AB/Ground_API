const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require("socket.io")(server)
const port = 4000;

//Usar archivos estáticos
app.use(express.static(__dirname + '/public/'))

//Escucha en los web sockets el evento de actualizacion
io.on('connection', (socket) => {
    socket.on('actualizarDatos', () => {
        io.emit('ok')
    })
})

//Enciende el server
server.listen(port, () => {
    console.log('http://localhost:4000')
})
