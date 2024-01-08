import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'

const Carrito = () => {

  const {cart, setCart} = useContext(CartContext)

  return (
    <div></div>
  )
}

export default Carrito