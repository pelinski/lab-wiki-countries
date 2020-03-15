import React from "react";
import countries from '../countries.json';
import ReactCountryFlag from "react-country-flag"


const CountriesList = () => {

    //<a className="list-group-item list-group-item-action active" href="/FRA">🇫🇷 France</a>

    return (<div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
        <div className="list-group" style={{ textAlign: "left" }}>
            {
                countries.map((e, i) => (
                    < a className="list-group-item list-group-item-action" href="/ABW" key={i}><ReactCountryFlag countryCode={e.cca2} /> {e.name.common}</a>
                ))
            }
        </div>
    </div >)
};

export default CountriesList;