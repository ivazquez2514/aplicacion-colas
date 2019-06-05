
const socket = io();

const label = $('#lblNuevoTicket');

socket.on( 'connect', function() {

    console.log('Conectado al servidor');
});

socket.on( 'disconnect', function() {

    console.log('Se perdió la conexión al servidor');
});

socket.on( 'estadoActual', ( data ) => {

    label.text( `Ticket ${ data.actual }` );
});

$('button').on( 'click', function() {

    socket.emit( 'siguienteTicket', null, ( siguienteTicket ) => {

        label.text( siguienteTicket );
        
        socket.emit('estadoActual');
    });

});