import { useEffect, useState } from 'react';
import BmiCalculate from './bmiCalculator';
import SecondaryMenu from '../../SecondaryMenu/SecondaryMenu';

function BmiComponent(props) {

    const [showData, setShowData] = useState(false);
    const [age, setAge] = useState(0);
    const [personHeight, setPersonHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [bmiResult, setBmiResult] = useState([]);

    function calculateAndShowData(e) {
        e.preventDefault();
        if (personHeight > 0 && weight > 0 && age > 0) {
            setShowData(true);
        } else {
            setShowData(false);
        }
    }

    useEffect(() => {
        if (personHeight > 0 && weight > 0 && age > 0) {
            const bmiResultInstance = new BmiCalculate(weight, personHeight, age)
            setBmiResult(bmiResultInstance.compute());
        } else {
            setShowData(false);
        }
        
    }, [age, personHeight, weight]);

    return(
        <div className="main__content calculators">
        
            <SecondaryMenu
                page="calculators"
                name="מחשבוני כושר"
            />

            <h2 className='text__title'>חישוב יחס מסת גוף</h2> 
            <form className='calculator__form' onSubmit={calculateAndShowData}>
                <fieldset className='calculator__form__data'>
                    <label className="calculator__form__data-label">גיל (בשנים):</label>
                    <input 
                    className='calculator__form__input' 
                    type="number" 
                    id="weight" 
                    placeholder="0" 
                    value={age > 0 ? age : ""}
                    onChange={(e) => setAge(e.target.value)}
                    />
                </fieldset>

                <fieldset className='calculator__form__data'>
                <label className="calculator__form__data-label">משקל (בק"ג):</label>
                    <input 
                    className='calculator__form__input' 
                    type="number" 
                    id="weight" 
                    placeholder="0" 
                    value={weight > 0 ? weight : ""}
                    onChange={(e) => setWeight(e.target.value)}
                    />
                </fieldset>
                
                <fieldset className='calculator__form__data'>
                <label className="calculator__form__data-label">גובה (בס"מ):</label>
                    <input
                    className='calculator__form__input' 
                    type="number" 
                    id="hrTargetsRest" 
                    placeholder="0" 
                    value={personHeight > 0 ? personHeight : ""}
                    onChange={(e) => setPersonHeight(e.target.value)}
                    />
                </fieldset>

                <button className='calculator__form__submit-button' type='submit'>חשב</button>

                <fieldset  className="calculator__form__result">
                {
                    showData ? 
                        <p className="calculator__form__result-content">תוצאה: {bmiResult[0]}
                        <br className="calculator__form__result-content" />
                        {bmiResult[1]}</p>
                    :
                        <p className="calculator__form__result-content">אנא וודא למלא את כל הפרטים ביחידות מידה הנדרשות. הנתונים צריכים להיות מספרים שלמים וגדולים מאפס.</p>
                }
                
                </fieldset>
            </form>
        </div>
    )
}

export default BmiComponent;