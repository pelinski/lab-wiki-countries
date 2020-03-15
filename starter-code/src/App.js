import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CountryDetail from './components/CountryDetail';
import CountriesList from './components/CountriesList';
import Nav from './components/Nav'
import countries from './countries.json';


// Una cosa chichos... A ver, Marc está explicando conforme a donde React se dirige

// https://reactjs.org/docs/hooks-intro.html#gradual-adoption-strategy


// y no lo hace mal, realmente os hace un gran favor explicando las cosas "a la última"
// pero no es así como vais a encontrarlo en los ejercicios, que no se actualizan a la misma
// velocidad de marc

// He hecho unas modificaciones mierdsas, pero que espero que os ayuden a encaminar el ejercicio

// a ver si así os ayuda a seguirlo, suerte!

const App = () => {

  //const { ...countries } = useState();

  //const countriesList = countries.map(e => e.name.common);

  return (
    <div className="App">
      <Nav />
      <div className="container">
        <div className="row">
          <CountriesList />
          <CountryDetail country={countries[1]} />
        </div>
      </div>
    </div >
  );
}

export default App;
