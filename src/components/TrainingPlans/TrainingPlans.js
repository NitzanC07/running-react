import { Link } from "react-router-dom";
import SecondaryMenu from "../SecondaryMenu/SecondaryMenu";

function TrainingPlans(props) {
    return(
        <section className="main__content main_type_training-plans" id="training-plans">

            <SecondaryMenu 
                page="training-plans"
                name="תוכניות וכלי אימון"
            />

            <h2 className="main__title">תוכניות וכלי אימון</h2>
            <p className="main__description">
                תוכניות אימון וכלי טכנולוגיים למהלך האימון ומעקב אחר תוצאות.
            </p>

            <ul className="main__menu-list">
                <li className="main__menu-item">
                    <Link to={`/${props.id}/running-timer`}>
                        <button type="button" className="main__menu-button main__menu-button_type_running-timer" id="running-time">שעון עצר לריצה</button>
                    </Link>
                </li>
            </ul>

        </section>
    )
}

export default TrainingPlans;