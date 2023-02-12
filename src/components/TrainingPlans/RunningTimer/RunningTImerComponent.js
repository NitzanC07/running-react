import '../__title/training-plans__title.css';
import '../__text/training-plans__text.css';
import '../__text/_bold/training-plans__text_bold.css';
import '../__text/_list/training-plans__text_list.css';
import '../__text/_list-item/training-plans__text_list-item.css';
import '../__table/training-plans__table.css';
import '../__table/__capture/training-plans__table__capture.css';
import '../__table/__cell/training-plans__table__cell.css';
import '../__subtitle/training-plans__subtitle.css';
import '../__form/training-plans__form.css';
import '../__form/__data/training-plans__form__data.css';
import '../__form/__data/training-plans__form__data-label.css';
import '../__form/__input/training-plans__form__input.css';
import '../__form/__input/_time/training-plans__form__input_time.css';
import '../__form/__input/_time-parts/training-plans__form__input_time-parts.css';
import '../__form/__result/training-plans__form__result.css';
import '../__form/__result/training-plans__form__result-content.css';
import '../__form/__submit-button/training-plans__form__submit-button.css';
import SecondaryMenu from "../../SecondaryMenu/SecondaryMenu";

function RunningTimer(props) {

    const runningTimerFunc = (e) => {
        e.preventDefault();
        console.log('Activate running timer...');
    }
    
    return(
        <div className="main__content training-plans" id="training-plans">
            <SecondaryMenu
                page="training-plans"
                name="תוכניות וכלי אימון"
            />
            <h2 className="training-plans__title">שעון עצר לריצה</h2>

            <form className='training-plans__form' onSubmit={runningTimerFunc}>

                <fieldset className='training-plans__form__data'>
                <label className="training-plans__form__data-label">זמן ריצה (hh:mm:ss):</label>
                    <div className='training-plans__form__input training-plans__form__input_time-parts'>
                        <input
                        className='training-plans__form__input training-plans__form__input_time' 
                        type="number" 
                        id="seconds" 
                        placeholder={0} 
                        // value={seconds <= 0 ? '' : seconds > 59 ? seconds % 60 : seconds}
                        // onChange={(e) => setSeconds(e.target.value)}
                        />:
                        <input
                        className='training-plans__form__input training-plans__form__input_time' 
                        type="number" 
                        id="minutes" 
                        placeholder={0} 
                        // value={minutes <= 0 ? '' : minutes}
                        // onChange={(e) => setMinutes(e.target.value)}
                        />
                    </div>
                </fieldset>

                <fieldset className='training-plans__form__data'>
                <label className="training-plans__form__data-label">זמן התאוששות (hh:mm:ss):</label>
                    <div className='training-plans__form__input training-plans__form__input_time-parts'>
                        <input
                        className='training-plans__form__input training-plans__form__input_time' 
                        type="number" 
                        id="seconds" 
                        placeholder={0} 
                        // value={seconds <= 0 ? '' : seconds > 59 ? seconds % 60 : seconds}
                        // onChange={(e) => setSeconds(e.target.value)}
                        />:
                        <input
                        className='training-plans__form__input training-plans__form__input_time' 
                        type="number" 
                        id="minutes" 
                        placeholder={0} 
                        // value={minutes <= 0 ? '' : minutes}
                        // onChange={(e) => setMinutes(e.target.value)}
                        />
                    </div>
                </fieldset>

                <fieldset className='calculator__form__data'>
                <label className="calculator__form__data-label">מספר חזרות:</label>
                    <input
                    className='calculator__form__input' 
                    type="number" 
                    id="distance" 
                    placeholder="0" 
                    // value={distance > 0 ? distance : ""}
                    // onChange={(e) => setDistance(e.target.value)}
                    />
                </fieldset>

                <button className='training-plans__form__submit-button' type='submit'>הפעלת שעון עצר</button>

                {/* {
                showData ?
                <fieldset  className="training-plans__form__result">
                    <p className="training-plans__form__result-content">מרחק: {distance} מטרים.</p>
                    <p className="training-plans__form__result-content">קצב ממוצע: {paceAndSpeed.pace} דקות לק"מ ({paceAndSpeed.speed} קמ"ש).</p>
                </fieldset>
                :
                <fieldset  className="training-plans__form__result">
                    <p className="training-plans__form__result-content">אנא וודא למלא את כל הפרטים ביחידות מידה הנדרשות. הנתונים צריכים להיות מספרים שלמים וגדולים מאפס.</p>
                </fieldset>
                } */}
            </form>
        </div>
    )
}

export default RunningTimer;
