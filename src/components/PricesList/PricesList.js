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
                <li className="prices-list__menu-item">
                    <p className="prices-list__text">אימון אישי בודד</p>
                    <p className="prices-list__text">60 דקות</p>
                    <p className="prices-list__text">200 ש"ח</p>
                </li>
                <li className="prices-list__menu-item">
                    <p className="prices-list__text">אימון אישי בודד</p>
                    <p className="prices-list__text">45 דקות</p>
                    <p className="prices-list__text">170 ש"ח</p>
                </li>
                <li className="prices-list__menu-item">
                    <p className="prices-list__text">חבילת 4 אימונים אישיים</p>
                    <p className="prices-list__text">60 דקות</p>
                    <p className="prices-list__text">740 ש"ח (185 ש"ח לאימון)</p>
                </li>
                <li className="prices-list__menu-item">
                    <p className="prices-list__text">חבילת 4 אימונים אישיים</p>
                    <p className="prices-list__text">45 דקות</p>
                    <p className="prices-list__text">640 ש"ח (160 ש"ח לאימון)</p>
                </li>
            </ul>
            
        </section>
    )
}

export default PricesList;