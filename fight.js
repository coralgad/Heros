let herosString = localStorage.getItem('Heros');

let herosArr = JSON.parse(herosString);


function showRandTwo(){
    let gallery = document.querySelector("#gallery");

    for (let i = 0; i < 2; i++) {
        const heroIndex = Math.floor(Math.random() * herosArr.length);
        const hero = herosArr[heroIndex];
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

showRandTwo();
