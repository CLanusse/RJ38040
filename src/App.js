import './App.css'
// import Tutores from './Tutores.js'
import { Tutores } from './components/Tutores';
import { Header } from './components/Header'

const App = () => {

  return (
    <div>
      <Header/>

      <Tutores/>
    </div>
  );
}

export default App;
