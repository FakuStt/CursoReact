import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemList from './ItemList'

const ItemListContainer = () => {

  const macetas = [
    {img: "../imagenes/maceta artesanal.jpg", id: 1, titulo: "Maceta 1", descripcion: "Descripcion de Maceta 1" , precio: 250},
    {img: "../imagenes/maceta artesanal.jpg", id: 2, titulo: "Maceta 2", descripcion: "Descripcion de Maceta 2" , precio: 250},
    {img: "../imagenes/maceta artesanal.jpg", id: 3, titulo: "Maceta 3", descripcion: "Descripcion de Maceta 3" , precio: 350},
    {img: "../imagenes/maceta artesanal.jpg", id: 4, titulo: "Maceta 4", descripcion: "Descripcion de Maceta 4" , precio: 350},
    {img: "../imagenes/maceta artesanal.jpg", id: 5, titulo: "Maceta 5", descripcion: "Descripcion de Maceta 5" , precio: 450},
    {img: "../imagenes/maceta artesanal.jpg", id: 6, titulo: "Maceta 6", descripcion: "Descripcion de Maceta 6" , precio: 450},
    {img: "../imagenes/maceta artesanal.jpg", id: 7, titulo: "Maceta 7", descripcion: "Descripcion de Maceta 7" , precio: 550},
    {img: "../imagenes/maceta artesanal.jpg", id: 8, titulo: "Maceta 8", descripcion: "Descripcion de Maceta 8" , precio: 550}
  ]

  return (
    <div>
      
      <ItemList macetas={macetas} />

    </div>

  )
}

export default ItemListContainer