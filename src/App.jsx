import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Cart from './components/Cart'
import ItemDetailContainer from './components/ItemDetailContainer'
import { CartContext } from './context/CartContext'
import { useState } from 'react'



const App = () => {

  const [cart, setCart] = useState([])

  return (

    <CartContext.Provider value={ {cart, setCart} }>
      <BrowserRouter>

          
          
        
              < NavBar />

              <Routes>

                <Route exact path='/' element={<ItemListContainer />} />
                <Route exact path='/carrito' element={<Cart />} />
                <Route exact path='/item/:id' element={<ItemDetailContainer />} />
                <Route exact path='/categoria/:categoriaId' element={<ItemListContainer />} />

              </Routes>

      </BrowserRouter>
      </CartContext.Provider>
      
  )
}

export default App