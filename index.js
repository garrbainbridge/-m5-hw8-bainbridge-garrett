// Create an Array of at least 3 losing messages
var lose = ["Woops", "Too Bad", "Better Luck Next Time"];
// Create variables to count wins and losses
//var winCount =;
//var loseCount =;
// Create variables that target elements with the following IDs: 'message', 'wins', 'losses'
var  wins = document.getElementById('#wins');
var  loses = document.getElementById('#loses');
// target all .box elements and attach a click event listener to each one using a loop
var boxes = document.querySelectorAll('.box');
var span = document.getElementById('message');

// within each click event...
// determine which box was clicked with 'this.textContent' or event.target.textContent
// convert that value to a Number and store it to a variable
boxes.forEach(function(b) {

    b.onclick = function(e) {
        var winNumber = Math.floor(Math.random() * 3) + 1;
        e.target.textContent
        console.log (e.target)
        if (winNumber == e.target.textContent ) {
            span.textContent = "you win";
        } else {
            span.textContent = lose[Math.floor(Math.random()*lose.length)];
        }
    }
})

//var click = ; 
// create a random number between 1-3 and store it to a variable
// This number will represent the winning box

// determine if the box clicked is equal to the random number
// if the numbers match, display a winning message by changing the text content of the div#message element
// if the numbers match, increment wins and display the win count in div#wins
    

function youWin() {
    var winCount = parseInt(wins.textContent()+1);
    wins.text(winCount);
}
// if the numbers don't match, change the div#message element's text to a random losing message from the array above
// if the numbers don't match, increment losses and display the loss count in div#losses
function youLose() {
    var loseCount = parseInt(loses.textContent()+1);
    loses.text(loseCount);
}