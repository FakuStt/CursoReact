import React from 'react'
import Item from './Item'
const ItemList = ({macetasResultado}) => {
  return (
        <div>
        {
            macetasResultado.map((m) => {
                return (
                      <Item 
                      img = {m.img}
                      categoria = {m.categoria}
                      key = {m.id}
                      titulo = {m.titulo}
                      descripcion = {m.descripcion}
                      precio = {m.precio}
                      id = {m.id}
                      />
                )
            })
        }
    </div>
  )
}
export default ItemList