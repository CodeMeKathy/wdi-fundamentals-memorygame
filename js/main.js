var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

/*var cardOne = cards[0];*/

/*cardsInPlay.push(cardOne);*/

/*var cardTwo = cards[3];*/

/*cardsInPlay.push(cardTwo);*/
var checkForMatch = function () {

    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
        } else {
        console.log("Sorry, try again.");
        }
}

var flipCard = function (cardId) 
{ console.log('User flipped ' + cards[cardId])
    cardsInPlay.push(cards[cardId])
    checkForMatch()
}

flipCard(0)
flipCard(2)

/*if (cardsInPlay.length === 2) {

    if (cardsInPlay[0] === cardsInPlay[1]);

} {
        
    alert("You found a match!");
        
    }  {
    
    alert("Sorry, try again.");

}*/