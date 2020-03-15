import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CountryDetail from './components/CountryDetail';
import CountriesList from './components/CountriesList';
import Nav from './components/Nav'
import countries from './countries.json';


const App = () => {

  const [country, setCountry] = useState(countries[1]);

  return (
    <div className="App" style={{ textAlign: "left" }}>
      <Nav />
      <div className="container">
        <div className="row">
          <CountriesList country={country} setCountry={setCountry} />
          <CountryDetail country={country} setCountry={setCountry} />
        </div>
      </div>
    </div >
  );
}

export default App;
