



export const Contenedor = ( {profesor = "Conrado Lanusse", tutor = "Javier Corra", ej = []} ) => {

    // console.log(props)

    // console.log(ej.length)
    // const {profesor, tutor} = props


    return (
        <div>
            <h2>Hola {profesor}</h2>
            <hr/>
            <p>Tutor asignado: {tutor}</p>
        </div>
    )
}