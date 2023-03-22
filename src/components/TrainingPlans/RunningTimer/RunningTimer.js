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
            // console.log(`Interval paused for ${props.data.restTime*1000} miliseconds.\nLeft more ${repeatitions} reps.`);
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
        }
        
        return () => clearInterval(timer1);
    }, [intervalTime, intervalTimerActive, repeatitions, props.data.restTime, props.data.intervalTime])

    return (
        <section className="running-timer">
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
            
                <p className="running-timer__title">נשארו עוד חזרות: {repeatitions}</p>
            </> : 
            <p className="running-timer__title">כל הכבוד!</p>
            }
            
            <button
                onClick={() => props.handleShowTimer(false)}
                className="running-timer__button"
            >
                סגור
            </button>
        </section>
    )
}

export default RunningTimer;