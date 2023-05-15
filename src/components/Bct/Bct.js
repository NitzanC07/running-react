import { Link } from 'react-router-dom';
import SecondaryMenu from "../SecondaryMenu/SecondaryMenu";

function Bct(props) {

    return(
        <section className="main__content main_type_bct" id="bct">

            <SecondaryMenu 
                page="training-plans-and-tools"
                name="תוכניות וכלי אימון"
            />

            <h2 className="text__title">מבחן תיאום גופני (BCT)</h2>
            <p className="text__description">
                תיאור מבחן תיאום גופני (Body Coordination Test).
            </p>

            <ul className="main__menu-list">
                <li className="main__menu-item">
                    <Link to={`coordination-test1`}>
                        <button type="button" className="main__menu-button main__menu-button_type_coordination-test" id="coordination-test">הליכה על קורות</button>
                    </Link>
                </li>
                <li className="main__menu-item">
                    <Link to={`coordination-test2`}>
                        <button type="button" className="main__menu-button main__menu-button_type_coordination-test" id="coordination-test">מעבר בין משטחים</button>
                    </Link>
                </li>
                <li className="main__menu-item">
                    <Link to={`coordination-test3`}>
                        <button type="button" className="main__menu-button main__menu-button_type_coordination-test" id="coordination-test">ניתורים על רגל אחת</button>
                    </Link>
                </li>
                <li className="main__menu-item">
                    <Link to={`coordination-test4`}>
                        <button type="button" className="main__menu-button main__menu-button_type_coordination-test" id="coordination-test">ניתורים מצד לצד</button>
                    </Link>
                </li>
            </ul>

        </section>
    )
}

export default Bct;