import { Link } from 'react-router-dom';

function MainMenu(props) {

  return (
    <section className="main__content content_type_main" id="main">
      <h2 className="main__title">עמוד ראשי</h2>
      <p className="main__description">נעים להכיר, אני ניצן...</p>
      <ul className="main__menu-list">
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
  