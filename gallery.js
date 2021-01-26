class Hero {
    constructor(name, power, img) {
        this.name = name;
        this.power = power;
        this.img = img;
    }
}

let newHeroString = localStorage.getItem('Hero');

newHero = JSON.parse(newHeroString);


let heros = [new Hero('Spiderman', 'Overall Coolness and spidey powers!', 'https://image.api.playstation.com/vulcan/img/rnd/202011/0714/vuF88yWPSnDfmFJVTyNJpVwW.png'),
new Hero('Wolverine', 'Badassery. Thats it.', 'https://fastly.syfy.com/sites/syfy/files/styles/1200x680/public/2020/02/stl149580.jpg?offset-x=0&offset-y=0'),
new Hero('Deadpool', 'Cant die and great sense of humor.', 'https://miro.medium.com/max/3840/1*0ubYRV_WNR9iYrzUAVINHw.jpeg')];

if (newHero != null){
    heros.push(newHero);
}

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