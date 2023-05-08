import '../__title/training-plans__title.css';
import '../__text/training-plans__text.css';
import '../__text/_bold/training-plans__text_bold.css';
import '../__text/_list/training-plans__text_list.css';
import '../__text/_list-item/training-plans__text_list-item.css';
import '../__table/training-plans__table.css';
import '../__table/__capture/training-plans__table__capture.css';
import '../__table/__cell/training-plans__table__cell.css';
import '../__subtitle/training-plans__subtitle.css';
import '../__form/training-plans__form.css';
import '../__form/__data/training-plans__form__data.css';
import '../__form/__data/training-plans__form__data-label.css';
import '../__form/__input/training-plans__form__input.css';
import '../__form/__input/_time/training-plans__form__input_time.css';
import '../__form/__input/_time-parts/training-plans__form__input_time-parts.css';
import '../__form/__result/training-plans__form__result.css';
import '../__form/__result/training-plans__form__result-content.css';
import '../__form/__submit-button/training-plans__form__submit-button.css';
import SecondaryMenu from "../../SecondaryMenu/SecondaryMenu";
import RunningTimer from './IntervalsRunningTimer';
import { useState } from 'react';
import nosleep from 'nosleep.js';

function IntervalRunningTraining(props) {

    const noSleep = new nosleep();

    const [secondsRun, setSecondsRun] = useState(0);
    const [minutesRun, setMinutesRun] = useState(0);
    const [secondsRest, setSecondsRest] = useState(0);
    const [minutesRest, setMinutesRest] = useState(0);
    const [repeatitions, setRepeatitions] = useState(0);
    const [name, setName] = useState('');
    const [data, setData] = useState({});
    const [showTimer, setShowTimer] = useState(false);
    const [showTheory, setShowTheory] = useState(false);

    const runningTimerFunc = (e) => {
        e.preventDefault();
        // Enable wake lock.
        // (must be wrapped in a user input event handler e.g. a mouse or touch handler)
        document.addEventListener('click', function enableNoSleep() {
            document.removeEventListener('click', enableNoSleep, false);
            noSleep.enable();
        }, false);

        setData({
            intervalTime: Number(secondsRun) + Number(minutesRun*60),
            restTime: Number(secondsRest) + Number(minutesRest*60),
            repeatitions: Number(repeatitions),
            name
        })
        handleShowTimer();
    }

    function handleShowTimer() {
        if (!showTimer) {
            setShowTimer(true)
        } else {
            setShowTimer(false);
            noSleep.disable();
        }
    }

    function changeShowTheory() {
        if (!showTheory) {
            setShowTheory(true);
        } else {
            setShowTheory(false);
        }
    }
    
    return(
        <div className="main__content training-plans" id="training-plans">
            { showTimer ?
                <RunningTimer 
                    data={data}
                    handleShowTimer={handleShowTimer}
                /> :
                <>
                    <SecondaryMenu
                        page="training-plans"
                        name="תוכניות וכלי אימון"
                    />
                    <h2 className="training-plans__title">אימון הפוגות</h2>

                    <form className='training-plans__form' onSubmit={runningTimerFunc}>

                    <fieldset className='training-plans__form__data'>
                        <label className="training-plans__form__data-label">שם פרטי:</label>
                            <div className='training-plans__form__input training-plans__form__input_time-parts'>
                                <input
                                className='training-plans__form__input training-plans__form__input_time' 
                                type="string" 
                                id="name" 
                                placeholder='מה שמך?'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                        </fieldset>

                        <fieldset className='training-plans__form__data'>
                        <label className="training-plans__form__data-label">זמן ריצה (mm:ss):</label>
                            <div className='training-plans__form__input training-plans__form__input_time-parts'>
                                <input
                                className='training-plans__form__input training-plans__form__input_time' 
                                type="number" 
                                id="seconds-run" 
                                placeholder='0'
                                value={secondsRun <= 0 ? '' : secondsRun > 59 ? secondsRun % 60 : secondsRun}
                                onChange={(e) => setSecondsRun(e.target.value)}
                                />:
                                <input
                                className='training-plans__form__input training-plans__form__input_time' 
                                type="number" 
                                id="minutes-run" 
                                placeholder={0} 
                                value={minutesRun <= 0 ? '' : minutesRun}
                                onChange={(e) => setMinutesRun(e.target.value)}
                                />
                            </div>
                        </fieldset>

                        <fieldset className='training-plans__form__data'>
                        <label className="training-plans__form__data-label">זמן התאוששות (mm:ss):</label>
                            <div className='training-plans__form__input training-plans__form__input_time-parts'>
                                <input
                                    className='training-plans__form__input training-plans__form__input_time' 
                                    type="number" 
                                    id="secondsRest" 
                                    placeholder='0'
                                    value={secondsRest <= 0 ? '' : secondsRest > 59 ? secondsRest % 60 : secondsRest}
                                    onChange={(e) => setSecondsRest(e.target.value)}
                                />:
                                <input
                                    className='training-plans__form__input training-plans__form__input_time' 
                                    type="number" 
                                    id="minutes-rest" 
                                    placeholder='0' 
                                    value={minutesRest <= 0 ? '' : minutesRest}
                                    onChange={(e) => setMinutesRest(e.target.value)}
                                />
                            </div>
                        </fieldset>

                        <fieldset className='calculator__form__data'>
                        <label className="calculator__form__data-label">מספר חזרות:</label>
                            <input
                            className='calculator__form__input' 
                            type="number" 
                            id="repeatitions" 
                            placeholder='0' 
                            value={repeatitions > 0 ? repeatitions : ''}
                            onChange={(e) => setRepeatitions(e.target.value)}
                            />
                        </fieldset>

                        <button 
                            className='training-plans__form__submit-button' 
                            type='submit'
                            onClick={runningTimerFunc}
                        >
                            התחל אימון הפוגות
                        </button>
                    </form>

                    <h3 className='calculator__subtitle' onClick={changeShowTheory}>{showTheory ? "-" : "+"} רקע תאורתי</h3>
                    <section className='text__inforamtive-session'>
                        {
                            showTheory && 
                            <div>
                                <p className='calculator__text'>
                                    <b className='calculator__text'>מה זה אימון הפוגות?</b><br/>
                                    אימון הפוגות, הוא אימון שמתבצע לרוב בדופק גבוה מהרגיל ביחס למתאמן עצמו ומוכר גם בשם אימון אינטרוואלים, 
                                    הוא אימון בו הרץ מחלק את זה זמן הריצה למקטעים נפרדים, שבכל קטע מידת המאמץ שונה. נהוג לקבוע לרוב שני סוגי 
                                    מאמץ באימון כזה: מאמץ מוגבר והתאוששות. כמו כן, אימון הפוגות מתאים הן לרצים מנוסים, והן לרצים מתחילים,
                                    כשכמובן עבור כל רמה של מתאמן מטרת האימון תהיה שונה.
                                </p>
                                <p className='calculator__text'>
                                    מטרת אימון הפוגות באופן כללי היא לשפר את מהירות הריצה או את אורך זמן הריצה. כל מטרה לגופה, ולכל מטרה 
                                    נתייחס בצורה שונה לסוג אימון ההפוגות. אנו יכולים לחלק את אימון ההפוגות לשני תתי-סוגים: אימון הפוגות
                                    עצימות ואימון הפוגות נרחבות.
                                </p>
                                <p className='calculator__text'>
                                    <b className='calculator__text'>אימון הפוגות עצימות -</b> הוא אימון שמתאפיין בריצת מקטעים קצרים (בזמן או במרחק)
                                    ובדופק גבוה, מעל הסף האנאירובי, עם הפוגות להתאוששות והורדת הדופק עד החזרה הבאה. אימון זה מתאים למטרה
                                    הראשונה של שיפור מהירות הריצה. בדרך כלל, באימון הפוגות עצימות פרקי הריצה באימון לא יעלו על 2 דקות
                                    או 600 מטר, שכן מעל הטווחים האלה איננו מסוגלים לשמור על קצב אנאירובי (קצב שבו יש גרעון בצריכת החמצן).
                                    לאחר כל פרק ריצה עצימה נכנס לפרק התאוששות שבו אנחנו יכולים להמשיך לרוץ ריצה קלה מאוד, או אפילו ללכת,
                                    כשהמטרה של פרקי ההתאוששות היא פשוט לתת לדופק לרדת ולהסדיר את הנשימה לקראת פרק הריצה העצימה הבא.
                                </p>
                                <p className='calculator__text'>
                                    <b className='calculator__text'>אימון הפוגות נרחבות -</b> הוא אימון שמתאפיין בריצת מקטעים ארוכים יותר ומטרתו היא לשפר את הסיבולת 
                                    האנאירובית של המתאמן, ואת יכולתו לשמור על קצב גבוה גם במרחקים ארוכים יותר. אימון מסוג זה מתאים
                                    גם למתאמנים מנוסים שרוצים להתאמן לקראת ריצות ארוכות כמו 10 ק"מ ומרתון, וגם למתאמנים חסרי נסיון
                                    בריצה שרוצים להתחיל לרוץ. גם באימונים אלה האימון יחלק את הריצה לשני פרקים עיקריים - ריצה עצימה
                                    והתאוששות, אך בשונה מהסוג הראשון שעסקנו בו, הפעם הריצה העצימה תהיה קצת פחות עצימה, בקצב שהוא טיפה
                                    מעל הסף האנאירובי, קרוב אליו. אימון זה אפשר לחלק למקטים של מעל 2 דקות או 800 מטר לכל מקטע ריצה,
                                    וכמובן מקטעי התאוששות בין לבין שמטרתם הורדת הדופק והסדרת הנשימה עד לחזרה הבאה. 
                                </p>
                                <p className='calculator__text'>
                                    רצים מתחילים יכולים להשתמש בסוג זה של אימון כבניית היכולת האירובית בהדרגה. כלומר להתחיל מאימון
                                    הפוגות נרחבות קטעי ריצה וקטעי הליכה לסירוגין, ומאימון לאימון להגדיל את משך זמן קטעי הריצה ובמקביל
                                    להקטין את משך זמן ההליכה (או ההתאוששות). למשל, להתחיל מפרקי ריצה של דקה אחת (ואפילו פחות), 
                                    ופרקי התאוששות של בין דקה לשתי דקות. לחזור על האימון מספר פעמים ומאימון
                                    לאימון לשנות את המינונים של פרקי הזמן לטובת פרקי הריצה עד ליכולת לרוץ ריצת רצף בקצב נוח ללא הפסקות.
                                </p>
                                <div className='calculator__text'>
                                    <b className='calculator__text_bold'>מקורות:</b>
                                    <ul className='calculator__text_list'>
                                        <li className='calculator__text_list-item'>קורס מאמני ריצות ארוכות. בית הספר למקצועות הספורט. תל אביב. 2019.</li>
                                    </ul>
                                </div>
                                
                            </div>
                        }

                    </section>
                </>
            }
            
        </div>
    )
}

export default IntervalRunningTraining;
