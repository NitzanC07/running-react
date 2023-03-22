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
import RunningTimer from './RunningTimer';
import { useState } from 'react';

function RunningTimerComponent(props) {

    const [secondsRun, setSecondsRun] = useState(0);
    const [minutesRun, setMinutesRun] = useState(0);
    const [secondsRest, setSecondsRest] = useState(0);
    const [minutesRest, setMinutesRest] = useState(0);
    const [repeatitions, setRepeatitions] = useState(0);
    const [data, setData] = useState({});
    const [showTimer, setShowTimer] = useState(false);

    const runningTimerFunc = (e) => {
        e.preventDefault();
        setShowTimer(true);
        setData({
            intervalTime: Number(secondsRun) + Number(minutesRun*60),
            restTime: Number(secondsRest) + Number(minutesRest*60),
            repeatitions: Number(repeatitions)
        })
    }
    
    return(
        <div className="main__content training-plans" id="training-plans">
            { showTimer ?
                <RunningTimer 
                    data={data}
                    handleShowTimer={setShowTimer}
                /> :
                <>
                    <SecondaryMenu
                        page="training-plans"
                        name="תוכניות וכלי אימון"
                    />
                    <h2 className="training-plans__title">שעון עצר לריצה</h2>

                    <form className='training-plans__form' onSubmit={runningTimerFunc}>

                        <fieldset className='training-plans__form__data'>
                        <label className="training-plans__form__data-label">זמן ריצה (mm:ss):</label>
                            <div className='training-plans__form__input training-plans__form__input_time-parts'>
                                <input
                                className='training-plans__form__input training-plans__form__input_time' 
                                type="number" 
                                id="seconds-run" 
                                placeholder={0} 
                                value={secondsRun <= 0 ? 0 : secondsRun > 59 ? secondsRun % 60 : secondsRun}
                                onChange={(e) => setSecondsRun(e.target.value)}
                                />:
                                <input
                                className='training-plans__form__input training-plans__form__input_time' 
                                type="number" 
                                id="minutes-run" 
                                placeholder={0} 
                                value={minutesRun <= 0 ? 0 : minutesRun}
                                onChange={(e) => setMinutesRun(e.target.value)}
                                />
                            </div>
                        </fieldset>

                        <fieldset className='training-plans__form__data'>
                        <label className="training-plans__form__data-label">זמן התאוששות (mm:ss):</label>
                            <div className='training-plans__form__input training-plans__form__input_time-parts'>
                                <input
                                    className='training-plans__form__input training-plans__form__input_time' 
                                    type="number" 
                                    id="secondsRest" 
                                    placeholder={0} 
                                    value={secondsRest <= 0 ? 0 : secondsRest > 59 ? secondsRest % 60 : secondsRest}
                                    onChange={(e) => setSecondsRest(e.target.value)}
                                />:
                                <input
                                    className='training-plans__form__input training-plans__form__input_time' 
                                    type="number" 
                                    id="minutes-rest" 
                                    placeholder={0} 
                                    value={minutesRest <= 0 ? 0 : minutesRest}
                                    onChange={(e) => setMinutesRest(e.target.value)}
                                />
                            </div>
                        </fieldset>

                        <fieldset className='calculator__form__data'>
                        <label className="calculator__form__data-label">מספר חזרות:</label>
                            <input
                            className='calculator__form__input' 
                            type="number" 
                            id="repeatitions" 
                            placeholder="0" 
                            value={repeatitions > 0 ? repeatitions : ""}
                            onChange={(e) => setRepeatitions(e.target.value)}
                            />
                        </fieldset>

                        <button 
                            className='training-plans__form__submit-button' 
                            type='submit'
                            onClick={runningTimerFunc}
                        >
                            הפעלת שעון עצר
                        </button>

                        
                        
                    </form>
                </>
            }
            
        </div>
    )
}

export default RunningTimerComponent;
