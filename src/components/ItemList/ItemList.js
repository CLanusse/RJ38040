import Item from "../Item/Item"


const ItemList = ( {productos = []} ) => {

    return (
        <div className="container my-5">
            <h2>Productos</h2>
            <hr/>

            { productos.map((prod) => <Item producto={prod} key={prod.id}/>)}
            {/* { productos.map((prod) => {
                if (prod.stock > 0) {
                    return <Item producto={prod} key={prod.id}/>
                } else {
                    return null
                }
            })} */}
        </div>
    )
}

export default ItemList