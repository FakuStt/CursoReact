import React from 'react'
import {Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup} from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { useParams } from 'react-router-dom'

const ItemDetail = ({maceta}) => {
  
  const { id } = useParams()

    return (
    <Card maxW='sm'>
        <CardBody>
                <Image
                src= {maceta.img}
                alt='maceta artesanal'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                <Heading size='md'>{maceta.titulo}</Heading>
                <Text>
                    Tamaño: {maceta.categoria}
                    Id: {maceta.key}
                </Text>
                <Text>
                    {maceta.descripcion}
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                    {maceta.precio}
                </Text>
                </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
            <ButtonGroup spacing='2'>
                <ItemCount />
            </ButtonGroup>
        </CardFooter>
    </Card>
  )
}

export default ItemDetail