import { Header } from '../components/Header/Header'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import Nosotros from '../components/Nosotros/Nosotros';
import Contacto from '../components/Contacto/Contacto';
import Cart from '../components/Cart/Cart';
import { Routes, Route, Navigate } from 'react-router-dom'
import Checkout from '../components/Checkout/Checkout';

const PrivateRoutes = () => {

    return (
        <>
            {/* ROUTER PRIVADO */}
            <Header/>
            <Routes>
                <Route path='/' element={ <ItemListContainer/> }/>
                <Route path='/productos/:categoryId' element={<ItemListContainer/>} />
                <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
                <Route path="/nosotros" element={<Nosotros/>}/>
                <Route path="/contacto" element={<Contacto/>}/>
                <Route path='*' element={ <Navigate to="/"/>} />
                {/* <Route path='*' element={ <Error404/>}/> */}

                {/* {
                    user.rol === "admin"
                    ? <Route path="/admin" element={ <AdminScreen />} />
                    : null
                } */}
            </Routes>
        </>
    )
}

export default PrivateRoutes