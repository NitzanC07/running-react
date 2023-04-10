import './running-progress-bar.css';

function RunningProgressBar(props) {

    return (
        <div className="running-progress-bar">
            {
                <>
                    {props.progress <= 15 && <p className="progress__text">זמן להתחמם.</p>}
                    {props.progress > 15 && props.progress <= 35 && <p className="progress__text">מתרגלים לקצב.</p>}
                    {props.progress > 35 && props.progress <= 50 && <p className="progress__text">לשמור על הקצב</p>}
                    {props.progress > 50 && props.progress <= 75 && <p className="progress__text">עברת את החצי!</p>}
                    {props.progress > 75 && props.progress <= 90 && <p className="progress__text">רק עוד קצת...</p>}
                    {props.progress > 90 && <p className="progress__text">פוש אחרון וסיימת!</p>}
                </>
                
            }
            
            <div 
                className="progress"
                style={
                    {'width': `${props.progress}%`}
                }
            >
            </div>
        </div>
    )
}

export default RunningProgressBar;
