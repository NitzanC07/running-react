import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    window.addEventListener('beforeunload', alertUser);
    return () => {
      window.removeEventListener('beforeunload', alertUser);
    }
  }, []);

  const alertUser = (e) => {
    e.preventDefault();
    e.returnValue = 'אבג';
  }

  return (
    <div className="app">
      <div className="app__container">
    
        <Header />

        <Main />

        <Footer />

      </div>
    </div>
  );
}

export default App;
