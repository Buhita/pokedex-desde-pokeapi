import React from 'react';
import { useState } from 'react';

export default function PokemonCard({pokemonData}) {

const [isShiny,setIsShiny] = useState(false)

    if(!pokemonData) {
        return <h1 className="bg-white p-4 rounded-lg">Cargando...</h1>
    }
    return (
        <div className="bg-white p-4 rounded-lg">
            <img src={isShiny ? pokemonData.sprites.front_shiny : pokemonData.sprites.front_default}
            alt = "pokemonimage"
            className='w-full h-48 object-cover '/>
            <div>
                <h2 className='text-xl font-semibold capitalize'>{pokemonData.name}</h2>
                <p>ID: {pokemonData.id}</p>
                <button 
                className='bg-blue-800 text-white px-4 p-2 rounded-lg hover:bg-yellow-600 transition'
                onClick={() => setIsShiny(!isShiny)}>
                    Shiny! </button>   
            </div>
        </div>
    );
}