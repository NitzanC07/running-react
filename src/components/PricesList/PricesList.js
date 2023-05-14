import SecondaryMenu from "../SecondaryMenu/SecondaryMenu";

function PricesList(props) {

    return(
        <section className="main__content main_type_prices-list" id="prices-list">

            <SecondaryMenu 
                page="prices-list"
                name="מחירון"
            />

            <h2 className="main__title">מחירון</h2>
            <ul className="main__description">
                <li>
                    <p>אימון אישי בודד</p>
                    <p>60 דקות</p>
                    <p>200 ש"ח</p>
                </li>
                <li>
                    <p>אימון אישי בודד</p>
                    <p>45 דקות</p>
                    <p>170 ש"ח</p>
                </li>
                <li>
                    <p>חבילת 4 אימונים אישיים</p>
                    <p>60 דקות</p>
                    <p>740 ש"ח (185 ש"ח לאימון)</p>
                </li>
                <li>
                    <p>חבילת 4 אימונים אישיים</p>
                    <p>45 דקות</p>
                    <p>640 ש"ח (160 ש"ח לאימון)</p>
                </li>
            </ul>
            
        </section>
    )
}

export default PricesList;