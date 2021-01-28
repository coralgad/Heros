let herosString = localStorage.getItem('Heros');

let herosArr = JSON.parse(herosString);

class Hero {
    constructor(name, mainStrength, imageUrl, id) {
        this.name = name;
        this.power = mainStrength;
        this.img = imageUrl;
        this.id = id;
    }
}

window.onload = function () {
    document.querySelector("#addBtn").addEventListener("click", function (e) {
        e.preventDefault();
        add();
    })
}

function add() {
    let name = document.querySelector("#name");
    let mainStrength = document.querySelector("#mainStrength");
    let imageUrl = document.querySelector("#imageUrl");

    if ((name == '') || (mainStrength == '') || (imageUrl == '')) {
        alert("oops! you missed something");
    }
    else {
        let id = herosArr.length + 1;
        const newHero = new Hero(name.value, mainStrength.value, imageUrl.value, id);
        let heroString = JSON.stringify(newHero); //now its string
        localStorage.setItem('Hero', heroString);
        if (true){
        name = '';
        mainStrength = '';
        imageUrl = '';
        }

    }

}


