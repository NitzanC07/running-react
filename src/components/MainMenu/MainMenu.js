import { useState } from 'react';
import { Link } from 'react-router-dom';
import SecondaryMenu from '../SecondaryMenu/SecondaryMenu';

function MainMenu(props) {

  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);

  function changeShowText1() {
    setShowText1(showText1 ? false : true);
  }

  function changeShowText2() {
    setShowText2(showText2 ? false : true);
  }

  return (
    <section className="main__content content_type_main" id="main">

      <SecondaryMenu
        page="main"
        name="אודותיי"
      />

      <h2 className="text__title">אודותיי</h2>
      <p className="text__description">נעים להכיר, אני ניצן.</p>
      <p className="text__description">
        לפני כל התארים, ההסמכות וההכשרות, הדבר המרכזי שמניע אותי בכל העשייה שלי היא האהבה שלי לאנשים.
        הערך הזה מוביל אותי בכל מפגש שלי עם כל אחד ואחת. ערך של אהבה ונתינה על מנת לחזק ולהעצים את האדם שמולי.
        פרט לכך, אני אוהב ספורט, וריצה בפרט, ומאמין שדרך פעילות גופנית תקינה אפשר להשיג איכות חיים גבוהה.
      </p>
      <p className="text__description">
        אני מאמן לריצות ארוכות בעל תעודת הסמכה מטעם בית הספר למקצועות הספורט בתל-אביב.
        בנוסף לזאת, אני מורה לחינוך מיוחד בעל תואר ראשון B.A מהמכללה האקדמית תל-חי, ובעל תעודת הוראה בחינוך מיוחד מטעם מכללת אוהלו בקצרין.
      </p>
      <h3 
        className="text__subtitle"
        onClick={changeShowText1}
      >
        {showText1 ? "-" : "+"} אבני דרך מקצועיים:
      </h3>
      {
        showText1 && 
        <ul>
          <li className='text__description'>מאמן כושר וריצה במסגרת "איתן - כל אחד יכול" ילדים, נוער ובוגרים עם לקויות תקשורת ואוטיזם.</li>
          <li className='text__description'>מורה לחינוך מיוחד במסגרת תוכנית "שלבים" של קדימה מדע, במסגרתה לימדתי, חינכתי וליוויתי ילדים ונוער אשר נעדרים מבית הספר לתקופות ממושכות בגלל סיבות רפואיות, רגשיות או התנהגותיות. כיום אני ממשיך ללמד בתוכנית זאת במסגרת משרד החינוך.</li>
          <li className='text__description'>לימדתי כמורה בפנימיית "בית עדן" ברמלה וחנכתי תלמידים עם לקויות קוגניטיביות מורכבות.</li>
          <li className='text__description'>התנדבתי בקבוצת "עיניים לשניים" שמחברת בין רוכבי אופניים עיוורים ורואים, בתור רוכב מוביל.</li>
        </ul>
      }
      <h3 
        className="text__subtitle"
        onClick={changeShowText2}
      >
        {showText2 ? "-" : "+"} הישגים ספורטיביים אישיים:
      </h3>
      {
        showText2 &&
        <ul>
          <li className='text__description'>ריצת חצי מרתון בפחות משעתיים.</li>
          <li className='text__description'>רכיבת אופניים למרחק של כ-250 ק"מ.</li>
          <li className='text__description'>רכיבת אופניים עם טיפוס מצטבר של כ-1,000 מטר לרמת הגולן.</li>
        </ul>
      }

      <ul className="main__menu-list">
        <li className="main__menu-item">
          <a href="https://wa.me/+972503131570" target='_blank' rel='noreferrer'>
            <button 
              type="button" 
              className="main__menu-button main__menu-button_type_trainning-plans" 
              id="contact"
            >
              לחץ כאן ושלח הודעה עכשיו כדי לתאם אימון ראשון
            </button>
          </a>
        </li>
        <li className="main__menu-item">
          <Link to="/prices-list">
            <button 
              type="button" 
              className="main__menu-button main__menu-button_type_prices-list" 
              id="training-plans-and-tools"
            >
              מחירון
            </button>
          </Link>
        </li>
        <li className="main__menu-item">
          <Link to="/training-plans-and-tools">
            <button 
              type="button" 
              className="main__menu-button main__menu-button_type_trainning-plans" 
              id="training-plans-and-tools"
            >
              תוכניות אימון וכלי אימון
            </button>
          </Link>
        </li>
        <li className="main__menu-item">
          <Link to="/calculators">
            <button 
              type="button" 
              className="main__menu-button main__menu-button_type_calculators" 
            >
              מחשבוני כושר ובריאות
            </button>
          </Link>
        </li>
        <li className="main__menu-item">
          <Link to="/blog">
            <button 
              type="button" 
              className="main__menu-button main__menu-button_type_blog" 
              id="blog"
            >
              בלוג וכתבות
            </button>
          </Link>
        </li>
      </ul>
    </section>
  );
}
  
export default MainMenu;
  