import ItemList from "../ItemList/ItemList"
import Loader from "../Loader/Loader"
import { useProductos } from "../../hooks/useProductos"

const ItemListContainer = () => {
   
    const { productos, loading } = useProductos()

    return (
        <div>
            {
                loading 
                ? <Loader/>
                : <ItemList productos={productos}/>
            }
        </div>   
    )
}

export default ItemListContainer

