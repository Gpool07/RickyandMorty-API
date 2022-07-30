
import ImageRickMorty from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Characters from './components/characters';


function App() {
  const[characters, setCharacters]=useState(null);

  const reqApi= async ()=>{
    const api=await fetch('https://rickandmortyapi.com/api/character');
    const characterApi=await api.json();  
    //console.log(characterApi);
    setCharacters(characterApi.results);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick And Morty</h1>
        {characters ?(
          <Characters characters={characters} setCharacters={setCharacters}/>
        ): (
          <>
            <img src={ImageRickMorty}  alt='Rick & Morty' className='img-home'></img>
            <button onClick={reqApi} className='btn-search'>Buscar Personajes</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
