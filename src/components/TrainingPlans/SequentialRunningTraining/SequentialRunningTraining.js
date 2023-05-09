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
                                    מסוג זה. בריצת רצף כאמור, הגוף יודע לייצר לעצמו את האנרגיה הדרושה באמצעות חמצן, ובתהליך זה
                                    מעורבים גם פחמימות וגם שומנים, מערכת השרירים מתחזקת ומערכת הלב-ריאה מתייעלת ומשתפרת.
                                </p>
                                <p className='calculator__text'>
                                    בתחום של ריצות רצף אנחנו יכולים להתייחס לשלושה סוגים עיקריים של אימונים בהתאם למטרה שלשמה 
                                    אנחנו שואפים להגיע באותו אימון מסוים. סוג אחד הוא אימון רצף נרחב, סוג אחר הוא אימון רצף עצים
                                    (טמפו), והסוג השלישי הוא אימון פַרְטְלֵק (Fartlek).
                                </p>
                                <p className='calculator__text'>
                                <b className='calculator__text'>אימון רצף נרחב -</b> הדרך היעילה ביותר לשפר היכולת האירובית שלנו היא באמצעות
                                ריצות ארוכות בקצב מתון (LSD - Long Slow Distance Runs). אלה ריצות שבהן קצב הלב נע בין 60 ל-70 פעימות
                                בדקה, או בדרך יותר תחושתית, אפשר לקרוא לזה "קצב דיבור", כלומר קצב שאין התנשמויות כבדות ושאפשר לדבר תוך כדי הריצה.
                                אין זה מדע מדויק, אך נהוג להתייחס לריצות למרחק של 5 ק"מ ועד מרתון, ואף מעבר למרתון, כריצות למרחקים
                                ארוכים. כמו כן, ישנה חשיבות רבה לתת לגוף זמן התאוששות לאחר ריצה ארוכה, משום שכחלק מהמאמץ הכרוך בריצה
                                מתבצע הרס של תאי השריר ובנייה שלהם מחדש לאחר הריצה. התהליך הזה של הרס ובנייה מחדש הוא הלכה למעשה
                                תהליך ההתחזקות של השריר על מנת שהוא יהיה מסוגל להתמודד עם עומסים גדולים יותר בפעמים הבאות. מנגד, אם
                                לא ניתן לגוף את הזמן הדרוש לו להתאוששות ובנייה מחדש של תאי השריר, הדבר עלול להביא בסופו של דבר לפציעה
                                ובעקבות כך להפסקת פעילות לזמן מסוים. לרוב אחרי ריצה ארוכה מומלץ לתת לגוף זמן התאוששות של בין 24 ל-48 שעות.
                                </p>
                                <p className='calculator__text'>
                                <b className='calculator__text'>אימון רצף עצים (טמפו) -</b> מרחקים בינוניים בקצב כמעט אנאירובי. בקרוב...
                                </p>
                                <p className='calculator__text'>
                                <b className='calculator__text'>אימון פַרְטְלֵק (Fartlek) -</b> זו היא שיטת אימון רצף משתנה שהומצאה בשוודיה 
                                על-ידי מאמן בשם גוסטה הולמר בשנות ה-30 של המאה העשרים. המילה פַרְטְלֵק, מקורה בשוודית, והיא הלחם של שתי
                                מילים Fart = מהירות, ו-Lek = משחק בשוודית, כלומר משחקי מהירות, או משחקי קצב. מטרתה של שיטת אימון זו
                                היא להרגיל את הגוף לרוץ במהירויות משתנות תוך שמירה על ריצה ממושכת והתאוששות אקטיבית תוך כדי ריצה.
                                כמו כן, אימון זה לרוב יתבצע לא על מסלול מוגדר ומסומן, אלא בדרך חופשית לא ידועה ואף לא מתוכננת. אפשר
                                להגדיר יעד של זמן, לדוגמא ריצה של שעה, להתחיל לרוץ ביער לכיוון כל שהוא ולאחר חצי שעה לחזור חזרה.
                                בריצה כזאת, האדם מחוייב להקשיב לעצמו, לגופו ולתנאי הדרך ולעשות את ההתאמות הנדרשות בהתאם לתנאי הדרך,
                                ולמצבו הגופני. קצב הריצה אינו קבוע ואינו מדויק, והוא נקבע על-ידי הרץ עצמו. אפשר להגדיר יעדים נקודתיים
                                תוך כדי הריצה עצמה להגביר קצב כשהדרך יורדת, או להאט כשהיא עולה, או לתת ספרינט עד עמוד התאורה הקרוב,
                                ולרוץ בקצב דיבור עד שהדופק והנשימה מתייצבים. המהות של ריצה זו היא ללמד את הרץ להקשיב לגופו ולרוץ
                                על פי תחושותיו באותו רגע תוך שליטה על מהירות הריצה, ניהול משאבי הגוף ובעיקר הנאה. ריצה זו, לפני הכל
                                צריכה להיות מהנה.
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
