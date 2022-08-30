
// id = number || name = string || limit = number

import React, { useEffect, useState } from "react"

//          |         dominio       |endpoints| parametros
// const url = "https://api.coderhouse.com/alumnos?id=15"

// query params
// const nombre = "Alesio Adrover"
// const url = `https://api.coderhouse.com/alumnos?name=${ encodeURI(nombre) }&limit=5`

// https://api.coderhouse.com/alumnos/{id}
// segment params
// const url = 'https://api.coderhouse.com/alumnos/15523'
// const url = 'https://api.coderhouse.com/alumnos/{idCurso}/{nombreCurso}'
// const url = 'https://api.coderhouse.com/alumnos/38040/reactjs'


// fetch(url: string, config: obj)
// fetch('https://api.coderhouse.com/alumnos/38040/reactjs')
//     .then()

// fetch('https://pokeapi.co/api/v2/pokemon', {
//     method: 'POST',
//     headers: {
//         'ApiKey': 'asdñflkjñlkga-1|23124135-lkj235'
//     },
//     body: JSON.stringify({
//         id: 2500,
//         nombre: 'Lucas Lobos',
//         abilities: [1, 2, 3],
//         tipo: ['eléctrico', 'volador']
//     })
// })
//     .then((resp) => resp.json())
//     .then((data) => console.log(data))
        


const PokeApi = () => {

    const [id, setId] = useState(1)
    const [pokemon, setPokemon] = useState(null)

    console.log(id)

    const handleSiguiente = () => {
        setId(id + 1)
    }

    const handleAnterior = () => {
        if (id > 1) {
            setId(id - 1)
        }
    }

    
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((resp) => resp.json())
            .then((data) => {
                setPokemon(data)
            })
        
    }, [id])




    return (
        <div className="container my-5">
            <h2>Poke Api</h2>
            <hr/>

            {
                pokemon 
                    ? 
                        <div>
                            <h3>{pokemon.name}</h3>
                            <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                        </div>
                        
                    : null
            }
            
            <button 
                onClick={handleAnterior} 
                className="btn btn-outline-primary"
                disabled={id === 1}
            >
                Anterior
            </button>
            
            <button 
                onClick={handleSiguiente} 
                className="btn btn-primary mx-2"
            >
                Siguiente
            </button>


        </div>
    )
}

export default PokeApi