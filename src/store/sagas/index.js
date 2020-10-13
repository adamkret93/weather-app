import { takeLatest } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import { 
    fetchWeatherDataSaga
} from './weather'

export function* watchWeather() {
    yield takeLatest(actionTypes.FETCH_WEATHER_DATA, fetchWeatherDataSaga);
}