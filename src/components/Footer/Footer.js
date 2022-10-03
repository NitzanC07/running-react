import smallLogo from '../../images/logos/logoGIF.png';

function Footer() {
    return (
    <footer className="footer">
      <div className="footer__details">
        <p className="footer__title">ניצן כהן - מאמן ריצות ארוכות</p>
        <ul className="footer__contact-details">
          <li className="footer__contant-details__item">טלפון: 050-3131570</li>
          <li className="footer__contant-details__item">דוא"ל: nitzancohen@hotmail.com</li>
        </ul>
      </div>
      <img className="footer__small-logo" src={smallLogo} alt="short-logo" />
    </footer>
    );
  }
  
  export default Footer;
  