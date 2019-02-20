let lockBoard = false;
let hasFlippedCard = false; // wurde schon eine Karte geflippt? Nein erstmal nicht.
let firstCard, secondCard;

/*
    document.body.onload = addElements;
    // Create some cards!
    var element = document.getElementById('memory-game');

    function addElement() {
        var newCard = document.createElement("div");
        newCard.classList.add('memory-card');
        newCard.setAttribute('data', "framework: 'random'");
        var back = document.createElement("IMG");
        back.classList.add('back-face');
        back.setAttribute("src", "static/front-face.jpg");
        var cover = document.createElement("IMG");
        cover.setAttribute("src", "static/back-face.jpg");
        cover.classList.add('front-face');
        newCard.appendChild(cover);
        newCard.appendChild(back);
        element.appendChild(newCard);
    }

    function addElements() {
        for(var i = 0; i < 9; i++){
            addElement();
        }
    }
*/


// Add the flipping!
function flipCard() {
    if(lockBoard) return;
    if (this === firstCard) return; // Die erste Karte soll nicht wieder geflippt werden

    this.classList.add('flip'); /* classList greift auf die Klassen des Elements zu
                                    * add fügt eine neue Klasse hinzu
                                    * toggle fügt eine Klasse hinzu, entfernt sie bei erneutem Aufruf wieder */
    if (!hasFlippedCard){ // wenn noch keine Karte umgedreht wurde, dann...
    firstCard = this;   // Merke dies als die erste Karte
    hasFlippedCard = true; // Jetzt wurde eine Karte geflippt
    return;
    } else { // Ansonsten wurde schon eine Karte gedreht
    secondCard = this; // Merke dies als die zweite Karte
    checkForMatch();
    }
}

function checkForMatch(){
    if(firstCard.dataset.framework === secondCard.dataset.framework){
        disableCards();
    } else {
        unflipCards();
    }
}

function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

function unflipCards(){
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    resetBoard();
    }, 1500)
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}


// Get all cards in one list
const cards = document.querySelectorAll('.memory-card'); /* cards ist eine Node List aus allen Elementen mit der Klasse memory-card */
// loop through list and add an Event Listener for click
cards.forEach(card => card.addEventListener('click', flipCard)); /* for loop durchläuft die Node-List cards.
                                                                  * der => steht für eine Funktion.
                                                                  * function card() {card.addEventListener(click, flipCard)}; */


// (function)() is an immediately invoked function expression

!function shuffle(){
    cards.forEach(card =>{
            let randomPos = Math.floor(Math.random()*12);
            card.style.order = randomPos;
            console.log(randomPos);
    })
}();


