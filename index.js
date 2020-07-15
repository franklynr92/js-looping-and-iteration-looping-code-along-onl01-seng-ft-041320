// Code your solutions in this file
const messages = (["Lisa", "Kaitlin", "Jan"],'suprise');

function wrong(messages) {
    for (let i = 0; i < messages.length;  i++) {
        console.log(`Thank you, ${messages[i]}, for the wonderful ${messages[-1]} gift!`);
    }

    return messages;
}

wrong(messages);

function writeCards( namesArray, event) {
    let thankYouCards = []
    for ( let i = 0; i < namesArray.length; i++ ) {
        thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouCards
}


function countDown( startingNumber ) {
    while (startingNumber > 0){
    console.log( startingNumber ) ;
    startingNumber -= 1;
  }
  console.log( startingNumber );
}