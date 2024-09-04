const inputElement = document.getElementById('pokemonName')

async function fetchData() {
    try{
        const pokemonName = document.getElementById('pokemonName').value.toLowerCase()
        const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
       
        if (!response.ok) {
            throw new Error ('Could not fetch resource')
        } else {
            
            const data = await response.json()
            //console.log(data)

            const pokemon = {
                sprite: data.sprites.front_default,
                name: data.name,
                hp: data.stats[0].base_stat,
                attack: data.stats[1].base_stat,
                defense: data.stats[2].base_stat
            }

            const cardElement = document.getElementById('card')
            const imgElement = document.getElementById('pokemonSprite')
            const nameElement = document.getElementById('name')
            const hpElement = document.getElementById('health')
            const attackElement = document.getElementById('attack')
            const defenseElement = document.getElementById('defense')

            cardElement.style.display = 'flex'

            imgElement.src = pokemon.sprite
            nameElement.innerText = `Name: ${pokemon.name.toUpperCase()}` 
            hpElement.innerText = `Hp: ${pokemon.hp}` 
            attackElement.innerText = `Attack: ${pokemon.attack}`
            defenseElement.innerText = `Defense: ${pokemon.defense}`

            inputElement.value = ''

        }
    }
    catch(error) {
        console.error(error)
    }
}



