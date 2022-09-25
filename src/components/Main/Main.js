import { Routes, Route } from 'react-router-dom';
import Calculators from "../Calculators/Calculators";
import MainMenu from "../Main-menu/MainMenu";

function Main(props) {
    return (
      <main className="main">

        <Routes>

          <Route 
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
  