class Hero{
    constructor(name,mainStrength,imageUrl){
        this.name = name;
        this.mainStrength = mainStrength;
        this.imageUrl =imageUrl;
    }
}


window.onload = function(){
    document.querySelector("#addBtn").addEventListener("click", function (e){
        e.preventDefault();
        add();
    })
}

function add(){
    const name = document.querySelector("#name").value;
    const mainStrength = document.querySelector("#mainStrength").value;
    const imageUrl = document.querySelector("#imageUrl").value;

    if((name == '') || (mainStrength == '') ||(imageUrl == '')){
        alert("oops! you missed something");
    }
    else{
        const newHero = new Hero(name.value , mainStrength.value , imageUrl.value);
        let heroString = JSON.stringify(newHero); //now its string
        localStorage.setItem('Hero', heroString);
    }
}


