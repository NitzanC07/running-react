import { Routes, Route } from 'react-router-dom';
import Calculators from "../Calculators/Calculators";
import MainMenu from "../MainMenu/MainMenu";
import HrTargetsComponent from '../Calculators/HrTargetsCalculate/HrTargetsComponent';
import Vo2maxCooperComponent from '../Calculators/Vo2maxCooperCalculate/Vo2maxCooperComponent';
import Vo2maxByHrComponent from '../Calculators/Vo2maxByHr/Vo2maxByHrComponent';
import FatPercentageSkinfoldComponent from '../Calculators/FatPercentageSkinfoldCalculate/FatPercentageSkinfoldComponent';
import FatPercentageComponent from '../Calculators/FatPercentageCalculate/FatPercentageComponent';
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
            path='/calculators/hr-targets-calculate'
            element={<HrTargetsComponent />}
          />

          <Route 
            path='/calculators/vo2max-cooper-calculate'
            element={<Vo2maxCooperComponent />}
          />

          <Route 
            path='/calculators/vo2max-by-hr-calculate'
            element={<Vo2maxByHrComponent />}
          />

          <Route 
            path='/calculators/fat-percentage-skinfold-calculate'
            element={<FatPercentageSkinfoldComponent />}
          />

          <Route 
            path='/calculators/fat-percentage-calculate'
            element={<FatPercentageComponent />}
          />

          <Route 
            path='/calculators/bmi-calculate'
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
  
