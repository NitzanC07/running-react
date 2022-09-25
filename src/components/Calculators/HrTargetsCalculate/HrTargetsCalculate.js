import { Link } from 'react-router-dom';

function HrTargetsCalculate(props) {

    return(
        <div className="calculators" id="hrtargetsTest">
        
        <div className="BackToMenu_div">
            <Link to="/calculators">
                <button className="BackToMenu_Button">חזרה</button>
            </Link>
        </div>

        <h1>חישוב דופק מטרה</h1> 
        <table>
          <tr id="gender_hrTargets">
            <th>מין:</th>
            <td>
                <input className="inputGen" type="radio" id="gen3" name="gender_hrTargets" value="male" checked />
                <label for="gen3">זכר</label>
            </td>
            <td>
                <input className="inputGen" type="radio" id="gen4" name="gender_hrTargets" value="female" />
                <label for="gen4">נקבה</label></td>
          </tr>
          <tr>
            <th><label>גיל (בשנים):</label></th>
            <td colspan="2">
                <input type="number" id="hrTargetsAGE" placeholder="0" />
            </td>
          </tr>
          <tr>
            <th><label>דופק מנוחה (15 שניות):</label></th>
                <td colspan="2">
                    <input type="number" id="hrTargetsREST" placeholder="0" />
                </td>
          </tr>
          <tr>
            <th></th>
                <td colspan="2">
                    <button onclick="cal_HR_target();">חשב</button>
                </td>
          </tr>
          <tr>
            <th>תוצאה:</th>
            <td colspan="2"><div className="result" id="hrTargetsRESULT">תוצאה:</div></td>
          </tr>
        </table>
      </div>
    )
}

export default HrTargetsCalculate;