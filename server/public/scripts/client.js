class Joke {
    constructor(who,question,punchLine){
        this.who = who;
        this.question = question;
        this.punchLine = punchLine;
    }
}

console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
    //event listeners
    $('#addJokeButton').on('click', captureValues)

}
function captureValues() {
    let jokeToSend = new Joke( $( '#whoseJokeIn' ).val(), $( '#questionIn' ).val(), $( '#punchlineIn' ).val() );
    $.ajax({
        method: 'POST',
        url: '/path',
        data: jokeToSend,
        success: function( response ){
            console.log(response);
            getJokes();
        }
    });

    
}
function getJokes() {
    $.ajax({
        method: 'GET',
        url: '/path',
        success: function (response) {
           postJokes(response);
           console.log('back!');
        }
    });
}

function postJokes( response ){
    for( let i=0; i< response.length; i++ ){
    $('#outputDiv').append(response[i].whoseJoke + response[i].jokeQuestion + response[i].punchLine);
    } 
}