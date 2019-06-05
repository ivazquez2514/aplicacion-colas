// Establecemos conexión
const socket = io();

const searchParams = new URLSearchParams( window.location.search );

if ( !searchParams.has('escritorio') ) {

    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
}

const escritorio = searchParams.get( 'escritorio' );
const label = $('small');

$('h1').text(`Escritorio ${ escritorio }`);

$('button').on( 'click', function() {

    socket.emit( 'atenderTicket', { escritorio }, function( res ) {

        if ( typeof res === 'string' ) {
            label.text( res );
            alert( res );
            return;
        }

        label.text( `Ticket ${ res.numero }` );
    });
});