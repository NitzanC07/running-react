function Calculators(props) {
    return(
        <section className="main__content main_type_calculators" id="calculators">
            <h2 className="main__title">מחשבוני כושר</h2>
            <p className="main__description"></p>
            <ul className="main__menu-list">
                <li className="main__menu-item">
                    <button type="button" className="main__menu-button main__menu-button_type_main" id="main">עמוד ראשי</button>
                </li>
                <li className="main__menu-item">
                    <button type="button" className="main__menu-button main__menu-button_type_hrTargetCalculate" id="hrTargetCalculate">חישוב דופק מטרה לאימון</button>
                </li>
                <li className="main__menu-item">
                    <button type="button" className="main__menu-button main__menu-button_type_vo2maxCooperCalculate" id="vo2maxCooperCalculate">חישוב צח"מ (לפי מבחן שדה)</button>
                </li>
                <li className="main__menu-item">
                    <button type="button" className="main__menu-button main__menu-button_type_vo2maxHrCalculate" id="vo2maxHrCalculate">חישוב צח"מ (לפי דופק)</button>
                </li>
                <li className="main__menu-item">
                    <button type="button" className="main__menu-button main__menu-button_type_fatPercentageSkinfoldCalculate" id="fatPercentageSkinfoldCalculate">חישוב אחוז שומן (לפי קפלי עור)</button>
                </li>
                <li className="main__menu-item">
                    <button type="button" className="main__menu-button main__menu-button_type_fatPercentageCalculate" id="fatPercentageCalculate">חישוב אחוז שומן (לפי היקפים)</button>
                </li>
                <li className="main__menu-item">
                    <button type="button" className="main__menu-button main__menu-button_type_bmiCalculate" id="bmiCalculate">חישוב יחס מסת גוף (BMI)</button>
                </li>
            </ul>
        </section>
    )
}

export default Calculators;