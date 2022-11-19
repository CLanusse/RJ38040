import { Articulo } from "../Articulo/Articulo"



export const ArticulosContainer = () => {

    // llamado a APIs para obtener articulos a mostrar

    const art1 = {
        titulo: "Hola Mundo!",
        content: "Un texto genérico 1",
        img: "https://via.placeholder.com/100"
    }

    const art2 = {
        titulo: "Hola Mundo 2!",
        content: "Un texto genérico 2",
        img: "https://via.placeholder.com/100"
    }

    return (
        <div>
            <Articulo titulo={art1.titulo} content={art1.content} img={art1.img}/>
            <Articulo {...art2}/>
        </div>
    )
}