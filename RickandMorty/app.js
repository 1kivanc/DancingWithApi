const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const statusA = document.querySelector(".status");
const search = document.querySelector("#search");

let count = 100;



const charCount = async() => {
    for (let i = 1; i < count; i++) {
        await getCharacter(i);
    }
}



const getCharacter = async(id) => {
    let url=`https://rickandmortyapi.com/api/character/${id}`;
    let res = await fetch(url);
    let data = await res.json();
    createBox(data);
}

const createBox = (character) => {
    const name = character.name;
    const species = character.species;
    const gender = character.gender;
    const status = character.status;
    const image = character.image;



    const createChar = document.createElement("div");
    createChar.classList.add("box");
    
    createChar.innerHTML = 
    
    `
    <img src="${image}"/>

    <h4 class="name" >${name}</h4>
    <p>species: ${species}</p>
    <p>gender: ${gender}</p>
    <p>status: ${status}</p>    `;
    
    container.appendChild(createChar);
}    ;


charCount();

search.addEventListener('input' , function (e) {
    const name = document.querySelectorAll(".name");
    const searchChar = search.value.toLowerCase();

    name.forEach((name) => {
        
        name.parentElement.style.display = "block";
        
        if(!name.innerHTML.toLowerCase().includes(searchChar)){
            name.parentElement.style.display = "none";
        }
    }) ;

})