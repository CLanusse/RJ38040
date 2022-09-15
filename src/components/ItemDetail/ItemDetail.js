import {  useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import Counter from "../Counter/Counter"

const ItemDetail = ({item}) => {

    const { addToCart, isInCart } = useCartContext()

    const [cantidad, setCantidad] = useState(1)
   
    const handleAgregar = () => {
        const itemToCart = {
            id: item.id,
            precio: item.precio,
            nombre: item.nombre,
            cantidad
        }
        
        addToCart(itemToCart)
    }

    // if (stock === 0) { <algo/> }

    return (
        <div className="container my-5">
            <img src={item.img}/>
            <h3>{item.nombre}</h3>
            <p>{item.desc}</p>
            <p>{item.category}</p>
            <h4>{item.precio}</h4>

            {item.promo && <h5 style={{color: 'red'}}>{item.promo}% OFF !!</h5>}
            <hr/>
            {/* <Select options={item.talles} onSelect={setTalle}/> */}
            {/* <Select options={item.colores} onSelect={setColor}/> */}
                        
            {
                isInCart(item.id)
                ?   <Link to="/cart" className="btn btn-success my-2">Terminar mi compra</Link>
                :   <Counter 
                        max={item.stock}
                        counter={cantidad}
                        setCounter={setCantidad}
                        handleAgregar={handleAgregar}
                    />
            }



        </div>
    )
}

export default ItemDetail