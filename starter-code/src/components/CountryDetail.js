import React from "react";
import countries from "../countries.json";

const borderCountries = (code) => {
    const borders = [];
    code.forEach(c => {
        borders.push(countries.map(country => (country.cca3 === c) ? (country.name.common) : undefined).filter(e => e))
    })
    return borders;
}

const CountryDetail = ({ country }) => {

    const borders = borderCountries(country.borders)

    return (
        <div className="col-7">
            <h1>{country.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ width: "30%" }}>Capital</td>
                        <td>{country.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{country.area} km
      <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {country.borders.map((e, i) => (<li key={i}><a href="/AND">{borders[i]}</a></li>))}
                                <li><a href="/AND">Andorra</a></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>)
};

export default CountryDetail;