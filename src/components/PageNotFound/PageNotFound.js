import './page-not-found.css';
import { Link } from 'react-router-dom';

function PageNotFound(props) {

    return(
        <section className="page-not-found main__content">
            <h2 className='main__title'>עמוד לא נמצא</h2>
            <p className='main__description'>אופס! הגעת לעמוד שעדיין לא קיים באתר.</p>
            <p className='main__description'>אנו עובדים במלוא המרץ כדי להגדיל ולשפר את האתר כל הזמן.</p>
            <p className='main__description'>בקרוב גם העמוד הזה יהיה מוכן.</p>
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
