

const User = ( {usuario} ) => {

    const {nombre, rol, direccion, edad} = usuario

    return (
        <div>
            <h4>Nombre: {nombre}</h4>
            <p>Rol: {rol}</p>
            <p>Dirección: {direccion}</p>
            <p>Edad: {edad}</p>
        </div>
    )
}

export default User