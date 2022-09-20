import { createContext, useContext, useEffect, useState } from "react";
import Swal from 'sweetalert2'

export const CartContext = createContext()


const init = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState(init)


    const addToCart = (item) => {
      // const newCart = cart.slice()
      // newCart.push(itemToCart)
      setCart([...cart, item])
    }

    // editar cantidad
    // const increaseQuantityInCart = (id) => {
        // const newCart = cart.slice() || [...cart]
        // buscar el item a modificar segun ID
        // verificar qeu la modificación sea posible (IF)
        // setCart(newCart)
    // }

    const removeItem = (id) => {
        setCart( cart.filter((item) => item.id !== id) )
    }
  
    const isInCart = (id) => {
      return cart.some((item) => item.id === id)
    }
  
    const cartQuantity = () => {
      return cart.reduce((acc, item) => acc + item.cantidad, 0)
    }

    const cartTotal = () => {
        return cart.reduce((acc, item) => acc + item.cantidad * item.precio, 0)
    }

    const emptyCart = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                setCart([])
            }
          })
    }

    const terminarCompra = () => {
      setCart([])
    }
    const terminarCompraConSwal = (id) => {
      Swal.fire({
        title: 'Compra exitosa!',
        text: `Tu número de orden es: ${id}`,
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Genial!'
      })
      setCart([])
    }

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(cart))
    }, [cart])

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            isInCart,
            cartQuantity,
            cartTotal,
            emptyCart,
            removeItem,
            terminarCompra,
            terminarCompraConSwal
          }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext)
}