import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Me from './components/Me';
import Trainer from './components/Trainer';

function App() {
  return (
    <div className="App">
      fdjgdfghdgjdfw
      <Header />
      <Trainer name="Jordan" age={30} specialism="Software" location="Staffordshire" />
      <Trainer name="Piers" age={28} specialism="Devops" location="Derby" />
      <Trainer name={243} age={26} />

    </div>
  );
}

export default App;
