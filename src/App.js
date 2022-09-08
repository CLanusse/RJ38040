import './App.css'
import { Header } from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Nosotros from './components/Nosotros/Nosotros';
import Contacto from './components/Contacto/Contacto';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import { DarkModeProvider } from './context/DarkModeContext';

const App = () => {



  return (
    <CartProvider>
      <DarkModeProvider>

      <BrowserRouter>

          <Header/>

          <Routes>
            <Route path='/' element={ <ItemListContainer/> }/>
            <Route path='/productos/:categoryId' element={<ItemListContainer/>} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />}/>

            <Route path='/cart' element={<Cart/>}/>
            <Route path="/nosotros" element={<Nosotros/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
            {/* <Route path='*' element={ <Error404/>}/> */}
            <Route path='*' element={ <Navigate to="/"/>} />
          </Routes>


          {/* <Footer/> */}
      </BrowserRouter>

      </DarkModeProvider>
    </CartProvider>
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