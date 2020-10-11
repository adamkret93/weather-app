import React from 'react';

import './WeatherData.scss';

const WeatherData = ({data}) => {
    return (
        <section>
            <h2>Wybrana miejscowość: {data.name} ({data.sys.country})</h2>
            <p>Czas aktualizacji danych: {new Date(data.dt *1000).toLocaleString()}</p>
            <p>wschód słońca: {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
            <p>zachód słońca: {new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
            {data.weather[0].description}
            <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={data.weather[0].description}/>
        </section>
    );
}

export default WeatherData;