import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Vo2maxByHrCalculate from './vo2maxByHrCalculate';

function Vo2maxByHrComponent(props) {

    const [showData, setShowData] = useState(false);
    const [gender, setGender] = useState("male");
    const [age, setAge] = useState(0);
    const [hrRest, setHrRest] = useState(0);
    const [vo2maxResult, setVo2maxResult] = useState(0);
    
    function calculateAndShowData(e) {
        e.preventDefault();
        if (age > 0 && hrRest > 0) {
            setShowData(true);
        } else {
            setShowData(false);
        }
    }

    useEffect(() => {
        if (age > 0 && hrRest > 0) {
            const vo2maxInstance = new Vo2maxByHrCalculate(age, gender, hrRest);
            setVo2maxResult(vo2maxInstance.compute());
        } else {
            setShowData(false);
        }
    }, [gender, age, hrRest]);

    return(
        <div className="main__content calculators" id="vo2maxCooperTest">
        
            <div className="main__back-to-menu">
                <Link to="/calculators">
                    <button className="main__back-to-menu__button">חזרה</button>
                </Link>
            </div>

            <h2 className='calculator__title'>חישוב צריכת חמצן מירבית לפי דופק</h2> 
            <form className='calculator__form' onSubmit={calculateAndShowData}>
                <fieldset className='calculator__form__data'>
                <label className="calculator__form__data-label">מין:</label>
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
                <label className="calculator__form__data-label">דופק במנוחה (15 שניות):</label>
                    <input
                    className='calculator__form__input' 
                    type="number" 
                    id="hrTargetsRest" 
                    placeholder="0" 
                    value={hrRest > 0 ? hrRest : ""}
                    onChange={(e) => setHrRest(e.target.value)}
                    />
                </fieldset>

                <button className='calculator__form__submit-button' type='submit'>חשב</button>

                <fieldset  className="calculator__form__result">
                {
                    showData ? 
                        <p className="calculator__form__result-content">דופק מירבי: {vo2maxResult.hrMax} פעימות לדקה.
                        <br className="calculator__form__result-content" />
                        דופק מנוחה: {vo2maxResult.hrRest} פעימות לדקה.
                        <br className="calculator__form__result-content" />
                        צריכת חמצן מירבית: {vo2maxResult.vo2max} מ"ל לדקה לק"ג גוף.</p>
                    :
                        <p className="calculator__form__result-content">אנא וודא למלא את כל הפרטים ביחידות מידה הנדרשות. הנתונים צריכים להיות מספרים שלמים וגדולים מאפס.</p>
                }
                
                </fieldset>
            </form>
        </div>
    )
}

export default Vo2maxByHrComponent;
