import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FatPercentageCalculate from './fatPercentageCalculate';

function FatPercentageComponent(props) {

    const [showData, setShowData] = useState(false);
    const [gender, setGender] = useState("male");
    const [waist, setWaist] = useState(0);
    const [weight, setWeight] = useState(0);
    const [fpResult, setFpResult] = useState(0);
    
    function calculateAndShowData(e) {
        e.preventDefault();
        if (waist > 0 && weight > 0) {
            setShowData(true);
        } else {
            setShowData(false);
        }
    }

    useEffect(() => {
        if (waist > 0 && weight > 0) {
            const fatPercentageInstance = new FatPercentageCalculate(waist, weight, gender);
            setFpResult(fatPercentageInstance.compute());
        } else {
            setShowData(false);
        }
    }, [gender, weight, waist]);

    return(
        <div className="main__content calculators">
        
            <div className="BackToMenu_div">
                <Link to="/calculators">
                    <button className="main__back-to-menu_button">חזרה</button>
                </Link>
            </div>

            <h2 className='calculator__title'>חישוב אחוז שומן לפי היקפים</h2> 
            <form className='calculator__form' onSubmit={calculateAndShowData}>
                <fieldset className='calculator__form__data'>
                <label>מין:</label>
                    <select 
                    className='calculator__form__input' 
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    >
                    <option className="calculator__form__input-option" type="radio" id="gender-male" name="gender_hrTargets" value="male">זכר</option>
                    <option className="calculator__form__input-option" type="radio" id="gender-female" name="gender_hrTargets" value="female">נקבה</option>
                    </select>
                </fieldset>
                
                <fieldset className='calculator__form__data'>
                <label>משקל (בק"ג):</label>
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
                <label>היקף מותניים (בס"מ):</label>
                    <input
                    className='calculator__form__input' 
                    type="number" 
                    id="hrTargetsRest" 
                    placeholder="0" 
                    value={waist > 0 ? weight : ""}
                    onChange={(e) => setWaist(e.target.value)}
                    />
                </fieldset>

                <button className='calculator__form__submit-button' type='submit'>חשב</button>

                <fieldset  className="calculator__form__result">
                {
                    showData ? 
                        <p>תוצאה: {fpResult[0]}% אחוז שומן.<br />מסת שומן: {fpResult[1]} ק"ג.<br />מסת הגוף הרזה: {fpResult[2]} ק"ג</p>
                    :
                        <p>אנא וודא למלא את כל הפרטים ביחידות מידה הנדרשות. הנתונים צריכים להיות מספרים שלמים וגדולים מאפס.</p>
                }
                
                </fieldset>
            </form>
        </div>
    )
}

export default FatPercentageComponent;