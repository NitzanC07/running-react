import { Routes, Route } from 'react-router-dom';
import Calculators from "../Calculators/Calculators";
import MainMenu from "../MainMenu/MainMenu";
import HrTargetsCalculate from '../Calculators/HrTargetsCalculate/HrTargetsComponent';
import Vo2maxCooperComponent from '../Calculators/Vo2maxCooperCalculate/Vo2maxCooperComponent';
import Vo2maxByHr from '../Calculators/Vo2maxByHr/Vo2maxByHrComponent';
import FatPercentageSkinfoldCalculate from '../Calculators/FatPercentageSkinfoldCalculate/FatPercentageSkinfoldComponent';
import FatPercentageCalculate from '../Calculators/FatPercentageCalculate/FatPercentageComponent';
import BmiComponent from '../Calculators/BmiCalculate/BmiComponent';

function Main(props) {
    return (
      <main className="main">

        <Routes>

          <Route 
            path="/calculators" 
            element={<Calculators id="calculators" />}
          />

          <Route 
            path='/calculators/hrTargetsCalculate'
            element={<HrTargetsCalculate />}
          />

          <Route 
            path='/calculators/vo2maxCooperCalculate'
            element={<Vo2maxCooperComponent />}
          />

          <Route 
            path='/calculators/vo2maxByHrCalculate'
            element={<Vo2maxByHr />}
          />

          <Route 
            path='/calculators/fatPercentageSkinfoldCalculate'
            element={<FatPercentageSkinfoldCalculate />}
          />

          <Route 
            path='/calculators/fatPercentageCalculate'
            element={<FatPercentageCalculate />}
          />

          <Route 
            path='/calculators/bmiCalculate'
            element={<BmiComponent />}
          />

          <Route 
            path="/" 
            element={<MainMenu id="main-menu" />}
          />

        </Routes>
        

        

      </main>
    );
  }
  
  export default Main;
  
