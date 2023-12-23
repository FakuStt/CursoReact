import React from 'react'
import {Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, Link} from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = ({img, categoria, key, titulo, descripcion, precio}) => {
  
  const { id } = useParams()

    return (
    <Card maxW='sm'>
        <CardBody>
            <Link to={"/producto/:id"} >
                <Image
                src= {img}
                alt='maceta artesanal'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                <Heading size='md'>{titulo}</Heading>
                <Text>
                    Tamaño: {categoria}
                    Id: {key}
                </Text>
                <Text>
                    {descripcion}
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                    {precio}
                </Text>
                </Stack>
            </Link>
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

export default ItemDetailContainer