import { Link } from 'react-router-dom';

function MainMenu(props) {

  return (
    <section className="main__content content_type_main" id="main">
      <h2 className="main__title">אודותיי</h2>
      <p className="main__description">נעים להכיר, אני ניצן.</p>
      <p className="main__description">
        לפני כל התארים, ההסמכות וההכשרות, הדבר המרכזי שמניע אותי בכל העשייה שלי היא האהבה שלי לאנשים.
        הערך הזה מוביל אותי בכל מפגש שלי עם כל אחד ואחת. ערך של אהבה ונתינה על מנת לחזק ולהעצים את האדם שמולי.
        פרט לכך, אני אוהב ספורט, וריצה בפרט, ומאמין שדרך פעילות גופנית תקינה אפשר להשיג איכות חיים גבוהה.
      </p>
      <p className="main__description">
        אני מאמן לריצות ארוכות בעל תעודת הסמכה מטעם בית הספר למקצועות הספורט בתל-אביב.
        בנוסף לזאת, אני מורה לחינוך מיוחד בעל תואר ראשון B.A מהמכללה האקדמית תל-חי, ובעל תעודת הוראה בחינוך מיוחד מטעם מכללת אוהלו בקצרין.
      </p>
      <b className="main__description">אבני דרך מקצועיים:</b>
      <ul>
        <li className='main__description'>מאמן כושר וריצה במסגרת "איתן - כל אחד יכול" ילדים, נוער ובוגרים עם לקויות תקשורת ואוטיזם.</li>
        <li className='main__description'>מורה לחינוך מיוחד במסגרת תוכנית "שלבים" של קדימה מדע, במסגרתה לימדתי, חינכתי וליוויתי ילדים ונוער אשר נעדרים מבית הספר לתקופות ממושכות בגלל סיבות רפואיות, רגשיות או התנהגותיות. כיום אני ממשיך ללמד בתוכנית זאת במסגרת משרד החינוך.</li>
        <li className='main__description'>לימדתי כמורה בפנימיית "בית עדן" ברמלה וחנכתי תלמידים עם לקויות קוגניטיביות מורכבות.</li>
        <li className='main__description'>התנדבתי בקבוצת "עיניים לשניים" שמחברת בין רוכבי אופניים עיוורים ורואים, בתור רוכב מוביל.</li>
      </ul>
      <b className="main__description">הישגים ספורטיביים אישיים:</b>
      <ul>
        <li className='main__description'>ריצת חצי מרתון בפחות משעתיים.</li>
        <li className='main__description'>רכיבת אופניים למרחק של כ-250 ק"מ.</li>
        <li className='main__description'>רכיבת אופניים עם טיפוס מצטבר של כ-1,000 מטר לרמת הגולן.</li>
      </ul>

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
  