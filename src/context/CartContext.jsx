import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext(null)

// const cartEnJson = JSON.parse(localStorage.getItem("cart")) || []

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const contadorDeCart = () => {
      return cart.reduce ((acc, mace) => acc + mace.contador, 0);
    }

    const precioTotalCarrito = () => {
      return cart.reduce ((acc, mace) => acc + mace.precio * mace.contador, 0)
    }
    
    const vaciarCart = () => {
      setCart([])
    }


/*    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])
*/

    return(
        <CartContext.Provider value={{cart, setCart, contadorDeCart, precioTotalCarrito, vaciarCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

