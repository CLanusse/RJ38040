import './App.css'
import { Header } from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {

  return (

    <div>
      <Header/>

      <ItemListContainer/>
    </div>
  );
}

export default App;
