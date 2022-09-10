import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { LoginProvider, useLoginContext } from './context/LoginContext';
import AppRouter from './router/AppRouter';

const App = () => {

  return (
    <LoginProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </LoginProvider>
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