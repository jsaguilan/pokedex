const fetchpokemon = function(poke) {
    console.log(poke);
    const url=`https://pokeapi.co/api/v2/pokemon/${poke}`;
    fetch(url).then(function(res)  {
        console.log(res);
        if (res.status !="200") {
            alert(`Pokemon ${poke} no válido`)
        }
        else {
            console.log(res.json);
            return res.json();
        }
        
        

        
    }).then (function(data){
        
        console.log(data.sprites.front_shiny);
        console.log(data.weight);
        console.log(data.height);
        console.log(data.moves);
        console.log(data.types.type);
        cambiaImagen(data.sprites.front_default);
    })
        
}

/*fetchpokemon();*/

const cambiaImagen = function(url) {
    const imagen = document.getElementById("pokeimg");
    console.log(imagen);
    imagen.src=url;
    
}

/*cambiaImagen("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/152.png");*/

const imprimir=function() {
    const pokeName = document.getElementById("pokeinput");
    let pokemon = pokeinput.value;
    fetchpokemon(pokemon);
}
