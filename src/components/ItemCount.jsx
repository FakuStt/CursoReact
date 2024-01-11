import {React, useEffect, useState } from 'react'
import { Button, Stack, Alert, AlertIcon } from '@chakra-ui/react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const ItemCount = (item) => {

    const {cart, setCart} = useContext(CartContext)

    const [contador, setContador] = useState(0)

    const alertAgregadoAlCarrito = () => {
    <Stack spacing={3}>
      
      <Alert status='success'>
        <AlertIcon />
          Se han agregado {contador} macetas al carrito!
      </Alert>

    </Stack>
    }

    const sumar = () => {
      if (contador < 10) {
        setContador(contador + 1)
      } 
    }

    const restar = () => {
      if (contador > 0) {
        setContador(contador - 1)
      } 
    }

    const agregaralCarrito = () => {
      const itemAgregado = {item, contador}
      console.log(itemAgregado)
      if (cart.find((maceta) => maceta.id === itemAgregado.item.id)){
        console.log(itemAgregado.item)
      console.log("Esta en el carrito")
    } else {
      console.log("no esta en el carrito")
      console.log(item)
    }
  }

  return (
    <div className='divDeContador'>

        <p className='pDeContador'>{contador}</p>

        <Button colorScheme='teal' size='m' onClick = {restar} className='botonRestar'>-</Button>

        <Button onClick = {agregaralCarrito} className='botonAgregarCarrito'>Agregar al carrito</Button>

        <Button colorScheme='teal' size='m' onClick = {sumar} className='botonSumar'>+</Button>

        

    </div>


  )
}

export default ItemCount