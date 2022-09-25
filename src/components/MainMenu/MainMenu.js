import { Link } from 'react-router-dom';

function MainMenu(props) {

  return (
    <section className="main__content content_type_main" id="main">
      <h2 className="main__title">עמוד ראשי</h2>
      <p className="main__description">בלה בלה בלה</p>
      <ul className="main__menu-list">
        <li className="main__menu-item">
          <Link to="/">
            <button type="button" className="main__menu-button main__menu-button_type_trainning-plans" id="trainning-plans">תוכניות אימון</button>
          </Link>
        </li>
        <li className="main__menu-item">
          <Link to="/calculators">
            <button 
              type="button" 
              className="main__menu-button main__menu-button_type_calculators" 
            >
              מחשבוני כושר
            </button>
          </Link>
        </li>
        <li className="main__menu-item">
          <Link to="/">
            <button type="button" className="main__menu-button main__menu-button_type_bct" id="bct">מבחן תיאום גופני<br/>Body Coordination Test</button>
          </Link>
        </li>
      </ul>
    </section>
  );
}
  
export default MainMenu;
  