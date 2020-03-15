import React from "react";
import { Link } from "react-router-dom";
import countries from '../countries.json';
import ReactCountryFlag from "react-country-flag"


const CountriesList = ({ country, setCountry }) => {

    //<a className="list-group-item list-group-item-action active" href="/FRA">🇫🇷 France</a>

    return (<div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
        <div className="list-group">
            {
                countries.map((e, i) => {
                    if (e === country) {
                        return (
                            <Link className="list-group-item list-group-item-action active" onClick={() => setCountry(e)} key={i}><ReactCountryFlag countryCode={e.cca2} /> {e.name.common}</Link>
                        )
                    }
                    return <Link className="list-group-item list-group-item-action" onClick={() => setCountry(e)} key={i}><ReactCountryFlag countryCode={e.cca2} /> {e.name.common}</Link>
                })
            }
        </div>
    </div >)
};

export default CountriesList;