import SecondaryMenu from "../SecondaryMenu/SecondaryMenu";

function TrainingPlans(props) {
    return(
        <section className="main__content main_type_training-plans" id="training-plans">

            <SecondaryMenu 
                page="training-plans"
                name="תוכניות אימון"
            />

            <h2 className="main__title">תוכניות אימון</h2>
            <p className="main__description">
                תוכניות אימון מהצעד הראשון ועד רצים מיומנים.
            </p>

        </section>
    )
}

export default TrainingPlans;