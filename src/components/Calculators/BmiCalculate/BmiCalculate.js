import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function BmiCalculate(props) {

    const [showData, setShowData] = useState(false);
    const [age, setAge] = useState("male");
    const [personHeight, setPersonHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    
    function calculateAndShowData(e) {
        e.preventDefault();
        if (personHeight > 0 && weight > 0 && age > 0) {
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
        console.log(`Age: ${age}\nWeight: ${weight}\nHeight: ${personHeight}`);
    }, [weight, age, personHeight]);

    return(
        <div className="main__content calculators">
        
            <div className="BackToMenu_div">
                <Link to="/calculators">
                    <button className="main__back-to-menu_button">חזרה</button>
                </Link>
            </div>

            <h2 className='calculator__title'>חישוב יחס מסת גוף</h2> 
            <form className='calculator__form' onSubmit={calculateAndShowData}>
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
                <label>משקל (בק"ג):</label>
                    <input 
                    className='calculator__form__input' 
                    type="number" 
                    id="weight" 
                    placeholder="0" 
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    />
                </fieldset>
                
                <fieldset className='calculator__form__data'>
                <label>גובה (בס"מ):</label>
                    <input
                    className='calculator__form__input' 
                    type="number" 
                    id="hrTargetsRest" 
                    placeholder="0" 
                    value={personHeight}
                    onChange={(e) => setPersonHeight(e.target.value)}
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

export default BmiCalculate;