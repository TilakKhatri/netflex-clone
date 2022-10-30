import { useState, useEffect } from 'react';
import Navbar from "./component/Navbar";
import {
  Route,
  Routes
} from 'react-router-dom';
import axios from 'axios';
import requests from './requests/Request';
import Home from './pages/Home';
import Footer from './component/Footer';
import Loader from './loader/Loader';

function App() {
  const [loading, setLoading] = useState(true);
  const [start, setStart] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setStart(true);
    }, 4000);
  }, []);
  return (
    <>

      {start &&
        <>

          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </>
      }

      {
        loading && <>
          <Loader />
        </>
      }
    </>
  );
}

export default App;
