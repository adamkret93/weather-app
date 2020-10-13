import { delay, put } from 'redux-saga/effects';

import axios from 'axios';
import * as actions from '../actions';

export function* fetchWeatherDataSaga(action) {
    try {
        while(true){
            const response = yield axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${action.cityName}&appid=df2ec102418328fbb451b0a01da5eda6&units=metric&lang=pl`)
            yield put(actions.fetchWeatherDataSuccess(response.data));  
            yield delay(10000);
        }
    } catch (error) {
        yield put(actions.fetchWeatherDataFail(error));
    }
}