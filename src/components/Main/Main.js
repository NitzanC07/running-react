import { Routes, Route } from 'react-router-dom';
import CalculatorsMenu from "../Calculators/CalculatorsMenu";
import MainMenu from "../MainMenu/MainMenu";
import HrTargetsComponent from '../Calculators/HrTargetsCalculate/HrTargetsComponent';
import Vo2maxCooperComponent from '../Calculators/Vo2maxCooperCalculate/Vo2maxCooperComponent';
import Vo2maxByHrComponent from '../Calculators/Vo2maxByHr/Vo2maxByHrComponent';
import FatPercentageSkinfoldComponent from '../Calculators/FatPercentageSkinfoldCalculate/FatPercentageSkinfoldComponent';
import FatPercentageComponent from '../Calculators/FatPercentageCalculate/FatPercentageComponent';
import BmiComponent from '../Calculators/BmiCalculate/BmiComponent';
import PaceCalculate from '../Calculators/PaceCalculator/PaceComponent';
import TrainingPlans from '../TrainingPlans/TrainingPlans';
import Bct from '../Bct/Bct';
import IntervalRunningTraining from '../TrainingPlans/IntervalsRunningTraining/IntervalRunningTraining';
import PageNotFound from '../PageNotFound/PageNotFound';
import SequentialRunningTraining from '../TrainingPlans/SequentialRunningTraining/SequentialRunningTraining';
import PricesList from '../PricesList/PricesList';

function Main(props) {

    return (
      <main className="main">

        <Routes>

          <Route 
            exact path='/'
            element={<MainMenu id="main-menu" />}
          />

          <Route 
            path='/calculators'
            element={<CalculatorsMenu id="calculators" />}
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
            path='/calculators/pace-calculate'
            element={<PaceCalculate />}
          />

          <Route 
            path='/training-plans-and-tools'
            element={<TrainingPlans id='training-plans-and-tools' />}
          />

          <Route 
            path='/training-plans-and-tools/intervals-running'
            element={<IntervalRunningTraining />}
          />

          <Route 
            path='/training-plans-and-tools/sequential-running'
            element={<SequentialRunningTraining />}
          />

          <Route 
            path='/training-plans-and-tools/bct'
            element={<Bct id="bct" />}
          />

          <Route 
            path='/prices-list'
            element={<PricesList id="prices-list" />}
          />

          {/* <Route 
            path='/bct/coordination-test1'
            element={<Bct id="bct" />}
          />

          <Route 
            path='/bct/coordination-test2'
            element={<Bct id="bct" />}
          />

          <Route 
            path='/bct/coordination-test3'
            element={<Bct id="bct" />}
          />

          <Route 
            path='/bct/coordination-test4'
            element={<Bct id="bct" />}
          /> */}

          <Route
            path='*'
            element={<PageNotFound />}
          />

        </Routes>
        
      </main>
    );
  }
  
  export default Main;
  
