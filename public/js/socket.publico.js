const socket = io();
const tickets = [
    $('#lblTicket1'),
    $('#lblTicket2'),
    $('#lblTicket3'),
    $('#lblTicket4')
];
const escritorios = [
    $('#lblEscritorio1'),
    $('#lblEscritorio2'),
    $('#lblEscritorio3'),
    $('#lblEscritorio4')
];

socket.on( 'estadoActual', function( data ) {

    const audio = new Audio('audio/new-ticket.mp3');
    audio.play();

    actualizaHTML( data.ultimos4 );   
});

function actualizaHTML( ultimos4 ) {

    ultimos4.forEach( ( item, i ) => {
        
        tickets[i].text( `Ticket ${ item.numero }` );
        escritorios[i].text( `Escritorio ${ item.escritorio }` );
    });
}