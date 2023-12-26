import React from 'react'
import Item from './Item'


const ItemList = ( {macetas} ) => {

  return (
        <div>
        
            {macetas.length > 0 && macetas.map((mac) => {
              
              return (

                <Item 
                      img = {mac.img}
                      categoria = {mac.categoria}
                      key = {mac.id}
                      titulo = {mac.titulo}
                      descripcion = {mac.descripcion}
                      precio = {mac.precio}
                      id = {mac.id}
                      maceta = {mac}
                      />
              )
            })
            }

    </div>
  )
}
export default ItemList