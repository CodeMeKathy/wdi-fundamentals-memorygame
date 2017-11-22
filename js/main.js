/*var cards = ['queen', 'queen', 'king', 'king'];*/

var cards = [
    {
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png'
    },
    {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png'
    },
    {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png'
    },
    {
    rank: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png'
    },
    ];
    

var cardsInPlay = [];

/*var cardOne = cards[0];*/

/*cardsInPlay.push(cardOne);*/

/*var cardTwo = cards[3];*/

/*cardsInPlay.push(cardTwo);*/
var checkForMatch = function () {

    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match! You are a winner")
        } else {
        alert("Sorry, you lose, try again.")
        }
}

var flipCard = function() {
    var cardId = this.getAttribute('data-id', cards[0].rank);
    this.setAttribute('src', cards[cardId].cardImage)
    if (cardsInPlay.length === 2) { 

        checkForMatch()
    }
    console.log('User flipped ' + cards[cardId].rank)
    console.log(cards[cardId].cardImage)
    console.log(cards[cardId].suit)
    cardsInPlay.push(cards[cardId].rank)
  
  
}

var createBoard = function() {
    for (var i = 0; i < cards.length; i++) {
        var cardElement = document.createElement('img')
        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id', [i]);
        cardElement.addEventListener('click', flipCard);
        document.getElementById('game-board').appendChild(cardElement);
        }


}

createBoard()


/*if (cardsInPlay.length === 2) {

    if (cardsInPlay[0] === cardsInPlay[1]);

} {
        
    alert("You found a match!");
        
    }  {
    
    alert("Sorry, try again.");

}*/

