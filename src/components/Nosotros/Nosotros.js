import { useEffect } from "react"

const Nosotros = () => {

    const handleClick = (e) => {
        console.log(e)
    }

    const handleSaludar = (name) => {
        console.log(name)
    }

    // useEffect(() => {
    //     window.addEventListener('click', handleClick)

    //     return () => {
    //         window.removeEventListener('click', handleClick)
    //     }
    // }, [])

    return (
        <div className="container my-5">
            <h2 onClick={() => handleSaludar("Alesio Adrover")}>Nosotros</h2>
            <h2 onClick={handleClick}>Nosotros</h2>
            {/* <h2 onClick={(e) => console.log(e)}>Nosotros</h2> */}
            <hr></hr>
        </div>
    )
}

export default Nosotros