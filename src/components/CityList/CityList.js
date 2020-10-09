import React from 'react';

const CityList = ({cities, onRemoveCity}) => {
    return (
        <section className="cityList">
            <header><h3>Lista miast</h3></header>
            <ul>
                {cities.map( city => {
                    return(
                        <li key={city.id} onClick={onRemoveCity.bind(this, city.id)}>{city.name}</li>
                    );
                })}
            </ul>
        </section>
    );
}

export default CityList