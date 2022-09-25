function MainMenu(props) {
    return (
      <section className="main__content content_type_main" id="main">
        <h2 className="main__title">עמוד ראשי</h2>
        <p className="main__description">בלה בלה בלה</p>
        <ul className="main__menu-list">
          <li className="main__menu-item">
            <button type="button" className="main__menu-button main__menu-button_type_trainning-plans" id="trainning-plans">תוכניות אימון</button>
          </li>
          <li className="main__menu-item">
            <button type="button" className="main__menu-button main__menu-button_type_calculators" id="calculators">מחשבוני כושר</button>
          </li>
          <li className="main__menu-item">
            <button type="button" className="main__menu-button main__menu-button_type_bct" id="bct">מבחן תיאום גופני<br/>Body Coordination Test</button>
          </li>
        </ul>
      </section>
    );
  }
  
  export default MainMenu;
  