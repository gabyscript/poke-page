import './Pokedex.css'

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Pokedex = () => {

    const [pokemones, setPokemones] = useState([])    
    const [pokemon, setPokemon] = useState("");
    const navigate = useNavigate();


    useEffect(() => {
        consultarPokeApi();
    }, [])

    const consultarPokeApi = async () => {
        const url = 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0';
        const response = await fetch(url);
        const baseDatosPkmn = await response.json();
        setPokemones(baseDatosPkmn.results)
        console.log(pokemones)
    }

    const elegirPokemon = (e) => {
        setPokemon(e.target.value);
        
    }

    const buscarPokemon = () => {
        navigate(`/pokemones/${pokemon}`)
        
    };

    return (
        <section className='select-section'>
            <div className='pokedex-div'>
                <h3>Elige a tu pokemon</h3>
                <select className='select-pkmn' value={pokemon} onChange={elegirPokemon}>
                    <option>-</option>
                    {pokemones.map(pokemonInd =><option>{pokemonInd.name}</option>)}
                </select>
                <button className='pkmn-btn' onClick={buscarPokemon}>Buscar en la pokedex</button>
            </div>            
        </section>
    )
}

export default Pokedex