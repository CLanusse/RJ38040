



// const Titulo = ( {texto} ) => {

//     return (
//         <h2 className="main-title">
//             {texto}
//         </h2>
//     )
// }
const Titulo = ( {children} ) => {

    return (
        <h2 className="main-title">
            {children}
        </h2>
    )
}

export default Titulo