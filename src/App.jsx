import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Carrito from './components/Carrito'
import ItemDetailContainer from './components/ItemDetailContainer'
import ShoppingCartContext from './context/ShoppingCartContext'
import Loader from './components/Loader'


const App = () => {

  return (

    
      <BrowserRouter>

          <ShoppingCartContext>
        
              < NavBar />

              <Routes>

                <Route exact path='/' element={<ItemListContainer />} />
                <Route exact path='/carrito' element={<Carrito />} />
                <Route exact path='/item/:id' element={<ItemDetailContainer />} />
                <Route exact path='/categoria/:categoriaId' element={<ItemListContainer />} />

              </Routes>

          </ShoppingCartContext>

      </BrowserRouter>
      
  )
}

export default App