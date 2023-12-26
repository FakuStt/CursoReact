import {React, useEffect, useState } from 'react'
import { Button, Stack, Alert, AlertIcon } from '@chakra-ui/react'

const ItemCount = () => {

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

  return (
    <div className='divDeContador'>

        <p className='pDeContador'>{contador}</p>

        <Button colorScheme='teal' size='m' onClick = {restar} className='botonRestar'>-</Button>

        <Button onClick = {alertAgregadoAlCarrito} className='botonAgregarCarrito'>Agregar al carrito</Button>

        <Button colorScheme='teal' size='m' onClick = {sumar} className='botonSumar'>+</Button>

        

    </div>


  )
}

export default ItemCount