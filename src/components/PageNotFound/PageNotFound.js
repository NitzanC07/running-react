import './page-not-found.css';
import { Link } from 'react-router-dom';

function PageNotFound(props) {

    return(
        <section className="page-not-found main__content">
            <h2 className='text__title'>העמוד בבנייה</h2>
            <p className='text__description'>הגעת לעמוד שעדיין לא מוכן.</p>
            <p className='text__description'>אנו עובדים במלוא המרץ כדי להגדיל, לשפר ולהוסיף תכנים איכותיים לאתר.</p>
            <p className='text__description'>בקרוב גם העמוד הזה יהיה מוכן.</p>
            <ul className="main__menu-list">
                <li className="main__menu-item">
                    <Link to={`/`}>
                        <button 
                            type="button" 
                            className="main__menu-button" 
                            id="coordination-test">חזרה לעמוד הראשי</button>
                    </Link>
                </li>
            </ul>
        </section>
    )
}

export default PageNotFound;
