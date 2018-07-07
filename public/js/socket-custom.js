var socket = io();
//on Escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor via Socket');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
})

//emit Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Antonio',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp);
})

socket.on('enviarMensaje', function(resp) {
    console.log('Servidor:', resp);
})