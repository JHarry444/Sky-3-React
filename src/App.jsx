import { useEffect, useState } from 'react';
import './App.css';
import Converter from './components/Converter';
import Counter from './components/Counter';
import Footer from './components/Footer';
import Header from './components/Header';
import LoggedIn from './components/LoggedIn';
import Trainer from './components/Trainer';
import TrainerContainer from './components/TrainerContainer';
import TrainerForm from './components/TrainerForm';
import axios from 'axios';

function App() {

  const [trainers, setTrainers] = useState([]);

  // only run the request on LOAD
  // fancy onload
  useEffect(() => {
    axios.get("http://localhost:8081/trainers")
      .then(res => setTrainers(res.data))
      .catch(err => console.error(err));
  }, []);



  return (
    <div className="App">
      {/* <Header /> */}
      {/* <LoggedIn loggedIn /> */}
      {/* <LoggedIn /> */}
      {/* <Counter /> */}
      <Converter />
      <TrainerForm setTrainers={setTrainers} />
      <TrainerContainer trainers={trainers} />

      <Footer />

    </div>
  );
}

export default App;
