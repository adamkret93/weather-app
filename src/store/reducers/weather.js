import * as actionTypes from '../actions/actionTypes'; 

const initialState = {
    userCities: [],
    weatherData: {},
    error: false,
}

const reducer = (state = initialState , action) => {
    switch (action.type) {
        case actionTypes.ADD_CITY:
            return {
                ...state,
                userCities: state.userCities.concat({ id: Math.random().toString(), ...action.city})
            }
        case actionTypes.REMOVE_CITY:
            return {
                ...state,
                userCities: state.userCities.filter(prevCity => prevCity.id !== action.city.id),
            }
        case actionTypes.FETCH_WEATHER_DATA_SUCCESS: {
            return {
                ...state,
                weatherData: action.weatherData,
                error: false
            }
        }
        case actionTypes.FETCH_WEATHER_DATA_FAIL: {
            return {
                ...state,
                weatherData: {},
                error: true,
            }
        }
        default:
            return state;
    }
}

export default reducer;