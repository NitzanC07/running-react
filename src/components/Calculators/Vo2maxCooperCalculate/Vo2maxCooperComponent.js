import { useEffect, useState } from 'react';
import Vo2maxCooperCalculate from './vo2maxCooperCalculate';
import SecondaryMenu from '../../SecondaryMenu/SecondaryMenu';

function Vo2maxCooperComponent(props) {

    const [showData, setShowData] = useState(false);
    const [gender, setGender] = useState("male");
    const [age, setAge] = useState(0);
    const [weight, setWeight] = useState(0);
    const [distance, setDistance] = useState(0);
    const [vo2maxResult, setVo2maxResult] = useState(0);
    const [showTheory, setShowTheory] = useState(false);
    const [dataTable, setDataTable] = useState({});
    const [ageGroups, setAgeGroups] = useState([]);
    const [showResultTable, setShowResultTable] = useState(false);
    const [selectCellId, setSelectCellId] = useState('');
    
    useEffect(() => {
        if (weight > 0 && distance > 0 && age > 0) {
            const vo2maxCooperCalculateInastance = new Vo2maxCooperCalculate(distance, weight, gender, age);        
            setVo2maxResult(vo2maxCooperCalculateInastance.compute());
            setDataTable(vo2maxCooperCalculateInastance.dataTables());
        } else {
            setShowData(false);
        }
    }, [distance, weight, gender, age]);

    useEffect(() => {
        // vo2maxResult, dataTable, age
        setSelectCellId('');
        for (let i = 0; i < ageGroups.length; i++) {
            const minAgeRange = Number(ageGroups[i].slice(0, 2))
            const maxAgeRange = Number(ageGroups[i].slice(3, 5))
            if (age >= minAgeRange && age <= maxAgeRange) {
                const relevantAgeGroup = dataTable[ageGroups[i]]
                for (let j = 0; j < relevantAgeGroup.length; j++) {
                    if (relevantAgeGroup[j+1] && vo2maxResult[0] >= relevantAgeGroup[0]) {
                        if (vo2maxResult[0] >= relevantAgeGroup[j] && vo2maxResult[0] < relevantAgeGroup[j+1]) {
                            const cellId = `${ageGroups[i]}_${j}`
                            setSelectCellId(cellId);
                        }
                    } else {
                        if (vo2maxResult[0] >= relevantAgeGroup[j]) {
                            const cellId = `${ageGroups[i]}_${j}`
                            setSelectCellId(cellId);
                        }
                    }
                }
            } 
        }
    }, [age, ageGroups, dataTable, vo2maxResult])

    function calculateAndShowData(e) {
        e.preventDefault();
        if (weight > 0 && distance > 0 && age > 0) {
            setShowData(true);
            setAgeGroups(Object.keys(dataTable));
        } else {
            setShowData(false);
        }
    }

    function changeShowshowTheory() {
        if (!showTheory) {
            setShowTheory(true);
        } else {
            setShowTheory(false);
        }
    }

    function changeShowResultTable() {
        if (!showResultTable) {
            setShowResultTable(true);
        } else {
            setShowResultTable(false);
        }
    }

    return(
        <div className="main__content calculators" id="vo2maxCooperTest">
        
            <SecondaryMenu 
                page="calculators"
                name="מחשבוני כושר"
            />

            <h2 className='calculator__title'>חישוב צריכת חמצן מירבית לפי מבחן קופר</h2> 

            <form className='calculator__form' onSubmit={calculateAndShowData}>
                <fieldset className='calculator__form__data'>
                <label className="calculator__form__data-label">מין:</label>
                    <select 
                    className='calculator__form__input' 
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    >
                    <option className="calculator__form__input-option" type="radio" id="gender-male" name="gender_hrTargets" value="male">זכר</option>
                    <option className="calculator__form__input-option" type="radio" id="gender-female" name="gender_hrTargets" value="female">נקבה</option>
                    </select>
                </fieldset>

                <fieldset className='calculator__form__data'>
                <label className="calculator__form__data-label">גיל (בשנים):</label>
                    <input 
                    className='calculator__form__input' 
                    type="number" 
                    id="age" 
                    placeholder="0" 
                    value={age > 0 ? age : ""}
                    onChange={(e) => setAge(e.target.value)}
                    />
                </fieldset>
                
                <fieldset className='calculator__form__data'>
                <label className="calculator__form__data-label">משקל (בק"ג):</label>
                    <input 
                    className='calculator__form__input' 
                    type="number" 
                    id="weight" 
                    placeholder="0" 
                    value={weight > 0 ? weight : ""}
                    onChange={(e) => setWeight(e.target.value)}
                    />
                </fieldset>
                
                <fieldset className='calculator__form__data'>
                <label className="calculator__form__data-label">מרחק ריצה ב-12 דקות (במטרים):</label>
                    <input
                    className='calculator__form__input' 
                    type="number" 
                    id="hrTargetsRest" 
                    placeholder="0" 
                    value={distance > 0 ? distance : ""}
                    onChange={(e) => setDistance(e.target.value)}
                    />
                </fieldset>

                <button className='calculator__form__submit-button' type='submit'>חשב</button>

                <fieldset  className="calculator__form__result">
                {
                    showData ? 
                        <p className="calculator__form__result-content">צריכת חמצן מירבית: {vo2maxResult[0]} מ"ל חמצן לדקה לק"ג גוף.
                        <br className="calculator__form__result-content" />
                        {vo2maxResult[1]} ליטר חמצן לדקה עבור גוף במשקל {weight} ק"ג.</p>
                    :
                        <p className="calculator__form__result-content">אנא וודא למלא את כל הפרטים ביחידות מידה הנדרשות. הנתונים צריכים להיות מספרים שלמים וגדולים מאפס.</p>
                }
                
                </fieldset>
            </form>

            <h3 className='calculator__subtitle' onClick={changeShowResultTable}>שקלול התוצאה</h3>
            {
                showResultTable ? 
                <div>
                    <p className='calculator__text'>{gender === 'male' ? 'התפלגות תוצאות צריכת החמצן המירבית עבור אוכלוסיית הגברים.' : 'התפלגות תוצאות צריכת החמצן המירבית עבור אוכלוסיית הנשים.'}</p>
                    <table className='calculator__table'>
                        <tbody>
                        <tr>
                            <td className='calculator__table__cell calculator__table__capture' rowSpan={2}>גיל</td>
                            <td className='calculator__table__cell calculator__table__capture' colSpan={5}>רמת כושר גופני לפי ערכי VO<sub>2</sub> max</td>
                        </tr>
                        <tr>
                            <td className='calculator__table__cell calculator__table__capture'>חלשה</td>
                            <td className='calculator__table__cell calculator__table__capture'>מתחת לממוצע</td>
                            <td className='calculator__table__cell calculator__table__capture'>ממוצעת</td>
                            <td className='calculator__table__cell calculator__table__capture'>מעל לממוצע</td>
                            <td className='calculator__table__cell calculator__table__capture'>מצויינת</td>
                        </tr>
                        {
                            ageGroups.map((ageGroup, index) => (
                                <tr key={index}>
                                    <td 
                                        className='calculator__table__cell calculator__table__capture'
                                    >
                                        {ageGroup.slice(3, 5)} - {ageGroup.slice(0, 2)}
                                    </td>
                                    <td 
                                        className='calculator__table__cell'
                                        id={`${ageGroup}_0`} 
                                        style={`${ageGroup}_0` === selectCellId ? {backgroundColor: '#ffa'} : {backgroundColor: 'transparent'}}
                                    >
                                        {dataTable[ageGroup][0]}
                                    </td>
                                    <td 
                                        className='calculator__table__cell'
                                        id={`${ageGroup}_1`} 
                                        style={`${ageGroup}_1` === selectCellId ? {backgroundColor: '#ffa'} : {backgroundColor: 'transparent'}}
                                    >
                                        {dataTable[ageGroup][1]}
                                    </td>
                                    <td 
                                        className='calculator__table__cell'
                                        id={`${ageGroup}_2`} 
                                        style={`${ageGroup}_2` === selectCellId ? {backgroundColor: '#ffa'} : {backgroundColor: 'transparent'}}
                                    >
                                        {dataTable[ageGroup][2]}
                                    </td>
                                    <td 
                                        className='calculator__table__cell'
                                        id={`${ageGroup}_3`} 
                                        style={`${ageGroup}_3` === selectCellId ? {backgroundColor: '#ffa'} : {backgroundColor: 'transparent'}}
                                    >
                                        {dataTable[ageGroup][3]}
                                    </td>
                                    <td 
                                        className='calculator__table__cell'
                                        id={`${ageGroup}_4`} 
                                        style={`${ageGroup}_4` === selectCellId ? {backgroundColor: '#ffa'} : {backgroundColor: 'transparent'}}
                                    >
                                        {dataTable[ageGroup][4]}
                                    </td>
                                </tr>
                            ))
                        }
                        
                        </tbody>
                    </table>
                </div>
                :
                ""
            }

            <h3 className='calculator__subtitle' onClick={changeShowshowTheory}>רקע תאורתי</h3>
            {
                showTheory ? 
                <div>
                    <p className='calculator__text'>
                        התהליך האירובי מחייב כמות של כ-3.5 מ"ל חמצן לכל 1 ק"ג גוף לדקה במצב מנוחה. 
                        לדוגמא, עבור אדם השוקל 70 ק"ג, קצב צריכת החמצן שלו למשך דקה אחת צריך להיות כ-245 מ"ל חמצן.
                        יתר על כן, כאשר אנו עוסקים בפעילות גופנית מאומצת מעניינת אותנו צריכת החמצן המירבית (צח"מ) 
                        של הגוף, מכיוון שנתון זה יכול לתת לנו מידע לגבי היכולת האירובית המירבית של האדם. כלומר באיזה
                        שלב הגוף ממצה את הפקת האנרגיה ממקורות אירוביים, ומתחיל להפיק אנרגיה ממקורות אנאירוביים.
                    </p>
                    <p className='calculator__text'>
                        בדיקת צריכת חמצת מירבית מתבצעת בדרך כלל במעבדה שבה הנבדק רץ על מסילה בקצב מתגבר עד לנקודה שבה 
                        למרות שקצב הריצה עולה, צריכת החמצן אינה עולה, ואפילו יורדת. כמו כן, בדרך כלל בנקודה זו גם נוכל
                        למצוא את קצב הלב (דופק) המירבי, שכן ישנה התאמה בין צריכת החמצן המירבית לבין הדופק המירבי. 
                        דרך נוספת להעריך את צריכת החמצן המירבית היא באמצעות מבחן שדה שפותח בצבא האמריקאי שבמסגרתו
                        צריך לרוץ במשך 12 דקות מרחק גדול ככל שניתן. לאחר מכן ניתן לקבל הערכה של צריכת החמצן המירבית
                        לפי חישוב שניתן להשתמש במחשבון שלהלן.
                    </p>
                    <p className='calculator__text'>
                        כמו כן, לרוב בדיקה זו תתבצע על ספורטאים מקצוענים או חובבי ספורט מיומנים, ולא נבצע בדיקה זו על
                        מאומנים מתחילים, או אנשים שיש להם בעיות בריאותיות שמגבילות להגיע למאמצים גבוהים. 
                    </p>
                    <p className='calculator__text'>
                        <b className='calculator__text_bold'>מקורות:</b>
                        <ul className='calculator__text_list'>
                            <li className='calculator__text_list-item'>קורס מאמני ריצות ארוכות. בית הספר למקצועות הספורט. תל אביב. 2019.</li>
                            <li className='calculator__text_list-item'>ד"ר ענבר, ע' ונייס, ש'. <b className='calculator__text_bold'>הפיזיולוגיה של המאמץ.</b> הוצאת "פוקוס". 2011.</li>
                            <li className='calculator__text_list-item'>https://www.brianmac.co.uk/gentest.html</li>
                        </ul>
                        
                    </p>
                </div>
                :
                ""
            }
        </div>
    )
}

export default Vo2maxCooperComponent;
