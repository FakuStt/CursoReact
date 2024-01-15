import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Cart from './components/Cart'
import ItemDetailContainer from './components/ItemDetailContainer'
import CartProvider from './context/CartContext'




const App = () => {

  

  return (

    <CartProvider>
      <BrowserRouter>

          
          
        
              < NavBar />

              <Routes>

                <Route exact path='/' element={<ItemListContainer />} />
                <Route exact path='/carrito' element={<Cart />} />
                <Route exact path='/item/:id' element={<ItemDetailContainer />} />
                <Route exact path='/categoria/:categoriaId' element={<ItemListContainer />} />

              </Routes>

      </BrowserRouter>
      </CartProvider>
      
  )
}

export default App