import React, {useState} from 'react';

import './Weather.scss';
import CityForm from './CityForm/CityForm';
import CityList from './CityList/CityList';

const Weather = () => {
    const [userCities, setUserCities] = useState([]);

    
    const addCityHandler = city => {
        const cityExist = userCities.some(existCity => existCity.name === city.name);
        if(cityExist) {
            alert("Miasto o podanej nazwie jest już dodane do listy");
            return 0;
        }
        setUserCities(prevCities => [
            ...prevCities,
            { id: Math.random().toString(), ...city}
        ]);
    };

    const removeCityHandler = cityId => {
        setUserCities((prevCities) => prevCities.filter((city) => city.id !== cityId));
    };

    


    return (
        <div className="weatherApp">
            <header><h2>Stacja pogodowa</h2></header>
            <CityForm onAddCity={addCityHandler} />
            <CityList cities={userCities} onRemoveCity={removeCityHandler}/>
        </div>
    );
};

export default Weather;