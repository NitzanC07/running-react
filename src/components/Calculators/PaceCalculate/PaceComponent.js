import { useEffect, useState } from 'react';
import SecondaryMenu from '../../SecondaryMenu/SecondaryMenu';

function PaceCalculate(props) {

    const [distance, setDistance] = useState(0);
    const [time, setTime] = useState(0);
    const [showData, setShowData] = useState(false);

    // function round_number(value, decimals){
    //     var shifter = Math.pow(10, decimals);
    //     return Math.round(value * shifter) / shifter;
    // }

    useEffect(() => {
        if (distance > 0 && time > 0) {
            setDistance(distance);
            setTime(time);
        } else {
            setShowData(false);
        }
    }, [distance, time])

    function paceCalculate(evt) {
        evt.preventDefault();
        if (distance > 0 && time > 0) {
            console.log('Calculate Pace for some distance.');
            setShowData(true);
        }
    }

    return(
        <div className="main__content calculators" id="pace-calculate">
        
        <SecondaryMenu 
            page="calculators"
            name="מחשבוני כושר"
        />

        <h2 className='calculator__title'>חישוב קצב ומהירות ריצה</h2> 
        <form className='calculator__form' onSubmit={paceCalculate}>
            
            <fieldset className='calculator__form__data'>
            <label className="calculator__form__data-label">מרחק (במטרים):</label>
                <input
                className='calculator__form__input' 
                type="number" 
                id="distance" 
                placeholder="0" 
                value={distance > 0 ? distance : ""}
                onChange={(e) => setDistance(e.target.value)}
                />
            </fieldset>

            <fieldset className='calculator__form__data'>
            <label className="calculator__form__data-label">זמן מטרה (בדקות):</label>
                <input
                className='calculator__form__input' 
                type="number" 
                id="time" 
                placeholder="0" 
                value={time > 0 ? time : ""}
                onChange={(e) => setTime(e.target.value)}
                />
            </fieldset>

            <button className='calculator__form__submit-button' type='submit'>חשב</button>

            {
            showData ?
            <fieldset  className="calculator__form__result">
                <p className="calculator__form__result-content">מרחק מטרה: {distance} מטרים.</p>
                <p className="calculator__form__result-content">קצב מטרה: {time}</p>
                <p className="calculator__form__result-content">מהירות מטרה: {time}</p>
            </fieldset>
            :
            <fieldset  className="calculator__form__result">
                <p className="calculator__form__result-content">אנא וודא למלא את כל הפרטים ביחידות מידה הנדרשות. הנתונים צריכים להיות מספרים שלמים וגדולים מאפס.</p>
            </fieldset>
            }
        </form>
        </div>
    )
}

export default PaceCalculate;
