import { Routes, Route } from 'react-router-dom';
import Calculators from "../Calculators/Calculators";
import MainMenu from "../MainMenu/MainMenu";

function Main(props) {
    return (
      <main className="main">

        <Routes>

          <Route 
            exact
            path="/" 
            element={<MainMenu />}
          />

          <Route 
            path="/calculators" 
            element={<Calculators />}
          />

        </Routes>
        

        

      </main>
    );
  }
  
  export default Main;
  