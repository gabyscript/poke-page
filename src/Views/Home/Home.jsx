import './Home.css'
import { NavLink } from 'react-router-dom'

const Home = () => {

    return (
        <section className='banner-section'>    
            <div className='banner-div'>
                <h3 className='subtitle'>Bienvenido a Poke Page</h3>
                <h3 className='subtitle'>Tu Pokedex virtual</h3>
                <button className='pokedex-btn'>
                    <NavLink className="pokedex-navlink" to="/pokedex">
                        Ir a tu Pokedex
                    </NavLink>
                </button>
            </div>

        </section>
    )
}

export default Home