import { useState, useEffect } from 'react';
import './App.scss';

import Home from './pages/Home/home';
import Loader from './components/loader'

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const onPageLoad = () => {
      setLoading(false);
    };

    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, [])

  return (
    <>
      {loading ? <Loader /> :
      <>
        <header>
          <nav>

          </nav>
        </header>
        <main>
          <Home />

        </main>
        <footer>

        </footer>
      </>
      }
    </>
  );
}

export default App;
