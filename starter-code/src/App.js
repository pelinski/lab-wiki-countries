import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountryDetail from './components/CountryDetail';
import countries from './countries.json';


// Una cosa chichos... A ver, Marc está explicando conforme a donde React se dirige

// https://reactjs.org/docs/hooks-intro.html#gradual-adoption-strategy


// y no lo hace mal, realmente os hace un gran favor explicando las cosas "a la última"
// pero no es así como vais a encontrarlo en los ejercicios, que no se actualizan a la misma
// velocidad de marc

// He hecho unas modificaciones mierdsas, pero que espero que os ayuden a encaminar el ejercicio

// a ver si así os ayuda a seguirlo, suerte!

const App = (countries) => {
  
  const { ...countries } = useState();

  //const listaPaises = countries.map(e => e.name.common);
  return (
    <div className="App">
      <CountryDetail />
    </div>
  );
}

export default App;
