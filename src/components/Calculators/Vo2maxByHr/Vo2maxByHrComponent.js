import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Vo2maxByHrCalculate(props) {

    const [showData, setShowData] = useState(false);
    const [gender, setGender] = useState("male");
    const [age, setAge] = useState(0);
    const [hrRest, setHrRest] = useState(0);
    
    function calculateAndShowData(e) {
        e.preventDefault();
        if (age > 0 && hrRest > 0) {
            setShowData(true);
        } else {
            setShowData(false);
            console.log("Data missing.");
        }
    }

    // function round_number(value, decimals){
    //     var shifter = Math.pow(10, decimals);
    //     return Math.round(value * shifter) / shifter;
    // }

    useEffect(() => {
        console.log(`Gender: ${gender}\nAge: ${age}\nHR Rest: ${hrRest}`);
    }, [gender, age, hrRest]);

    return(
        <div className="main__content calculators" id="vo2maxCooperTest">
        
            <div className="BackToMenu_div">
                <Link to="/calculators">
                    <button className="main__back-to-menu_button">חזרה</button>
                </Link>
            </div>

            <h2 className='calculator__title'>חישוב צריכת חמצן מירבית לפי דופק</h2> 
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
                <label>גיל (בשנים):</label>
                    <input 
                    className='calculator__form__input' 
                    type="number" 
                    id="weight" 
                    placeholder="0" 
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    />
                </fieldset>
                
                <fieldset className='calculator__form__data'>
                <label>דופק במנוחה (15 שניות):</label>
                    <input
                    className='calculator__form__input' 
                    type="number" 
                    id="hrTargetsRest" 
                    placeholder="0" 
                    value={hrRest}
                    onChange={(e) => setHrRest(e.target.value)}
                    />
                </fieldset>

                <button className='calculator__form__submit-button' type='submit'>חשב</button>

                <fieldset  className="calculator__form__result">
                {
                    showData ? 
                        <p>תוצאות</p>
                    :
                        <p>אנא וודא למלא את כל הפרטים ביחידות מידה הנדרשות. הנתונים צריכים להיות מספרים שלמים וגדולים מאפס.</p>
                }
                
                </fieldset>
            </form>
        </div>
    )
}

export default Vo2maxByHrCalculate;
