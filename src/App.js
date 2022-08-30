import './App.css'
import { Header } from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const App = () => {

  return (

    <div>
      <Header/>

      <ItemDetailContainer idProducto={1}/>

      <ItemListContainer/>
    </div>
  );
}

export default App;
