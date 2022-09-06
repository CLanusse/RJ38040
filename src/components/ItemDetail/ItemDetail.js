import { useState } from "react"
import Counter from "../Counter/Counter"
import Select from "../Select/Select"



const ItemDetail = ({item}) => {

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

        console.log(itemToCart)
        // console.log({
        //     ...item,
        //     cantidad
        // })
    }

    return (
        <div className="container my-5">
            <img src={item.img}/>
            <h3>{item.nombre}</h3>
            <p>{item.desc}</p>
            <p>{item.category}</p>
            <h4>{item.precio}</h4>
            <hr/>
            <Select options={item.talles} onSelect={setTalle}/>
            <Select options={item.colores} onSelect={setColor}/>
            <hr/>

            <Counter 
                max={item.stock}
                counter={cantidad}
                setCounter={setCantidad}
                handleAgregar={handleAgregar}
            />

        </div>
    )
}

export default ItemDetail