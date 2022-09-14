import {  useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import Memo from "../../ejemplos/Memo"
import Counter from "../Counter/Counter"
import Select from "../Select/Select"



const ItemDetail = ({item}) => {

    const { cart, addToCart, isInCart } = useCartContext()

    const [cantidad, setCantidad] = useState(1)
    const [talle, setTalle] = useState(item.talles[0].value)
    const [color, setColor] = useState(item.colores[0].value)
   
    const handleAgregar = () => {
        const itemToCart = {
            id: item.id,
            precio: item.precio,
            nombre: item.nombre,
            talle,
            cantidad,
            color
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
            <Select options={item.talles} onSelect={setTalle}/>
            <Select options={item.colores} onSelect={setColor}/>
            <hr/>
            <Memo/>
            
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