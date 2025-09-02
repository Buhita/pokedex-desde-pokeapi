import { useState,useEffect } from 'react'
import PokemonCard from './components/PokemonCard'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {

  const [pokemonData, setPokemonData] = useState([])
  const BASE_URL = "https://pokeapi.co/api/v2/pokemon/"

  const fetchPokemons = async (id) => {
    try{
      const response = await fetch(`${BASE_URL}${id}`)
      const data = await response.json()
      // console.log(data)
      setPokemonData((prevpokemonData) => [...
      prevpokemonData, data])

      console.log(pokemonData)
    }catch(error){
      console.error("ERROR CON EL FETCH DE POKEMONS")
      // console.error(error)
    } 
  }

  const fetchAllPokemons = () => 
  {
    for(let i=1; i<=20; i++){
      fetchPokemons(i)
    }
  }

  useEffect(() => {
    fetchAllPokemons()
  },[])

  useEffect(() => {
    console.log(pokemonData)
  },[pokemonData])

  return (
    <>
    <nav className='bg-blue-400'>
      <h1 className='text-4xl font-semibold text-center py-6'>POKEMON API DEMO</h1>
    </nav>
    <div className="min-h-screen bg-gray-200 p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Pokémon Cards</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {pokemonData.map((pokemon,index) => (
            <PokemonCard key={index} pokemonData={pokemon}/>
          ))}
        </div>
    </div>
    </>
  )
}

export default App
