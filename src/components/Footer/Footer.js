import smallLogo from '../../images/logos/logoGIF.png';

function Footer() {
    return (
    <footer class="footer">
      <div class="footer__details">
        <p class="footer__title">ניצן כהן - מאמן ריצות ארוכות</p>
        <ul class="footer__contact-details">
          <li class="footer__contant-details__item">טלפון: 050-31-31-570</li>
          <li class="footer__contant-details__item">דוא"ל: nitzancohen@hotmail.com</li>
        </ul>
      </div>
      <img class="footer__small-logo" src={smallLogo} alt="short-logo" />
    </footer>
    );
  }
  
  export default Footer;
  