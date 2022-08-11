import logo from './logo.svg';
import './App.css';


const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='profe'>
          Conrado Lanusse the best in the world.
        </p>
        <a
          className="App-link"
          href="https://coderhouse.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go Coder
        </a>
      </header>
    </div>
  );
}

export default App;
