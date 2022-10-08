import './App.css';

import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Navigate } from 'react-router-dom';

/* Componentes*/

import Navbar from './components/Navbar/Navbar';

/* Vistas */

import Home from './Views/Home/Home';
import Pokedex from './Views/Pokedex/Pokedex';
import Pokemones from './Views/Pokemones/Pokemones';
import NotFound from './Views/NotFound/notFound'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={ < Navigate to="/home" />} />                      
          <Route path="/home" element={<Home />}/>
          <Route path="/pokedex/" element={<Pokedex />}/>
          <Route path="/pokemones/:pokemon" element={<Pokemones />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
