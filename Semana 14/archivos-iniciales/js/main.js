//Constante para crear objetos
const listaPokemon = document.querySelector("#listaPokemon");
//Variable con la url del api
let URL = 'https://pokeapi.co/api/v2/pokemon/';

for(let i = 1; i<=1025; i++){
    fetch(URL + i)
    .then((response) => response.json())
    .then(data => mostrarPokemon(data))
}

function mostrarPokemon(poke){

    let tipos = poke.types.map((type)=> `<p class="${type.type.name} tipo">${type.type.name}`);
    tipos = tipos.join('');

    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = `
    <p class="pokemon-id-back">#${poke.id}</p>
                    <div class="pokemon-imagen">
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png" alt="${poke.id}">
                    </div>
                    <div class="pokemon-info">
                        <div class="nombre-contenedor">
                            <p class="pokemon-id">#${poke.id}</p>
                            <h2 class="pokemon-nombre">${poke.name}</h2>
                        </div>
                        <div class="pokemon-tipos">
                            ${tipos}
                        </div>
                        <div class="pokemon-stats">
                            <p class="stat">${poke.height}ft</p>
                            <p class="stat">${poke.weight}lb</p>
                        </div>
                    </div>
                </div>
    `;
    listaPokemon.append(div);
}