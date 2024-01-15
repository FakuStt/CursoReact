import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Card, CardHeader, Heading, CardBody, Stack, Image, Text, CardFooter, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';



const Cart = () => {

  const { cart, precioTotalCarrito, vaciarCart } = useContext(CartContext);

  const handleVaciarCart = () => {
    vaciarCart()
  }

  return (
    <div>
      
      <Card>
          <CardHeader>
              <Heading size='md'>Carrito de compras</Heading>
          </CardHeader>

          <CardBody>
              
              {
                cart.map ((mace) => (
                  
                <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                key={mace.id}
                className='cardDeCart'
                >
                  <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src={mace.img}
                    alt='maceta artesanal'
                  />

                  <Stack className='stackDeCart'>
                    <CardBody>
                      <Heading size='md'>{mace.titulo}</Heading>

                      <Text py='0.5'>
                        Tamaño: {mace.categoria}
                      </Text>
                      <Text py='0.5'>
                       Precio por unidad: ${mace.precio}
                      </Text>
                      <Text py='0.5'>
                       Unidades: {mace.contador}
                      </Text>
                    </CardBody>

                    <CardFooter>
                      <Button variant='solid' colorScheme='blue'>
                        Eliminar una unidad
                      </Button>
                    </CardFooter>
                  </Stack>
                </Card>
                ))
              }
                 

                
              

          </CardBody>
      </Card>

      
      {
        cart.length > 0 ? 
        <>
            <Text fontSize='2xl' className='precioTotalCarrito'>Precio Total: ${precioTotalCarrito()}</Text>
            <Stack direction='row' spacing={4} align='center'>
              <Button colorScheme='teal' variant='solid' onClick={handleVaciarCart} >
                Vaciar Carrito
              </Button>
            </Stack>
        </>
      : 
      <Stack spacing={3}>
      
      <Text fontSize='2xl'>El carrito se encuentra vacio...</Text>

      <Link to={"/"} >
        <Button colorScheme='teal' variant='solid' onClick={handleVaciarCart} >
          Ver productos
        </Button>
      </Link>
      
      </Stack>
      }

    </div>
  )
}

export default Cart