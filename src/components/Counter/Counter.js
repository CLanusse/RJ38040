

const Counter = ({max, counter, setCounter, handleAgregar}) => {

    const handleRestar = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }
    
    const handleSumar = () => {
        if (counter < max ) {
            setCounter(counter + 1)
        }
    }


    return (
        <div>
            <button 
                className="btn btn-outline-primary"
                onClick={handleRestar}
            >
                -
            </button>

            <span className="mx-3">{counter}</span>

            <button 
                className="btn btn-primary"
                onClick={handleSumar}
            >
                +
            </button>

            <br/>

            <button onClick={handleAgregar} className="btn btn-success my-2">
                Agregar al carrito
            </button>
        </div>
    )
}

export default Counter