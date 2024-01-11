import React from 'react'
import {Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup} from '@chakra-ui/react'
import ItemCount from './itemCount'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const ItemDetail = ( {item} ) => {
  
    const {cart, setCart} = useContext(CartContext)
    console.log(cart)

    return (
        <div className='divCardDetallada'>
            <Card maxW='sm'>
                <CardBody>
                        <Image
                        src= {item.img}
                        alt='maceta artesanal'
                        borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                        <Heading size='md' className='tituloDetallado'>{item.titulo}</Heading>
                        <Text className='tamDetallado'>
                            Tamaño: {item.categoria}
                        </Text>
                        <Text className='idDetallado'>
                            Id: {item.id}
                        </Text>
                        <Text className='descripcionDetallada'>
                            {item.descripcion}
                        </Text>
                        <Text color='blue.600' fontSize='2xl' className='precioDetallado'>
                            ${item.precio}
                        </Text>
                        </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <ItemCount item={item} />
                    </ButtonGroup>
                </CardFooter>
            </Card>
    </div>
  )
}

export default ItemDetail