import { Routes, Route } from 'react-router-dom';
import Calculators from "../Calculators/Calculators";
import MainMenu from "../MainMenu/MainMenu";
import HrTargetsCalculate from '../Calculators/HrTargetsCalculate/HrTargetsCalculate';

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
            path="/" 
            element={<MainMenu id="main-menu" />}
          />

        </Routes>
        

        

      </main>
    );
  }
  
  export default Main;
  