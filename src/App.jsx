//filtrar por categoria y por id

import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Carrito from './components/Carrito'
import ItemDetailContainer from './components/ItemDetailContainer'


const App = () => {

  return (

    
      <BrowserRouter>
      
      < NavBar />

      <Routes>

        <Route exact path='/' element={<ItemListContainer />} />
        <Route exact path='/carrito' element={<Carrito />} />
        <Route exact path='/item/:id' element={<ItemDetailContainer />} />
        <Route exact path='/categoria/:categoriaId' element={<ItemListContainer />} />

      </Routes>

      </BrowserRouter>
      
  )
}

export default App