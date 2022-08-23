import './App.css'
import { Header } from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contador from './ejemplos/Contador';
import { useState } from 'react';

const App = () => {
  
  const [show, setShow] = useState(false)
  
  const handleShow = () => {
    setShow(!show)
  }

  return (

    <div>
      <Header/>

      <button className='btn btn-primary' onClick={handleShow} >Mostrar contador</button>

      {
        show ? <Contador/> : null
      }

      

    </div>
  );
}

export default App;
