import * as actionTypes from './actionTypes';

export const addCity = (city) => {
    return {
        type: actionTypes.ADD_CITY,
        city: city
    }
};

export const removeCity = (city) => {
    return {
        type: actionTypes.REMOVE_CITY,
        city: city
    }
};

export const fetchWeatherDataSuccess = data => { 
    return {
      type: actionTypes.FETCH_WEATHER_DATA_SUCCESS,
      weatherData: data
    };
};

export const fetchWeatherDataFail = error => { 
    return {
      type: actionTypes.FETCH_WEATHER_DATA_FAIL,
      error: error
    };
};

export const fetchWeatherData = (cityName) => {
    return {
        type: actionTypes.FETCH_WEATHER_DATA,
        cityName: cityName
    }
};