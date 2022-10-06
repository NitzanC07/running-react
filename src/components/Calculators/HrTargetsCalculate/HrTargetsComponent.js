import { useEffect, useState } from 'react';
import SecondaryMenu from '../../SecondaryMenu/SecondaryMenu';

function HrTargetsCalculate(props) {

  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("male");
  const [hrRest, setHrRest] = useState(0);
  const [hrMax, setHrMax] = useState(0);
  const percentages = [0.70, 0.8, 0.85, 0.90, 0.95];
  const verbals = ["אימון שחרור / התאוששות", "אימון אירובי קל", "אימון אירובי טמפו", "אימון אנאירובי", "אימון אנאירובי עצים"];
  const [showData, setShowData] = useState(false);

  function round_number(value, decimals){
    var shifter = Math.pow(10, decimals);
    return Math.round(value * shifter) / shifter;
  }

  useEffect(() => {
    if (age > 0 && hrRest > 0) {
      if (gender === "female") {
        setHrMax(226 - age)
      }
      else if (gender === "male") {
        setHrMax(220 - age)
      }
    } else {
      setShowData(false);
    }
    
  }, [age, gender, hrRest])

  function hrTargets(evt) {
    evt.preventDefault();
    if (age > 0 && hrRest > 0) {
      setShowData(true);    
    } else {
      setShowData(false);
    }
  }

  return(
    <div className="main__content calculators" id="hrtargetsTest">
    
      <SecondaryMenu />

      <h2 className='calculator__title'>חישוב דופק מטרה</h2> 
      <form className='calculator__form' onSubmit={hrTargets}>
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
              id="hrTargetsAge" 
              placeholder="0" 
              value={age > 0 ? age : ""}
              onChange={(e) => setAge(e.target.value)}
            />
        </fieldset>
        
        <fieldset className='calculator__form__data'>
          <label className="calculator__form__data-label">דופק במנוחה (15 שניות):</label>
            <input
              className='calculator__form__input' 
              type="number" 
              id="hrTargetsRest" 
              placeholder="0" 
              value={hrRest > 0 ? hrRest : ""}
              onChange={(e) => setHrRest(e.target.value)}
            />
        </fieldset>

        <button className='calculator__form__submit-button' type='submit'>חשב</button>

        {
          showData ?
          <fieldset  className="calculator__form__result">
            <p className="calculator__form__result-content">דופק מירבי: {hrMax}</p>
            <p className="calculator__form__result-content">דופק במנוחה (בדקה): {hrRest * 4}</p>
            {
              percentages.map((zone, i) => (
                <p className="calculator__form__result-content" key={i}>{verbals[i]} בעצימות של {zone * 100}%:<br className="calculator__form__result-content" />{round_number(((hrMax - hrRest*4) * zone + hrRest*4), 0)} פעימות לדקה ומעלה.</p>
              ))
            }
          </fieldset>
          :
          <fieldset  className="calculator__form__result">
            <p className="calculator__form__result-content">אנא וודא למלא את כל הפרטים ביחידות מידה הנדרשות. הנתונים צריכים להיות מספרים שלמים וגדולים מאפס.</p>
          </fieldset>
        }
      </form>
    </div>
  )
}

export default HrTargetsCalculate;
