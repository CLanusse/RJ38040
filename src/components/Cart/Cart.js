import { useCartContext } from "../../context/CartContext"
import { BsFillTrashFill } from 'react-icons/bs'
import { Link, Navigate } from "react-router-dom"

const Cart = () => {

    const { cart, cartTotal, emptyCart, removeItem } = useCartContext()

    // if (cart.length === 0) return <Navigate to="/"/>

    if (cart.length === 0) {
        return ( // <EmptyCart />
        // <Navigate to="/"/>
            <div className="container my-5">
                <h2>Tu carrito está vacío</h2>
                <hr/>
                <Link to="/" className="btn btn-primary">Ir a comprar</Link>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <h2>Tu carrito</h2>
            <hr/>

            { cart.map((item) => (
                // <CartItem key={} item={item}/>
                <div key={item.id}>
                    <h3>{item.nombre}</h3>
                    <p>Precio: {item.precio}</p>
                    <p>Cantidad: {item.cantidad}</p>
                    <small>Color: {item.color}</small>
                    <small>Talle: {item.talle}</small>
                    <button onClick={() => removeItem(item.id)} className="btn btn-danger mx-2"><BsFillTrashFill/></button>
                    <hr/>
                </div>
            ))}


            <h4>Total: ${cartTotal()}</h4>
            <button onClick={emptyCart} className="btn btn-danger">Vaciar carrito</button>     
        </div>
    )
}

export default Cart