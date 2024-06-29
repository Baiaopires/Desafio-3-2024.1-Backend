let divNome = document.querySelector("#nome")
let divImagem = document.querySelector("#imagem")
let buttonNext = document.getElementById("nextButton");
let buttonBack = document.getElementById("backButton");
let counterElement = document.getElementById("counterValue")

// Condições iniciais
let counter = 1;

// limite de 1025 pokemons
const url = `https://pokeapi.co/api/v2/pokemon/${counter}`

fetch(url)
    .then(response => response.json())
    .then(pokemon => {
        console.log(pokemon.name)
        divNome.innerHTML = "<strong>" + pokemon.name + "</strong>";
    })

function showName(id){
    const url = `https:pokeapi.co/api/v2/pokemon/${id}`

    fetch(url)
        .then(response => response.json())
        .then(pokemon => {
            console.log(pokemon.name)
            divNome.innerHTML = "<strong>" + pokemon.name + "</strong>";
            divImagem.innerHTML = "<img src=\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png\" style=\"text-align: center2\" class=\"center2\"></img>"
        })
}

buttonNext.addEventListener("click", () => {
    counter++;
    // limite superior de 1025 pokémons
    if(counter == 1026){
        counter = 1;
    }
    counterElement.innerHTML = "<strong>#" + counter + "</strong>";
    
    showName(counter)
})
buttonBack.addEventListener("click", () => {
    counter--;

    // limite inferior de 0 pokémons
    if(counter == 0){
        counter = 1025;
    }

    counterElement.innerHTML = "<strong>#" + counter + "</strong>";
    
    showName(counter)
})