import { useEffect, useState } from 'react';
import './App.css';
import Converter from './components/Converter';
import Counter from './components/Counter';
import Footer from './components/Footer';
import Header from './components/Header';
import TrainerContainer from './components/TrainerContainer';
import TrainerForm from './components/TrainerForm';
import axios from 'axios';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import TrainerById from './components/TrainerById';
import MyContext from "./context/MyContext";

function App() {

  const [trainers, setTrainers] = useState([]);

  const getTrainers = async () => {
    try {
      const { data } = await axios.get("http://localhost:8081/trainers");
      setTrainers(data);
    } catch (err) {
      console.error(err);
    }
  }


  // only run the request on LOAD
  // fancy onload
  useEffect(() => {
    getTrainers();
  }, []);


  const [value, setValue] = useState("bloop");

  return (
    <MyContext.Provider value={{
      loggedIn: true,
      weapon: false
    }}>
      <Router>
        {/* Router -> enables routing */}
        <Header />
        {/* Routes groups routes together */}
        <Routes>
          {/* Route will render the component if the path matches current location */}
          <Route path="/counter" element={<Counter />} />
          <Route path="/converter" element={<Converter />} />
          <Route path="/trainer/get" element={<TrainerContainer trainers={trainers} />} />
          <Route path="/trainer/create" element={<TrainerForm getTrainers={getTrainers} />} />
          <Route path="/trainer/get/:id" element={<TrainerById />} />

        </Routes>

        <Footer />

      </Router>
    </MyContext.Provider>
  );
}

export default App;
