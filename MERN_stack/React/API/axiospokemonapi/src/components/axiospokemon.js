

import React, {useState} from 'react'
import axios from 'axios';



const AxiosPok = (props) => {


    const [pokemon,setPokemon] = useState([]);


    const pokemonHandler = (e) => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response => {setPokemon(response.data.results)})
    }

    return (
        <>
        <button onClick={pokemonHandler}>Fetch The pokemon</button>
        <ul>
            {
            pokemon.map((item,index) => {
                return(<li key={index}>{item.name}</li>)
            })
            }
        </ul>
        </>



    )

}


export default AxiosPok