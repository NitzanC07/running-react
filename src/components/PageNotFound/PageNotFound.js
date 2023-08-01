import './page-not-found.css';
import SecondaryMenu from '../SecondaryMenu/SecondaryMenu';

function PageNotFound(props) {

    return(
        <section className="main__content page-not-found">
            <SecondaryMenu page="" name="חזרה" />
            <div className='page404Content'>
                <h2 className='text__title'>העמוד בבנייה</h2>
                <p className='text__description'>הגעת לעמוד שעדיין לא מוכן.</p>
                <p className='text__description'>אנו עובדים במלוא המרץ כדי להגדיל, לשפר ולהוסיף תכנים איכותיים לאתר.</p>
            </div>
        </section>
    )
}

export default PageNotFound;
