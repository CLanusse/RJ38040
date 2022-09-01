import './App.css'
import { Header } from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Nosotros from './components/Nosotros/Nosotros';
import Contacto from './components/Contacto/Contacto';

const App = () => {

  return (

      <BrowserRouter>

          <Header/>

          <Routes>
            <Route path='/' element={ <ItemListContainer/> }/>
            <Route path='/productos/:categoryId' element={<ItemListContainer/>} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />}/>

            {/* <Route path="/nosotros" element={<Nosotros/>}/>
            <Route path="/contacto" element={<Contacto/>}/> */}
            {/* <Route path='*' element={ <Error404/>}/> */}
            <Route path='*' element={ <Navigate to="/"/>} />
          </Routes>


          {/* <Footer/> */}
      </BrowserRouter>

  );
}

export default App;



// ejemplo dos ROutes
/* <Routes>
  <Route path='/checkout' element={<HeaderCheckout/>}/>
  <Route path='*' element={<Header/>}/>
</Routes>

<Routes>
  <Route path='/' element={ <ItemListContainer/> }/>
  <Route path="/nosotros" element={<Nosotros/>}/>
  <Route path="/contacto" element={<Contacto/>}/>
  <Route path='*' element={ <Navigate to="/"/>} />
</Routes> */