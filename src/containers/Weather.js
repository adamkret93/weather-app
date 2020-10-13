import React from 'react';
import { connect } from "react-redux";
import * as weatherActions from '../store/actions/index' 

import './Weather.scss';
import CityForm from '../components/CityForm/CityForm';
import CityList from '../components/CityList/CityList';
import WeatherData from '../components/WeatherData/WeatherData';

const Weather = (props) => {
    
    const addCityHandler = (city) => {
        const cityExist = props.userCities.some(existCity => existCity.name === city.name);
        if(cityExist) {
            alert("Miasto o podanej nazwie jest już dodane do listy");
            return 0;
        }
        props.onAddCity(city);
    };

    const selectCityHandler = cityName => {
        if(props.weatherData.name !== cityName) 
            props.onFetchWeatherData(cityName);
    };

    return (
        <div className="weatherApp">
            <header><h2>Stacja pogodowa</h2></header>
            <div className="weatherApp__content">
                <div className="weatherApp__col weatherApp__col--left">
                    <CityForm addCity={addCityHandler} />
                    <CityList cities={props.userCities} selectCity={selectCityHandler} onRemoveCity={props.onRemoveCity}/>
                </div>
                <div className="weatherApp__col weatherApp__col--right">
                    {props.error ? "Coś poszło nie tak. Sprawdź czy podana nazwa jest rawidłowa i spróbuj ponownie." : null}
                    {props.weatherData.name !== undefined ? <WeatherData data={props.weatherData}/> : null}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    userCities: state.userCities,
    selectedCity: state.selectedCity,
    weatherData: state.weatherData,
    error: state.error,
});

const mapDispatchToProps = dispatch => ({
    onAddCity: (city) => dispatch(weatherActions.addCity(city)),
    onRemoveCity: (city) => dispatch(weatherActions.removeCity(city)),
    onFetchWeatherData: (cityName) => dispatch(weatherActions.fetchWeatherData(cityName))
});

export default connect(mapStateToProps, mapDispatchToProps)(Weather);