//componente navbar que contenga brandt(titulo o nombre de la tienda), listado de categorias clickeabls y librerias de estilo con bs o jack
// crear componente CartWidget con icono y numero fijo y darle estilo con bs

import React from 'react' 
import CartWidget from './CartWidget'
import { Flex, Box, Spacer, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { Link } from 'react-router-dom';


const NavBar = () => {

  return (
    <>
      <Flex>
          <Link to={"/"}>
            <Box p='4'>
              OjalaMacetas
            </Box>
          </Link>
          <Spacer />
          
          <Menu>
              <MenuButton>
                Acciones
              </MenuButton>
              <MenuList>
                <Link to={"/catalogo"}>
                  <MenuItem>Catalogo</MenuItem>
                </Link>
                <Link to={"/promociones"}>
                  <MenuItem>Promociones</MenuItem>
                </Link>
                <Link to={"/carrito"}>
                  <MenuItem>Carrito</MenuItem>
                </Link>
                <Link to={"/contacto"}>
                  <MenuItem>Contacto</MenuItem>
                </Link>
                <Link to={"/ayuda"}>
                  <MenuItem>Ayuda</MenuItem>
                </Link>
              </MenuList>
          </Menu>

          <Spacer />

          <Box p='4'>
            <CartWidget />
          </Box>

      </Flex>


      
    </>
  )
}

export default NavBar