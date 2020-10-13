import React from 'react';

import './CityList.scss';

const CityList = ({cities, selectCity, onRemoveCity}) => {
    return (
        <section className="cityList">
            <header><h3>Lista twoich miast:</h3></header>
            <ul className="cityList__items">
                {cities.map( city => {
                    return(
                        <li key={city.id} className="cityList__item">
                            <div onClick={selectCity.bind(this, city.name)} className="cityList__name">{city.name}</div>
                            <button onClick={onRemoveCity.bind(this, city)} className="cityList__removeButton" >X</button>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

export default CityList