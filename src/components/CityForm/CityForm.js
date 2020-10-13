import React, {useState} from 'react';

import './CityForm.scss';

const CityForm = ({addCity}) => {
    const [enteredCityName, setEnteredCityName] = useState('');

    const submitHander = event => {
        event.preventDefault();
        if(enteredCityName.length < 3) {
            alert('Podaj minimum 3 znaki');
            return;
        } 
        addCity({name: enteredCityName});
        setEnteredCityName('');
    }

    return (
        <section className="cityForm">
            <form onSubmit={submitHander}>
                <div className="cityForm__formControl">
                    <input
                        type='text'
                        id="name"
                        value={enteredCityName}
                        className="cityForm__input"
                        placeholder="Podaj nazwę miasta"
                        onChange={event => setEnteredCityName(event.target.value)}
                    />
                    <button type="submit" className="cityForm__submit">Dodaj miasto</button>
                </div>
            </form>
        </section>
    );
}

export default CityForm;