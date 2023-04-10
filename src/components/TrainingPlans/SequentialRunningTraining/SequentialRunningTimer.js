import { useState, useEffect } from "react";

function SequentialRunningTimer(props) {
    // console.log(props);

    const [runningTime, setRunningTime] = useState(0);
    const [runningProgress, setRunningProgress] = useState((props.data.runningTime - runningTime) / props.data.runningTime);
    const [runningTimerActive, setRunningTimerActive] = useState(true);

    function roundNumber(value, decimals) {
        const shifter = Math.pow(10, decimals);
        return Math.round(value * shifter) / shifter;
    }

    useEffect(() => {
        const timer1 = setInterval(() => {
            runningTimerActive && setRunningTime((prevRunningTime) => prevRunningTime+1, 1000);
        }, 1000)

        setRunningProgress(roundNumber((runningTime / props.data.runningTime), 2));

        if (runningTime === props.data.runningTime) {
            clearInterval(timer1);
            setRunningTimerActive(false);
        }
        
        return () => clearInterval(timer1);
    }, [runningTime, runningTimerActive, props.data.runningTime, props])

    return (
        <section className="running-timer" style={runningTimerActive ? {'backgroundColor': '#2f2'} : {'backgroundColor': '#ff8'}}>
            {runningTime < props.data.runningTime ? 
            <>
                {
                    runningTimerActive &&
                    <>
                        <p className="running-timer__title">ריצה</p>
                        <p className="running-timer__time">{`${Math.floor(runningTime/60)}`.padStart(2, '0')}:{`${runningTime%60}`.padStart(2, 0)}</p> 
                        <p className="running-timer__text">{runningProgress *100}%</p>
                    </> 
                }
            </> : 
            <>
                <p className="running-timer__title">{props.data.name}, כל הכבוד!</p>
                <div className="running-timer__block">
                    <p className="running-timer__text">סיימת עוד אימון ריצת רצף</p>
                    <p className="running-timer__text">
                        השלמת בהצלחה {`${Math.floor(props.data.runningTime/60)}`.padStart(2, '0')}:{`${Math.floor(props.data.runningTime%60)}`.padStart(2, '0')} דקות ריצה.
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

export default SequentialRunningTimer;