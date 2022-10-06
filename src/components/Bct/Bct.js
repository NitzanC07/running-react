import SecondaryMenu from "../SecondaryMenu/SecondaryMenu";

function Bct(props) {
    return(
        <section className="main__content main_type_bct" id="bct">

            <SecondaryMenu 
                page="bct"
                name="קואורדינציה"
            />

            <h2 className="main__title">מבחן תיאום גופני (BCT)</h2>
            <pre className="main__description">
                תיאור מבחן תיאום גופני (Body Coordination Test).
            </pre>

        </section>
    )
}

export default Bct;