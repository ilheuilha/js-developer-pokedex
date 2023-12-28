const url = 'https://pokeapi.co/api/v2/pokemon/1';

//função para converter em html

function convertPokemonToDiv (pokemon) {
    return `
    
    <li class="pokemon ${pokemon.type}">
        <span class="number"><b>#${pokemon.id}</b></span>
        <span class="name" align="center">${pokemon.name}</span>
        <div class="detail">
        <img  src="${pokemon.sprites.other['official-artwork'].front_default}" alt="${pokemon.name}" />
            
                <ol class="types">
                    <h2 style="color: black; size: 6cap;"><b>Sobre</b></h2>
                    <li class="tipo"> Espécie: <span class ="name">${pokemon.species.name}</span> </li>
                    <li class="tipo">Altura: <span class ="name" >${pokemon.height}</span></li>
                    <li class="tipo">Largura: <span class ="name" >${pokemon.weight}</span></li>
                    <li class="tipo">Habilidades: <span class ="name"> ${pokemon.abilities.map(ability => ability.ability.name).join(', ')} </span></li>
                </ol>
                
            </div>
            </li>
    `;

}

const pokemonDetalhes = document.getElementById('pokemonDetalhe')

//Cria uma promesse 
fetch(url) 
    //Converte em json o body com arrowFunction
    .then((response) => response.json())
    //busca os itens do json
    .then((pokemon) => {
        //Degugar no javaScript com o browser
    //debugger
        pokemonDetalhes.innerHTML += convertPokemonToDiv(pokemon) 
    })
    .catch((error) =>   console.error(error));