import React, {useState, useEffect, useMemo, useCallback} from 'react';
import axios from 'axios';

import './Weather.scss';
import CityForm from '../components/CityForm/CityForm';
import CityList from '../components/CityList/CityList';
import WeatherData from '../components/WeatherData/WeatherData';

const Weather = () => {
    const [userCities, setUserCities] = useState([]);
    const [selectCity, setSelectCity] = useState('');
    const [weatherData, setWeatherData] = useState({});
    
    useEffect(()=> {
        if(selectCity.length) {
            fetchWheatherData(selectCity)
            const interval = setInterval(() => {
                fetchWheatherData(selectCity);
            }, 10000);

            return () => clearInterval(interval);
        }
    }, [selectCity]);
    
    const addCityHandler = useCallback(city => {
        const cityExist = userCities.some(existCity => existCity.name === city.name);
        if(cityExist) {
            alert("Miasto o podanej nazwie jest już dodane do listy");
            return 0;
        }
        setUserCities(prevCities => [
            ...prevCities,
            { id: Math.random().toString(), ...city}
        ]);
    }, [userCities]);

    const selectCityHandler = useCallback(cityName => {
        setSelectCity((prevSelectCity) => prevSelectCity !== cityName ? cityName : prevSelectCity );
    }, []);

    const removeCityHandler = useCallback(city => {
        setUserCities((prevCities) => prevCities.filter((prevCity) => prevCity.id !== city.id));
        if(selectCity.length) {
            setSelectCity((prevSelectCity) => prevSelectCity === city.name ? '' : prevSelectCity);
            setWeatherData((prevWeatherData) => prevWeatherData.data.name === city.name ? {} : prevWeatherData);
        }
    }, [selectCity]);

    const fetchWheatherData = cityName => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=df2ec102418328fbb451b0a01da5eda6&units=metric&lang=pl`)
        .then(function (response) {
          // handle success
          console.log(response.data);
          setWeatherData(response);
        })
        .catch(function (error) {
          // handle error
          setSelectCity('');
          console.log(error);
        });
    }

    const cityForm = useMemo(()=> {
        return <CityForm onAddCity={addCityHandler} />
    }, [addCityHandler]);

    const cityList = useMemo(()=> {
        return <CityList cities={userCities} onSelectCity={selectCityHandler} onRemoveCity={removeCityHandler}/>
    }, [userCities, selectCityHandler, removeCityHandler]);

    const weatherBlock = (
        weatherData.status === 200 ? <WeatherData data={weatherData.data}/> : <p>Proszę wybrać miasto</p>
    );

    return (
        <div className="weatherApp">
            <header><h2>Stacja pogodowa</h2></header>
            {cityForm}
            {cityList}
            {weatherBlock}
        </div> 
    );
};

export default Weather;