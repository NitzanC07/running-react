import { Link } from "react-router-dom";
import SecondaryMenu from "../SecondaryMenu/SecondaryMenu";

function TrainingPlans(props) {

    return(
        <section className="main__content main_type_training-plans" id="training-plans">

            <SecondaryMenu 
                page="training-plans-and-tools"
                name="תוכניות וכלי אימון"
            />

            <h2 className="text__title">תוכניות וכלי אימון</h2>
            <p className="text__description">
                תוכניות אימון וכלים טכנולוגיים למהלך האימון ומעקב אחר תוצאות.
            </p>

            <ul className="main__menu-list">
                <li className="main__menu-item">
                    <Link to={`sequential-running`}>
                        <button type="button" className="main__menu-button main__menu-button_type_running-timer" id="running-time">אימון ריצת רצף</button>
                    </Link>
                </li>
                <li className="main__menu-item">
                    <Link to={`intervals-running`}>
                        <button 
                            type="button" 
                            className="main__menu-button main__menu-button_type_running-timer" 
                            id="running-time"
                        >
                            אימון ריצת הפוגות
                        </button>
                    </Link>
                </li>
                <li className="main__menu-item">
                    <Link to={`running-technique`}>
                        <button 
                            type="button" 
                            className="main__menu-button main__menu-button_type_running-timer" 
                            id="running-time"
                        >
                            אימון טכניקת ריצה
                        </button>
                    </Link>
                </li>
                <li className="main__menu-item">
                    <Link to={`stength-training`}>
                        <button 
                            type="button" 
                            className="main__menu-button main__menu-button_type_running-timer" 
                            id="running-time"
                        >
                            אימון כֹּחַ לרצים
                        </button>
                    </Link>
                </li>
                <li className="main__menu-item">
                    <Link to={`bct`}>
                        <button 
                            type="button" 
                            className="main__menu-button main__menu-button_type_bct" 
                            id="bct"
                        >
                           מבחן תיאום גופני<br/>Body Coordination Test
                        </button>
                    </Link>
                </li>
            </ul>

        </section>
    )
}

export default TrainingPlans;