import './App.css';
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

      {/* <Trainer name="Jordan" age={30} specialism="Software" location="Staffordshire" />
      <Trainer name="Piers" age={28} specialism="Devops" location="Derby" />
      <Trainer name={"JB"} age={26} /> */}

    </div>
  );
}

export default App;
