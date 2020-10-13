import React from 'react';

import './WeatherData.scss';

const WeatherData = ({data}) => {
    return (
        <section className="weatherData">
            <h2 className="weatherData__header">{data.name} ({data.sys.country})</h2>
            <div className="weatherData__description">
                {data.weather[0].description}
                <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={data.weather[0].description}/>
            </div>
            <p>Temperatura: <strong>{(data.main.temp).toFixed(1)} <sup>o</sup>C</strong></p>
            <p>Temperatura odczuwalna: <strong>{data.main.feels_like} <sup>o</sup>C</strong></p>
            <p>Temperatura min.: <strong>{data.main.temp_min} <sup>o</sup>C</strong></p>
            <p>Temperatura max.: <strong>{data.main.temp_max} <sup>o</sup>C</strong></p>
            <p>Ciśnienie atmoferyczne: <strong>{data.main.pressure} hPa</strong></p>
            <p>Wilgotność: <strong>{data.main.humidity}%</strong></p>
            <br/>
            <p>Widoczność: <strong>{data.visibility}m</strong></p>
            <p>Wiatr: <strong>{data.wind.speed}m/s</strong></p>
            <p>Zachmurzenie: <strong>{data.clouds.all}%</strong></p>

            <br/>
            <p>Wschód słońca: <strong>{new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</strong></p>
            <p>Zachód słońca: <strong>{new Date(data.sys.sunset * 1000).toLocaleTimeString()}</strong></p>
            <p>Ostatnia aktualizacja: <strong>{new Date(data.dt *1000).toLocaleString()}</strong></p>
        </section>
    );
}

export default WeatherData;