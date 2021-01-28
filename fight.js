let herosString = localStorage.getItem('Heros');

let herosArr = JSON.parse(herosString);

let hero1;
let hero2;

function showRandTwo() {
    let gallery = document.querySelector("#gallery");
    let secondGallery = document.querySelector("#secondGallery");

    for (let i = 0; i < 2; i++) {
        if (i == 0) {
            const heroIndex = Math.floor(Math.random() * herosArr.length);
            hero1 = herosArr[heroIndex];
            gallery.innerHTML += `<div class="col-4"><div class="card h-100">
        <img src="${hero1.img}" class="card-img-top" alt="${hero1.name}">
        <div class="card-body">
            <h5 class="card-title" id="hero1Name">${hero1.name}</h5>
            <p class="card-text">${hero1.power}</p>
         </div>
         </div>
        </div>
        <div class="col-4" id="fightDiv">
        <button type="button" class="btn btn-danger btn-lg" onclick="fight()" id="fightBtn"">FIGHT!</button>
        <div>
        <span id="leftPlayer"></span>
        <span id="rightPlayer"></span>
        </div>
        </div>

        
`
        }
        if (i == 1) {
            const heroIndex = Math.floor(Math.random() * herosArr.length);
            hero2 = herosArr[heroIndex];
            gallery.innerHTML += `<div class="col-4"><div class="card h-100">
            <img src="${hero2.img}" class="card-img-top" alt="${hero2.name}">
            <div class="card-body">
                <h5 class="card-title" id="hero2Name">${hero2.name}</h5>
                <p class="card-text">${hero2.power}</p>
             </div>
             </div>
            </div>
    `
        }


    }
}



function fight() {
    let rockPaperScissors = ['Rock', 'Paper', 'Scissors'];
    let fightLeft = document.querySelector("#leftPlayer");
    let fightRight = document.querySelector("#rightPlayer");
    let resultDiv = document.querySelector("#result");
    resultDiv.innerHTML = '';

    let move1;
    let move2;

    for (let i = 0; i < 2; i++) {

        if (i == 0) {
            const fightIndex = Math.floor(Math.random() * rockPaperScissors.length);
            move1 = rockPaperScissors[fightIndex];
            fightLeft.innerHTML = `<div class="col-2" style="display: inline;">
            <span><----${move1}</span>
            </div>`
        }
        if (i == 1) {
            const fightIndex = Math.floor(Math.random() * rockPaperScissors.length);
            move2 = rockPaperScissors[fightIndex];
            fightRight.innerHTML = `<div class="col-2" style="display: inline;">
            <span>${move2}----></span>
            </div>`
        }
    }

    if (move1 == move2) {
        resultDiv.innerHTML = `<div>DRAW!!</div>`
    }
    else if (move1 == "Paper" && move2 == "Rock"){
        resultDiv.innerHTML = `<div>${hero1.name} HAS WON THE BATTLE!</div>`

    }
    else if (move1 == "Paper" && move2 == "Scissors"){
        resultDiv.innerHTML = `<div>${hero2.name} HAS WON THE BATTLE!</div>`

    }
    else if (move1 == "Rock" && move2 == "Scissors"){
        resultDiv.innerHTML = `<div>${hero1.name} HAS WON THE BATTLE!</div>`

    }
    else if (move1 == "Rock" && move2 == "Paper"){
        resultDiv.innerHTML = `<div>${hero2.name} HAS WON THE BATTLE!</div>`

    }
    else if (move1 == "Scissors" && move2 == "Paper"){
        resultDiv.innerHTML = `<div>${hero1.name} HAS WON THE BATTLE!</div>`

    }
    else if (move1 == "Scissors" && move2 == "Rock"){
        resultDiv.innerHTML = `<div>${hero2.name} HAS WON THE BATTLE!</div>`

    }




}



showRandTwo();

