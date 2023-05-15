import { useEffect, useState } from 'react';
import SecondaryMenu from '../../SecondaryMenu/SecondaryMenu';
import PaceCalculator from './PaceCalculate';

function PaceCalculate(props) {

    const [distance, setDistance] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [intensity, setIntensity] = useState('zone3');
    const [showData, setShowData] = useState(false);
    const [paceAndSpeed, setPaceAndSpeed] = useState({pace: '', speed: 0});
    const [changeShowTargetsTable, setChangeShowTargetsTable] = useState(false);

    useEffect(() => {
        if (distance > 0) {
            const paceCalculatorInstance = new PaceCalculator(distance, hours, minutes, seconds, intensity);
            setPaceAndSpeed(paceCalculatorInstance.compute());
        } else {
            setShowData(false);
        }
    }, [distance, hours, minutes, seconds, intensity])

    function paceCalculate(evt) {
        evt.preventDefault();
        if (hours < 0 || minutes < 0 || seconds < 0) {
            setShowData(false);
        } else if (distance > 0 && minutes >= 0) {
            setShowData(true);
        }
    }
    
    function handleChangeShowTargetsTable() {
        if (!changeShowTargetsTable) {
            setChangeShowTargetsTable(true);
        } else {
            setChangeShowTargetsTable(false);
        }
    }

    return(
        <div className="main__content calculators" id="pace-calculate">
        
            <SecondaryMenu 
                page="calculators"
                name="מחשבוני כושר"
            />

            <h2 className='text__title'>חישוב קצב ומהירות ריצה</h2> 
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
                <label className="calculator__form__data-label">זמן ריצה (hh:mm:ss):</label>
                    <div className='calculator__form__input calculator__form__input_time-parts'>
                        <input
                        className='calculator__form__input calculator__form__input_time' 
                        type="number" 
                        id="seconds" 
                        placeholder={0} 
                        value={seconds <= 0 ? '' : seconds > 59 ? seconds % 60 : seconds}
                        onChange={(e) => setSeconds(e.target.value)}
                        />:
                        <input
                        className='calculator__form__input calculator__form__input_time' 
                        type="number" 
                        id="minutes" 
                        placeholder={0} 
                        value={minutes <= 0 ? '' : minutes}
                        onChange={(e) => setMinutes(e.target.value)}
                        />:
                        <input
                        className='calculator__form__input calculator__form__input_time' 
                        type="number" 
                        id="hours" 
                        placeholder={0} 
                        value={hours <= 0 ? '' : hours}
                        onChange={(e) => setHours(e.target.value)}
                        />
                    </div>
                </fieldset>

                <fieldset className='calculator__form__data'>
                <label className="calculator__form__data-label">עצימות האימון:</label>
                    <select
                        className='calculator__form__input'
                        value={intensity}
                        onChange={(e) => setIntensity(e.target.value)}
                    >
                        <option className='calculator__form__input-option' type='radio' id='intensity-zone3' value='zone3'>אירובי, ריצת רצף</option>
                        <option className='calculator__form__input-option' type='radio' id='intensity-zone4' value='zone4'>אינטרוואלים בעצימות בינונית</option>
                        <option className='calculator__form__input-option' type='radio' id='intensity-zone5' value='zone5'>אינטרוואלים בעצימות גבוהה</option>
                    </select>
                </fieldset>

                <button className='calculator__form__submit-button' type='submit'>חשב</button>

                {
                showData ?
                <fieldset  className="calculator__form__result">
                    <p className="calculator__form__result-content">מרחק: {distance} מטרים.</p>
                    <p className="calculator__form__result-content">קצב ממוצע: {paceAndSpeed.pace} דקות לק"מ ({paceAndSpeed.speed} קמ"ש).</p>
                </fieldset>
                :
                <fieldset  className="calculator__form__result">
                    <p className="calculator__form__result-content">אנא וודא למלא את כל הפרטים ביחידות מידה הנדרשות. הנתונים צריכים להיות מספרים שלמים וגדולים מאפס.</p>
                </fieldset>
                }
            </form>

            <h3 className='text__subtitle' onClick={handleChangeShowTargetsTable}>{changeShowTargetsTable ? "-" : "+"} טבלת מטרות קצב לאימון</h3>

            {
                ((!paceAndSpeed.targets) || (!changeShowTargetsTable)) ? <p></p> :
                <table className='calculator__table'>
                    <tbody>
                        <tr>
                            <td className='calculator__table__cell calculator__table__capture' rowSpan={2}>מטרת אימון</td>
                            <td className='calculator__table__cell calculator__table__capture' colSpan={1}>קצב</td>
                            <td className='calculator__table__cell calculator__table__capture' colSpan={1}>מהירות</td>
                        </tr>
                        <tr>
                            <td className='calculator__table__cell calculator__table__capture' colSpan={1}>(דק' לק"מ)</td>
                            <td className='calculator__table__cell calculator__table__capture' colSpan={1}>(קמ"ש)</td>
                        </tr>
                        {
                            paceAndSpeed.targets.map((details, i) => (
                                <tr key={i}>
                                    <td className='calculator__table__cell'>{details[0][i]}</td>
                                    <td className='calculator__table__cell'>{details[1]}</td>
                                    <td className='calculator__table__cell'>{details[2]}</td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>
            }
            
        </div>
    )
}

export default PaceCalculate;
