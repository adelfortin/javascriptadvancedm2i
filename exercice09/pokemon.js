self.addEventListener('message', function(e) {
    let pokemonName = e.data; 

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => response.json())
        .then(data => {
            postMessage(data); 
        })
        .catch(error => {
            postMessage({ error: error.message });
        });
});

