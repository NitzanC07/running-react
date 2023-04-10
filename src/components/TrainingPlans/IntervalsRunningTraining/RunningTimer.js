import { useState, useEffect } from "react";

function RunningTimer(props) {
    // console.log(props);

    const [intervalTime, setIntervalTime] = useState(props.data.intervalTime);
    // const [restTime, setRestTime] = useState(props.data.restTime);
    const [repeatitions, setRepeatitions] = useState(props.data.repeatitions);
    const [intervalTimerActive, setIntervalTimerActive] = useState(true);

    useEffect(() => {
        const timer1 = setInterval(() => {
            intervalTimerActive && setIntervalTime((prevIntervalTime) => prevIntervalTime-1, 1000)
        }, 1000)

        if (intervalTime === 0) {
            clearInterval(timer1);
            setIntervalTime(props.data.intervalTime)
            setIntervalTimerActive(false);
            setTimeout(() => {
                setRepeatitions(() => repeatitions -1);
                setIntervalTimerActive(true);

            }, props.data.restTime * 1000)
        }

        if (repeatitions === 0) {
            clearInterval(timer1);
            setIntervalTimerActive(false);
        }
        
        return () => clearInterval(timer1);
    }, [intervalTime, intervalTimerActive, repeatitions, props.data.restTime, props.data.intervalTime, props])

    return (
        <section className="running-timer" style={intervalTimerActive ? {'backgroundColor': '#2f2'} : {'backgroundColor': '#ff8'}}>
            {repeatitions > 0 ? 
            <>
                {
                    intervalTimerActive ?
                    <>
                        <p className="running-timer__title">ריצה</p>
                        <p className="running-timer__time">{`${Math.floor(intervalTime/60)}`.padStart(2, '0')}:{`${intervalTime%60}`.padStart(2, 0)}</p> 
                    </> :
                    <>
                        <p className="running-timer__title">התאוששות</p>
                        <p className="running-timer__title">להסדיר דופק ונשימה</p>
                    </>
                    }
            
                <p className="running-timer__title">
                    {repeatitions === 1 ? `חזרה אחרונה!` : `נשארו עוד ${repeatitions} חזרות.`}
                </p>
            </> : 
            <>
                <p className="running-timer__title">{props.data.name}, כל הכבוד!</p>
                <div className="running-timer__block">
                    <p className="running-timer__text">סיימת עוד אימון הפוגות</p>
                    <p className="running-timer__text">
                        השלמת בהצלחה {props.data.repeatitions} חזרות של {`${Math.floor(props.data.intervalTime/60)}`.padStart(2, '0')}:{`${Math.floor(props.data.intervalTime%60)}`.padStart(2, '0')} דקות ריצה ו-{`${Math.floor(props.data.restTime/60)}`.padStart(2, '0')}:{`${Math.floor(props.data.restTime%60)}`.padStart(2, '0')} דקות התאוששות.
                    </p>
                    <p className="running-timer__text">
                        בסך-הכל רצת {Math.floor(((props.data.intervalTime+props.data.restTime)*props.data.repeatitions)/60)}:{((props.data.intervalTime+props.data.restTime)*props.data.repeatitions)%60} דקות.
                    </p>
                </div>
            </>
            }
            
            <button
                onClick={() => props.handleShowTimer()}
                className="running-timer__button"
            >
                סגור
            </button>
        </section>
    )
}

export default RunningTimer;