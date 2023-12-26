import React from 'react'
import { Link } from 'react-router-dom'
import {Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button} from '@chakra-ui/react'

const Item = ( {maceta} ) => {

  return (
    <div className='divDeCards'>
        
        <Card maxW='sm' className='cards'>
            <CardBody className='cardBody'>
                
                    <Image
                    src= {maceta.img}
                    alt='maceta artesanal'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md' className='tituloCards'>{maceta.titulo}</Heading>
                    <Text color='blue.600' fontSize='2xl' className='precioCards'>
                        ${maceta.precio}
                    </Text>
                    </Stack>
                
            </CardBody>
            <Divider />
            
                <CardFooter className='divFooterCard'>
                    <ButtonGroup spacing='2' className='buttonGroupCount'>
                    
                        <Link to={`/item/${maceta.id}`}>

                            <Button className='botonVerDetalles'>
                                    
                                Ver detalles

                            </Button>
                                    
                        </Link>

                    </ButtonGroup>
                </CardFooter>
        </Card>

    </div>
  )
}

export default Item