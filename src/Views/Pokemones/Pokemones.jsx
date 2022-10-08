import './Pokemones.css'

import { NavLink } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

/*style={{backgroundImage : `url(${pkmnElegido.sprites.other.official-artwork})`}}*/




const Pokemones = () => {

    const { pokemon } = useParams();

    const [infoPkmn, setInfoPkmn] = useState([]);    
    
    const [photoPkmn, setPhotoPkmn] = useState();
    

    useEffect(() => {
        consultarPokeApi();
    }, [])

    const consultarPokeApi = async () => {
        const url = 'https://pokeapi.co/api/v2/pokemon/' + pokemon;
        const response = await fetch(url);
        const baseDatosPkmn = await response.json();        
        setInfoPkmn([baseDatosPkmn])
        setPhotoPkmn([baseDatosPkmn.sprites.other.dream_world.front_default])  
        
    }

    return(
        <section className="pkmn-section">
            <div className='pkmn-div'>
                <div className='pkmn-photo' style={{backgroundImage : `url(${photoPkmn})`}}>

                </div>
                <div className='pkmn-info'>
                    {infoPkmn.map((infoInd, e)=><><h4 key={e}> Nombre: {infoInd.name} </h4>
                    <h5> N° Pokedex: {infoInd.id}</h5>
                    <h5> Tipo: {infoInd.types[0].type.name}  </h5>
                    <li> HP: {infoInd.stats[0].base_stat}</li>
                    <li> Ataque: {infoInd.stats[1].base_stat}</li>
                    <li> Defensa:{infoInd.stats[2].base_stat}</li>
                    <li> Ataque especial:{infoInd.stats[3].base_stat}</li>
                    <li> Defensa especial{infoInd.stats[4].base_stat}</li>
                    <li> Velocidad: {infoInd.stats[5].base_stat}</li></>   )}              

                    <button className='pokedex-btn'><NavLink className="pokedex-navlink" to="/pokedex">
                        Volver a tu pokedex
                    </NavLink></button>
                </div>
                 
                
            </div>   

        </section>

    )
}

export default Pokemones