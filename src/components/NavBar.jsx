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
                Tamaños
              </MenuButton>
              <MenuList>
                <Link to={"/categoria/chico"}>
                  <MenuItem>Macetas Chicas</MenuItem>
                </Link>
                <Link to={"/categoria/mediano"}>
                  <MenuItem>Macetas Medianas</MenuItem>
                </Link>
                <Link to={"/categoria/grande"}>
                  <MenuItem>Macetas Grandes</MenuItem>
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