import { Link } from 'react-router-dom';

function SecondaryMenu(props) {

    return(
        <nav className="secondary-menu__links">
            <Link to="/calculators">
                <button className="secondary-menu__button">מחשבוני כושר</button>
            </Link>
            <Link to="/">
                <button className="secondary-menu__button">עמוד ראשי</button>
            </Link>
        </nav>
    )
}

export default SecondaryMenu;