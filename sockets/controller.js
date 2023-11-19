
const socketController = socket => {
    console.log('Cliente conectado', socket.id);
    
    // interaccion especifica ( recibido desde el client side )
    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id);
    })

    // interaccion especifica (recibido desde cliente side)
    socket.on('enviar-mensaje', ( payload, callback ) => {

        const id = '123456';

        callback(id);
        // interaccion global (enviado desde el server side, mensaje a todos)
        // this.io.emit('enviar-mensaje', payload)

        // interaccion especifica (enviado desde el server side, al mismo cliente)
        // socket.emit('enviar-mensaje', payload)

        // interaccion especifica (enviado desde el server side, mensaje a todos, sin incluir el que lo mando)
        socket.broadcast.emit('enviar-mensaje', payload)
    })
}

module.exports = {
    socketController
}