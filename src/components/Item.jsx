import React from 'react'
import {Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, Link} from '@chakra-ui/react'
import ItemCount from './ItemCount'

const Item = ({img, titulo, precio, id}) => {
  return (
    <div>
        <Card maxW='sm'>
            <CardBody>
                <Link to={"/producto/productoId"} >
                    <Image
                    src= {img}
                    alt='maceta artesanal'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>{titulo}</Heading>
                    <Text color='blue.600' fontSize='2xl'>
                        {precio}
                    </Text>
                    </Stack>
                </Link>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button>
                        <Link to={`/producto/${id}`}>
                            Ver detalles
                        </Link>
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    </div>
  )
}

export default Item