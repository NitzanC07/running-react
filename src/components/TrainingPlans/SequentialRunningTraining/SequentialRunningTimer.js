import { useState, useEffect } from "react";
import RunningProgressBar from "../RunningProgressBar/RunningProgressBar";

function SequentialRunningTimer(props) {
    // console.log(props);

    const [runningTime, setRunningTime] = useState(0);
    const [runningProgress, setRunningProgress] = useState((props.data.runningTime - runningTime) / props.data.runningTime);
    const [runningTimerActive, setRunningTimerActive] = useState(true);
    const [currentDate, setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    
    useEffect(() => {
        const date = new Date();
        setCurrentDate(`${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`)
        setCurrentTime(`${date.getHours()}:${date.getMinutes()}`)        
    }, [])

    function roundNumber(value, decimals) {
        const shifter = Math.pow(10, decimals);
        return Math.round(value * shifter) / shifter;
    }

    useEffect(() => {
        const timer1 = setInterval(() => {
            runningTimerActive && setRunningTime((prevRunningTime) => prevRunningTime+1, 1000);
        }, 1000)

        setRunningProgress(roundNumber((runningTime*100 / props.data.runningTime), 0));

        if (runningTime === props.data.runningTime) {
            clearInterval(timer1);
            setRunningTimerActive(false);
        }
        
        return () => clearInterval(timer1);
    }, [runningTime, runningTimerActive, props.data.runningTime, props])

    return (
        <section className="running-timer" style={runningTimerActive ? {'backgroundColor': '#640000c0'} : {'backgroundColor': '#ffff88a0'}}>
            {runningTime < props.data.runningTime ? 
            <>
                {
                    runningTimerActive &&
                    <>
                        <p 
                            className="running-timer__title" 
                            style={runningTimerActive && {'color': '#ffa'}}
                        >
                            ריצה
                        </p>
                        <p 
                            className="running-timer__time"
                            style={runningTimerActive && {'color': '#ffa'}}
                        >
                            {`${Math.floor(runningTime/60)}`.padStart(2, '0')}:{`${runningTime%60}`.padStart(2, 0)}
                        </p> 
                        <RunningProgressBar 
                             progress={runningProgress}
                        />
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
                    <p className="running-timer__text2">תאריך: {currentDate}</p>
                    <p className="running-timer__text2">שעת התחלת האימון: {currentTime}</p>
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