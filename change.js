let list = document.querySelector("#list");
let picChange = document.querySelector("#picChange");

let herosString = localStorage.getItem('Heros');

let herosArr = JSON.parse(herosString);



function showList() {
    list.innerHTML = `<li class="list-group-item list-group-item-danger">Heros</li>`;
    for (const hero of herosArr) {
        list.innerHTML += `<li class="list-group-item" onclick="changePic(${hero.id})">${hero.name}</li>`;
    }

}

function changePic(id) {

    for (const hero of herosArr) {
        if (hero.id == id) {
            picChange.innerHTML =
                `<form>
                <div class="col align-self-center">
                Change the picture of ${hero.name}!
                </div>
                <div class="col align-self-center">
                    <label for="newImageUrl">Enter new hero picture url:</label>
                    <input type="text" id="newImageUrl">
                    <button id="changeBtn" class="btn btn-secondary btn-sm" onclick="change(${hero.id})">Change Picture!</button>

                </div>
                </form>`
        }
    }


}


function change(id) {
    const newUrl = document.querySelector("#newImageUrl");
    for (const hero of herosArr) {
        if (hero.id == id) {
            hero.img = newUrl.value;
            let herosString = JSON.stringify(herosArr); //now its string
            localStorage.setItem('Heros', herosString);

        }

    }
    location.href = "index.html"; //why not work?

}


showList();