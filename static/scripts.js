let difficulty = 0;
if(document.body.getAttribute('data-page') === "menu"){
    var radios = document.getElementsByTagName('input');

    for(i = 0; i < radios.length; i++){
        if (radios[i].checked){
            difficulty = radios[i].value;
        }
    }
}
console.log(difficulty);

// erstmal checken ob die richtige Seite da ist (nämlich die mit dem data-page namen "game"

if(document.body.getAttribute('data-page') === "game"){
    console.log(difficulty);
    var element = document.getElementById('memory-game');
    var newCard = document.createElement("div");
    var textnode = document.createTextNode("a");
    var cover = document.createElement("IMG");
    cover.setAttribute("src", "static/back-face.jpg");
    newCard.appendChild(textnode);
    newCard.appendChild(cover);
    newCard.classList.add('memory-card');
    element.appendChild(newCard);

    const cards = document.querySelectorAll('.memory-card'); /* cards ist eine Node List aus allen Elementen mit der Klasse memory-card */

    function flipCard() {
        this.classList.toggle('flip'); /* classList greift auf die Klassen des Elements zu
                                            add würde eine neue Klasse hinzufügen
                                            toggle fügt eine Klasse hinzu, entfernt sie bei erneutem Aufruf wieder */
    }

    cards.forEach(card => card.addEventListener('click', flipCard)); /*for loop durchläuft die Node-List cards.
                                                                       der => steht für eine Funktion.
                                                                    function card() {card.addEventListener(click, flipCard)}; */

} else {
    console.log("you are in the menu");
}
