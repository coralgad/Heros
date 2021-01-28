class Hero {
    constructor(name, power, img, id) {
        this.name = name;
        this.power = power;
        this.img = img;
        this.id = id;

    }
}

let newHeroString = localStorage.getItem('Hero');

newHero = JSON.parse(newHeroString);

let newHerosString = localStorage.getItem('Heros');

let heros = JSON.parse(newHerosString);

if (heros == null) {

    heros = [new Hero('Spiderman', 'Overall Coolness and spidey powers!', 'https://image.api.playstation.com/vulcan/img/rnd/202011/0714/vuF88yWPSnDfmFJVTyNJpVwW.png', 1),
    new Hero('Wolverine', 'Badassery. Thats it.', 'https://fastly.syfy.com/sites/syfy/files/styles/1200x680/public/2020/02/stl149580.jpg?offset-x=0&offset-y=0', 2),
    new Hero('Deadpool', 'Cant die and great sense of humor.', 'https://miro.medium.com/max/3840/1*0ubYRV_WNR9iYrzUAVINHw.jpeg', 3)];
}

if (newHero != null) {
    heros.push(newHero);
}

localStorage.removeItem('Hero');

function showHeros() {

    let gallery = document.querySelector("#gallery");
    let i = 0;
    for (const hero of heros) {

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

showHeros();

function addToLocal() {
    let herosString = JSON.stringify(heros); //now its string
    localStorage.setItem('Heros', herosString);
}

addToLocal();