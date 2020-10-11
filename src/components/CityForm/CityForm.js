import React, {useState} from 'react';

const CityForm = ({onAddCity}) => {
    const [enteredCityName, setEnteredCityName] = useState('');

    const submitHander = event => {
        event.preventDefault();
        if(enteredCityName.length < 3) {
            alert('Podaj minimum 3 znaki');
            return;
        } 
        onAddCity({name: enteredCityName});
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
                        placeholder="Podaj nazwę miasta"
                        onChange={event => setEnteredCityName(event.target.value)}
                    />
                </div>
                <div className="cityForm__actions">
                    <button type="submit">Dodaj Miasto</button>
                </div>
            </form>
        </section>
    );
}

export default CityForm;