import React from 'react';

const CityList = ({cities, onSelectCity, onRemoveCity}) => {
    return (
        <section className="cityList">
            <header><h3>Lista twoich miast:</h3></header>
            <ul>
                {cities.map( city => {
                    return(
                        <li key={city.id}><div onClick={onSelectCity.bind(this, city.name)}>{city.name}</div> - <span onClick={onRemoveCity.bind(this, city)}>X</span></li>
                    );
                })}
            </ul>
        </section>
    );
}

export default CityList