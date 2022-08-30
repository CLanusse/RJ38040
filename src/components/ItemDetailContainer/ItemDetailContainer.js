import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"


const ItemDetailContainer = ( {idProducto} ) => {

    const [item, setItem] = useState(null)

    useEffect(() => {
        // pedirDatos()
        // setear el estado con un único producto

    }, [])

    return (
        <div>
            {/* 
            Componente de presentación
            <ItemDetail item={item}/> 
            
            */}
        </div>
    )
}

export default ItemDetailContainer