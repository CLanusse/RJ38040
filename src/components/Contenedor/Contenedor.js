import './Contenedor.css'


const Contenedor = ( {children} ) => {
 

    return (
        <div className="contenedor">
            {children}
        </div>
    )
}

export default Contenedor