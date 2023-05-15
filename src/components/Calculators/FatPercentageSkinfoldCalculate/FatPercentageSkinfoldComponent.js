import { useEffect, useState } from "react";
import fatPercentageSkinfoldCalculate from './fatPercentageSkinfoldCalculate';
import SecondaryMenu from "../../SecondaryMenu/SecondaryMenu";

function FatPercentageSkinfoldCalculate(props) {

    const [showData, setShowData] = useState(false);
    const [gender, setGender] = useState("male");
    const [age, setAge] = useState(0);
    const [skinfoldWaist, setSkinfoldWaist] = useState(0);
    const [weight, setWeight] = useState(0);
    const [fpResult, setFpResult] = useState(0);
    const [showTheory, setShowTheory] = useState(false);
    
    function calculateAndShowData(e) {
        e.preventDefault();
        if (age > 0 && weight > 0 && skinfoldWaist > 0) {
            setShowData(true);
        } else {
            setShowData(false);
        }
    }

    useEffect(() => {
        if (age > 0 && weight > 0 && skinfoldWaist > 0) {
            const fpInstance = new fatPercentageSkinfoldCalculate(skinfoldWaist, weight, gender, age);
            setFpResult(fpInstance.compute());
        } else {
            setShowData(false);
        }
    }, [gender, age, weight, skinfoldWaist]);

    function changeShowTheory() {
        if (!showTheory) {
            setShowTheory(true);
        } else {
            setShowTheory(false);
        }
    }

    return(
        <div className="main__content calculators" id="vo2maxCooperTest">
        
            <SecondaryMenu 
                page="calculators"
                name="מחשבוני כושר"
            />

            <h2 className='text__title'>חישוב אחוז שומן לפי קפלי עור</h2> 
            <form className='calculator__form' onSubmit={calculateAndShowData}>
                <fieldset className='calculator__form__data'>
                <label className='calculator__form__data-label'>מין:</label>
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
                <label className='calculator__form__data-label'>גיל (בשנים):</label>
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
                <label className='calculator__form__data-label'>עובי צביטה במותן (במ"מ):</label>
                    <input
                    className='calculator__form__input' 
                    type="number" 
                    id="hrTargetsRest" 
                    placeholder="0" 
                    value={skinfoldWaist > 0 ? skinfoldWaist : ""}
                    onChange={(e) => setSkinfoldWaist(e.target.value)}
                    />
                </fieldset>

                <fieldset className='calculator__form__data'>
                <label className='calculator__form__data-label'>משקל (בק"ג):</label>
                    <input
                    className='calculator__form__input' 
                    type="number" 
                    id="hrTargetsRest" 
                    placeholder="0" 
                    value={weight > 0 ? weight : ""}
                    onChange={(e) => setWeight(e.target.value)}
                    />
                </fieldset>

                <button className='calculator__form__submit-button' type='submit'>חשב</button>

                <fieldset  className="calculator__form__result">
                {
                    showData ? 
                        <p className="calculator__form__result-content">תוצאה: {fpResult[0]}% אחוז שומן.<br className="calculator__form__result-content" />מסת שומן: {fpResult[1]} ק"ג.<br className="calculator__form__result-content" />מסת הגוף הרזה: {fpResult[2]} ק"ג.</p>
                    :
                        <p className="calculator__form__result-content">אנא וודא למלא את כל הפרטים ביחידות מידה הנדרשות. הנתונים צריכים להיות מספרים שלמים וגדולים מאפס.</p>
                }
                </fieldset>
            </form>

            <h3 className='text__subtitle' onClick={changeShowTheory}>{showTheory ? "-" : "+"} רקע תאורתי</h3>
            <section className="text__inforamtive-session">
            {
                showTheory ? 
                <div>
                    <p className='text__description'>
                        מה זה אחוז שומן? למה חשוב להכיר אותו? איך מחשבים אותו?
                    </p>
                    <p className='text__description'>
                        <b className='text__description'>מקורות:</b>
                        <ul className='text__description'>
                            <li className='text__description'>קורס מאמני ריצות ארוכות. בית הספר למקצועות הספורט. תל אביב. 2019.</li>
                            <li className='text__description'>ד"ר ענבר, ע' ונייס, ש'. <b className='calculator__text_bold'>הפיזיולוגיה של המאמץ.</b> הוצאת "פוקוס". 2011.</li>
                            <li className='text__description'>https://www.calculator.net/body-fat-calculator.html</li>
                        </ul>
                    </p>
                </div>
                :
                ""
            }
            </section>
        </div>
    )
}

export default FatPercentageSkinfoldCalculate;