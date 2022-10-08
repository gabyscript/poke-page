import './Navbar.css';

import { NavLink } from "react-router-dom";

const Navbar = () => {

    const setActiveClass = ({isActive}) => (isActive? "active" : undefined );

    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <div className='logo-div'>
                    <h1 className='logo'> Poke Page </h1>
                </div>
                <div className='links-div'>
                    <NavLink  id={ [setActiveClass] } className="navlinks" to="/home">
                        Home
                    </NavLink>                    
                    <NavLink  id={ [setActiveClass] } className="navlinks" to="/pokedex">
                        Pokedex
                    </NavLink>
                    <NavLink  id={ [setActiveClass] } className="navlinks" to="/pokemones">
                        Pokemones
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar