import nosleep from "nosleep.js";
import { useState } from "react";
import SequentialRunningTimer from "./SequentialRunningTimer";
import SecondaryMenu from "../../SecondaryMenu/SecondaryMenu";

function SequentialRunningTraining(props) {

    const noSleep = new nosleep();

    const [secondsRun, setSecondsRun] = useState(0);
    const [minutesRun, setMinutesRun] = useState(0);
    const [name, setName] = useState('');
    const [data, setData] = useState({});
    const [showTimer, setShowTimer] = useState(false);
    const [showTheory, setShowTheory] = useState(false);

    const runningTimerFunc = (e) => {
        e.preventDefault();
        // Enable wake lock.
        // (must be wrapped in a user input event handler e.g. a mouse or touch handler)
        document.addEventListener('click', function enableNoSleep() {
            document.removeEventListener('click', enableNoSleep, false);
            noSleep.enable();
        }, false);

        setData({
            runningTime: Number(secondsRun) + Number(minutesRun*60),
            name
        })
        handleShowTimer();
    }

    function handleShowTimer() {
        if (!showTimer) {
            setShowTimer(true)
        } else {
            setShowTimer(false);
            noSleep.disable();
        }
    }

    function changeShowTheory() {
        if (!showTheory) {
            setShowTheory(true);
        } else {
            setShowTheory(false);
        }
    }

    return (
        <div className="main__content training-plans" id="training-plans">
            { showTimer ?
                <SequentialRunningTimer
                    data={data}
                    handleShowTimer={handleShowTimer}
                /> :
                <>
                    <SecondaryMenu
                        page="training-plans"
                        name="תוכניות וכלי אימון"
                    />
                    <h2 className="training-plans__title">אימון ריצת רצף</h2>

                    <form className='training-plans__form' onSubmit={runningTimerFunc}>

                    <fieldset className='training-plans__form__data'>
                        <label className="training-plans__form__data-label">שם פרטי:</label>
                            <div className='training-plans__form__input training-plans__form__input_time-parts'>
                                <input
                                className='training-plans__form__input training-plans__form__input_time' 
                                type="string" 
                                id="name" 
                                placeholder='מה שמך?'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                        </fieldset>

                        <fieldset className='training-plans__form__data'>
                        <label className="training-plans__form__data-label">זמן ריצה (mm:ss):</label>
                            <div className='training-plans__form__input training-plans__form__input_time-parts'>
                                <input
                                className='training-plans__form__input training-plans__form__input_time' 
                                type="number" 
                                id="seconds-run" 
                                placeholder='0'
                                value={secondsRun <= 0 ? '' : secondsRun > 59 ? secondsRun % 60 : secondsRun}
                                onChange={(e) => setSecondsRun(e.target.value)}
                                />:
                                <input
                                className='training-plans__form__input training-plans__form__input_time' 
                                type="number" 
                                id="minutes-run" 
                                placeholder={0} 
                                value={minutesRun <= 0 ? '' : minutesRun}
                                onChange={(e) => setMinutesRun(e.target.value)}
                                />
                            </div>
                        </fieldset>

                        <button 
                            className='training-plans__form__submit-button' 
                            type='submit'
                            onClick={runningTimerFunc}
                        >
                            התחל אימון רצף
                        </button>
                    </form>

                    <h3 className='calculator__subtitle' onClick={changeShowTheory}>רקע תאורתי</h3>
                        {
                            showTheory && 
                            <div>
                                <p className='calculator__text'>
                                    <b className='calculator__text'>מה זה אימון רצף?</b><br/>
                                    תקציר על אימון ריצת רצף.
                                </p>
                                <div className='calculator__text'>
                                    <b className='calculator__text_bold'>מקורות:</b>
                                    <ul className='calculator__text_list'>
                                        <li className='calculator__text_list-item'>---</li>
                                    </ul>
                                </div>
                                
                            </div>
                        }
                </>
            }
        </div>
    )
}

export default SequentialRunningTraining;
