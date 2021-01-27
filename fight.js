let herosString = localStorage.getItem('Heros');

let herosArr = JSON.parse(herosString);

function showRandTwo() {
    let gallery = document.querySelector("#gallery");
    let secondGallery = document.querySelector("#secondGallery");

    for (let i = 0; i < 2; i++) {
        const heroIndex = Math.floor(Math.random() * herosArr.length);
        const hero = herosArr[heroIndex];
        if (i == 0) {
            gallery.innerHTML += `<div class="col-4"><div class="card h-100">
        <img src="${hero.img}" class="card-img-top" alt="${hero.name}">
        <div class="card-body">
            <h5 class="card-title">${hero.name}</h5>
            <p class="card-text">${hero.power}</p>
         </div>
         </div>
        </div>
        <div class="col-4" id="fightDiv">
        <button type="button" class="btn btn-danger btn-lg" onclick="fight() id="fightBtn"">FIGHT!</button>
        </div>

        
`
        }
        if (i == 1) {
            gallery.innerHTML += `<div class="col-4"><div class="card h-100">
            <img src="${hero.img}" class="card-img-top" alt="${hero.name}">
            <div class="card-body">
                <h5 class="card-title">${hero.name}</h5>
                <p class="card-text">${hero.power}</p>
             </div>
             </div>
            </div>
    `
        }


    }
}



function fight() {
    let rockPaperScissors = ['Rock', 'Paper', 'Scissors'];
    let fightDiv = document.querySelector("#fightDiv");
    for (let i = 0; i < 2; i++) {
        const fightIndex = Math.floor(Math.random() * rockPaperScissors.length);
        const move = rockPaperScissors[fightIndex];
        if (i == 0) {
            fightDiv.innerHTML += `<div class="col-2">
            <span>${move}</span>
            </div>`
        }
        if (i == 1) {
            fightDiv.innerHTML += `<div class="col-2">
            <span>${move}</span>
            </div>`
        }
    }
}



showRandTwo();

