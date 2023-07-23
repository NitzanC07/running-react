import SecondaryMenu from "../SecondaryMenu/SecondaryMenu";

function PricesList(props) {

    return(
        <section className="main__content main_type_prices-list" id="prices-list">

            <SecondaryMenu 
                page="prices-list"
                name="תעריפון"
            />

            <h2 className="text__title">תעריפון</h2>
            <ul className="prices-list__menu">
                <a href='https://wa.me/+972503131570?text=שלום%20ניצן,%20אני%20רוצה%20לקבוע%20אימון%20אישי%20בודד%20של%2060%20דקות%20בעלות%20של%20200%20ש"ח.' target='_blank' rel='noreferrer'>
                    <li className="prices-list__menu-item">
                        <p className="prices-list__text">אימון אישי בודד</p>
                        <p className="prices-list__text">60 דקות</p>
                        <p className="prices-list__text">200 ש"ח</p>
                    </li>
                </a>
                <a href='https://wa.me/+972503131570?text=שלום%20ניצן,%20אני%20רוצה%20לקבוע%20אימון%20אישי%20בודד%20של%2045%20דקות%20בעלות%20של%20170%20ש"ח.' target='_blank' rel='noreferrer'>
                    <li className="prices-list__menu-item">
                        <p className="prices-list__text">אימון אישי בודד</p>
                        <p className="prices-list__text">45 דקות</p>
                        <p className="prices-list__text">170 ש"ח</p>
                    </li>
                </a>
                <a href='https://wa.me/+972503131570?text=שלום%20ניצן,%20אני%20רוצה%20לרכוש%20חבילה%20של%204%20אימונים%20אישיים%20של%2060%20דקות%20כל%20אחד%20בעלות%20כוללת%20של%20740%20ש"ח.' target='_blank' rel='noreferrer'>
                    <li className="prices-list__menu-item">
                        <p className="prices-list__text">חבילת 4 אימונים אישיים</p>
                        <p className="prices-list__text">60 דקות</p>
                        <p className="prices-list__text">740 ש"ח (185 ש"ח לאימון)</p>
                    </li>
                </a>
                <a href='https://wa.me/+972503131570?text=שלום%20ניצן,%20אני%20רוצה%20לרכוש%20חבילה%20של%204%20אימונים%20אישיים%20של%2045%20דקות%20כל%20אחד%20בעלות%20כוללת%20של%20640%20ש"ח.' target='_blank' rel='noreferrer'>
                    <li className="prices-list__menu-item">
                        <p className="prices-list__text">חבילת 4 אימונים אישיים</p>
                        <p className="prices-list__text">45 דקות</p>
                        <p className="prices-list__text">640 ש"ח (160 ש"ח לאימון)</p>
                    </li>
                </a>
            </ul>
            
        </section>
    )
}

export default PricesList;