import nosleep from "nosleep.js";
import { useState } from "react";
import SequentialRunningTimer from "./SequentialRunningTimer";
import SecondaryMenu from "../../SecondaryMenu/SecondaryMenu";

function SequentialRunningTraining(props) {

    const noSleep = new nosleep();

    const [secondsRun, setSecondsRun] = useState(0);
    const [minutesRun, setMinutesRun] = useState(0);
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
            runningTime: Number(secondsRun) + Number(minutesRun*60),
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

    return (
        <div className="main__content training-plans" id="training-plans">
            { showTimer ?
                <SequentialRunningTimer
                    data={data}
                    handleShowTimer={handleShowTimer}
                /> :
                <>
                    <SecondaryMenu
                        page="training-plans"
                        name="תוכניות וכלי אימון"
                    />
                    <h2 className="training-plans__title">אימון ריצת רצף</h2>

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

                        <button 
                            className='training-plans__form__submit-button' 
                            type='submit'
                            onClick={runningTimerFunc}
                        >
                            התחל אימון רצף
                        </button>
                    </form>
                    <h3 className='calculator__subtitle' onClick={changeShowTheory}>{showTheory ? "-" : "+"} רקע תאורתי</h3>
                    <section className="text__inforamtive-session">
                        {
                            showTheory && 
                            <div>
                                <p className='calculator__text'>
                                    <b className='calculator__text'>מה זה אימון רצף?</b><br/>
                                    ריצת רצף, ריצת נפח, ריצה אירובית, או ריצת סיבולת, אלה הן כולן הגדרות שמבטאות ריצה ממושכת בזמן ובמרחק.
                                    ראשית נבין למה הכוונה בהגדרות "סיבולת" ו"אירובי". רמת הסיבולת מתבטאת על-ידי היכולת של האדם לרוץ
                                    בקצב נוח מרחק ארוך או זמן ממושך בצורה רציפה, וכן להתאושש בסיום הפעילות בצורה מהירה. המונח "אירובי",
                                    מתייחס לרמה הפיזיולוגית של הפעילות הגופנית, שכן לאורך כל משך הפעילות הגוף משתמש בחמצן על מנת להפיק
                                    את האנרגיה הדרושה לקיום הפעילות (בשונה מפעילות אנאירובית, שבה הגוף מגיע למצב של גרעון בחמצן).
                                </p>
                                <p className='calculator__text'>
                                    לאור זאת, ריצת רצף היא מרכיב בסיסי וחיוני בכל תוכנית אימונים לרצי מרחקים בינוניים וארוכים.
                                    ככלל, אימוני רצף לא מוכרחים להיות דווקא ממוקדים בריצה, שכן, גם הליכה נחשבת כפעילות אירובית. 
                                    מבחינה פיזיולוגית, אפשר לומר שגוף האדם אוהב פעילות אירובית, ואף בנוי באופן מיוחד עבור פעילות
                                    מסוג זה. בריצת רצף. כאמור, הגוף יודע לייצר לעצמו את האנרגיה הדרושה באמצעות חמצן, בתהליך שמעורבות 
                                    בו גם פחמימות (פירוק גליקוגן) וגם שומנים. כמו כן, גם מערכת השרירים מתחזקת ומערכת הלב-ריאה 
                                    מתייעלת ומשתפרת.
                                </p>
                                <p className='calculator__text'>
                                    בתחום של ריצות רצף אנחנו יכולים להתייחס לשלושה סוגים עיקריים של אימונים בהתאם למטרה שלשמה 
                                    אנחנו שואפים להגיע באותו אימון מסוים. סוג אחד הוא אימון רצף נרחב, סוג אחר הוא אימון רצף עצים
                                    (טמפו), והסוג השלישי הוא אימון קצב משתנה (פַרְטְלֵק, Fartlek).
                                </p>
                                <p className='calculator__text'>
                                <b className='calculator__text'>אימון רצף נרחב -</b> הדרך היעילה ביותר לשפר את היכולת האירובית שלנו היא באמצעות
                                ריצות ארוכות בקצב מתון (LSDR - Long Slow Distance Runs). אלה ריצות שבהן קצב הלב נע בין 60% ל-70% מהדופק המירבי,
                                או בדרך יותר תחושתית, אפשר לקרוא לזה "קצב דיבור", כלומר קצב שאין התנשמויות כבדות ושאפשר לדבר תוך כדי הריצה.
                                לרוב כשנדבר על ריצות למרחקים ארוכים, אנחנו נתייחס למרחקים של 5 ק"מ ועד מרתון (ואפילו מעבר למרתון).
                                אם המטרה שלנו היא לרוץ מרחק גדול, מסוים אז ישנה חשיבות רבה לשלב בתוכנית האימונים שלנו גם אימוני
                                רצף נרחב, שנקראים גם אימוני נפח, כאשר בכל אימון כזה אנחנו להגדיל כל פעם את מרחק הריצה.
                                </p>
                                <p className='calculator__text'>
                                <b className='calculator__text'>אימון רצף עצים (טמפו) - </b>אימון זה הוא מהאימונים הקשים יותר עבור כל רץ,
                                שכן ריצה מסוג זה היא הכי קרובה לריצה בקצב תחרות. למעשה ההבדל היחיד, כמעט, בינה לבין תחרות הוא באי 
                                נוכחות של משתתפים נוספים בריצה. המטרה של ריצת טמפו היא ללמד את הגוף לשמור על קצב אחיד ומאמץ קבוע
                                לאורך זמן. קצב הריצה צריך להיות בין 80% ל-90% מהדופק המירבי, ומרחק הריצה ינוע בין קילומטר 1 ל-8
                                קילומטרים. הקצב צריך להיות מהיר, לא כזה שאנחנו יכולים לדבר תוך כדי, אך לא מהיר מדי, אלא כזה שאנו יכולים
                                לשמור עליו לאורך כל הריצה. במילים אחרות ריצת טמפו, היא כמובן עדיין בתחום האירובי, אך היא נמצאת
                                בגבול העליון הטווח האירובי של הרץ - הקצב הכי גבוה שהרץ מסוגל לשמור עליו לאורך זמן. בריצה מהסוג הזה
                                אנחנו גם לומדים בעצמנו להתמודד עם רמת אי נוחות שמתלווה למאמץ השרירים שרוויים בחומצת חלב ולקוצר
                                הנשימה שמלווה ריצה מהירה. בנוסף, ריצה מסוג זה גם מאפשרת להרגיש יותר בנינוחות בריצות הקצרות
                                ונותנת חיזוק נוסף לאימוני אינטרוואלים קצרים בעצימות גבוהה להגיע בהם למהירויות יותר גבוהות.
                                </p>
                                <p className='calculator__text'>
                                <b className='calculator__text'>אימון פַרְטְלֵק (Fartlek) -</b> זו היא שיטת אימון רצף משתנה שהומצאה בשוודיה 
                                על-ידי מאמן בשם גוסטה הולמר בשנות ה-30 של המאה העשרים. המילה פַרְטְלֵק, מקורה בשוודית, והיא הלחם של שתי
                                מילים Fart = מהירות, ו-Lek = משחק בשוודית, כלומר משחקי מהירות, או משחקי קצב. מטרתה של שיטת אימון זו
                                היא להרגיל את הגוף לרוץ במהירויות משתנות תוך שמירה על ריצה ממושכת והתאוששות אקטיבית תוך כדי ריצה.
                                כמו כן, אימון זה לרוב יתבצע על מסלול שאינו מוגדר או מסומן, אלא בדרך חופשית לא ידועה ולא מתוכננת. אפשר
                                להגדיר יעד של זמן, לדוגמא ריצה של שעה, להתחיל לרוץ ביער או בעיר לכיוון כל שהוא ולאחר חצי שעה לחזור חזרה.
                                בריצה כזאת, האדם מחוייב להקשיב לעצמו, לגופו ולתנאי הדרך ולעשות את ההתאמות הנדרשות בהתאם לתנאי הדרך,
                                ולמצבו הגופני. קצב הריצה אינו קבוע ואינו מדויק, והוא נקבע על-ידי הרץ עצמו. אפשר להגדיר יעדים נקודתיים
                                תוך כדי הריצה עצמה להגביר קצב כשהדרך יורדת, או להאט כשהיא עולה, או לתת ספרינט עד עמוד התאורה הקרוב,
                                ולרוץ בקצב דיבור עד שהדופק והנשימה מתייצבים. המהות של ריצה זו היא ללמד את הרץ להקשיב לגופו ולרוץ
                                על פי תחושותיו באותו רגע תוך שליטה על מהירות הריצה, ניהול משאבי הגוף ובעיקר הנאה.
                                </p>
                                <div className='calculator__text'>
                                    <b className='calculator__text_bold'>מקורות:</b>
                                    <ul className='calculator__text_list'>
                                        <li className='calculator__text_list-item'>קורס מאמני ריצות ארוכות. בית הספר למקצועות הספורט. תל-אביב. 2019.</li>
                                        <li className='calculator__text_list-item'>גורדון, דינה. <b className='calculator__text_list-item'>האמנות הנשכחת של הריצה.</b> מגזין אפוק. 15 באוקטובר 2020.</li>
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

export default SequentialRunningTraining;
