import { useContext } from 'react'
import { BsFillCartCheckFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'


const CartWidget = () => {

    const { cartQuantity } = useContext(CartContext)

    return (
        <Link to="/cart">
            <BsFillCartCheckFill/>
            <span>{cartQuantity()}</span>
        </Link>
    )
}

export default CartWidget