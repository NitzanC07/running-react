import { Link } from 'react-router-dom';
import SecondaryMenu from "../SecondaryMenu/SecondaryMenu";

function Bct(props) {

    return(
        <section className="main__content main_type_bct" id="bct">

            <SecondaryMenu 
                page="bct"
                name="קואורדינציה"
            />

            <h2 className="main__title">מבחן תיאום גופני (BCT)</h2>
            <p className="main__description">
                תיאור מבחן תיאום גופני (Body Coordination Test).
            </p>

            <ul className="main__menu-list">
                <li className="main__menu-item">
                    <Link to={`/${props.id}/coordination-test1`}>
                        <button type="button" className="main__menu-button main__menu-button_type_coordination-test" id="coordination-test">הליכה על קורות</button>
                    </Link>
                </li>
                <li className="main__menu-item">
                    <Link to={`/${props.id}/coordination-test2`}>
                        <button type="button" className="main__menu-button main__menu-button_type_coordination-test" id="coordination-test">מעבר בין משטחים</button>
                    </Link>
                </li>
                <li className="main__menu-item">
                    <Link to={`/${props.id}/coordination-test3`}>
                        <button type="button" className="main__menu-button main__menu-button_type_coordination-test" id="coordination-test">ניתורים על רגל אחת</button>
                    </Link>
                </li>
                <li className="main__menu-item">
                    <Link to={`/${props.id}/coordination-test4`}>
                        <button type="button" className="main__menu-button main__menu-button_type_coordination-test" id="coordination-test">ניתורים מצד לצד</button>
                    </Link>
                </li>
            </ul>

        </section>
    )
}

export default Bct;