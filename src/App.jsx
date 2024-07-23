import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import LoggedIn from './components/LoggedIn';
import Trainer from './components/Trainer';
import trainers from "./data/trainers.json";
import { v4 as uuidv4 } from 'uuid';

function App() {
  return (
    <div className="App">
      <Header />
      <LoggedIn loggedIn />
      <LoggedIn />

      {
        trainers.map(({ name, age, specialism, location }) => (<Trainer
          key={uuidv4()}
          name={name}
          age={age}
          specialism={specialism}
          location={location} />))
      }

      <Footer />

    </div>
  );
}

export default App;
