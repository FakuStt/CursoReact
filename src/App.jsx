import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Home from './components/Home'
import Carrito from './components/Carrito'
import Promociones from './components/Promociones'
import Contacto from './components/Contacto'
import Ayuda from './components/Ayuda'
import Catalogo from './components/Catalogo'


const App = () => {

  return (

    <ChakraProvider>
      <BrowserRouter>
      
      < NavBar />

      <Routes>

        <Route exact path='/' element={<Home />} />
        <Route exact path='/catalogo' element={<Catalogo />} />
        <Route exact path='/promociones' element={<Promociones />} />
        <Route exact path='/contacto' element={<Contacto />} />
        <Route exact path='/ayuda' element={<Ayuda />} />
        <Route exact path='/carrito' element={<Carrito />} />

      </Routes>
      < ItemListContainer 
      />




      </BrowserRouter>
      </ChakraProvider>
  )
}

export default App