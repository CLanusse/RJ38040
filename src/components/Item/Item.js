

const Item = ( {producto} ) => {

    return (
        <div>
            <img src={producto.img}/>
            <h4>{producto.nombre}</h4>
            <p>Precio: {producto.precio}</p>
            <small>Stock disponible: {producto.stock}</small>
            <p>{producto.desc}</p>
            <a className="btn btn-primary my-2">Ver más</a>
        </div>
    )
}

export default Item