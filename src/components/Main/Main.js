import { Routes, Route } from 'react-router-dom';
import Calculators from "../Calculators/Calculators";
import MainMenu from "../MainMenu/MainMenu";
import HrTargetsCalculate from '../Calculators/HrTargetsCalculate/HrTargetsCalculate';
import Vo2maxCooperCalculate from '../Calculators/Vo2maxCooperCalculate/Vo2maxCooperCalculate';
import Vo2maxByHr from '../Calculators/Vo2maxByHr/Vo2maxByHr';
import FatPercentageSkinfoldCalculate from '../Calculators/FatPercentageSkinfoldCalculate/FatPercentageSkinfoldCalculate';
import FatPercentageCalculate from '../Calculators/FatPercentageCalculate/FatPercentageCalculate';
import BmiCalculate from '../Calculators/BmiCalculate/BmiCalculate';

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
            element={<Vo2maxCooperCalculate />}
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
            element={<BmiCalculate />}
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
  
