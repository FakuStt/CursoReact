import React from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

  const categoriaId = useParams()
  console.log (categoriaId)

  const macetas = [
    {id: 1, img: "../imagenes/maceta artesanal.jpg", categoria: "chico",  titulo: "Maceta 1", descripcion: "Descripcion de Maceta 1" , precio: 250},
    {id: 2, img: "../imagenes/maceta artesanal.jpg", categoria: "chico",  titulo: "Maceta 2", descripcion: "Descripcion de Maceta 2" , precio: 250},
    {id: 3, img: "../imagenes/maceta artesanal.jpg", categoria: "chico",  titulo: "Maceta 3", descripcion: "Descripcion de Maceta 3" , precio: 350},
    {id: 4, img: "../imagenes/maceta artesanal.jpg", categoria: "mediano",  titulo: "Maceta 4", descripcion: "Descripcion de Maceta 4" , precio: 350},
    {id: 5, img: "../imagenes/maceta artesanal.jpg", categoria: "mediano",  titulo: "Maceta 5", descripcion: "Descripcion de Maceta 5" , precio: 450},
    {id: 6, img: "../imagenes/maceta artesanal.jpg", categoria: "mediano",  titulo: "Maceta 6", descripcion: "Descripcion de Maceta 6" , precio: 450},
    {id: 7, img: "../imagenes/maceta artesanal.jpg", categoria: "grande",  titulo: "Maceta 7", descripcion: "Descripcion de Maceta 7" , precio: 550},
    {id: 8, img: "../imagenes/maceta artesanal.jpg", categoria: "grande",  titulo: "Maceta 8", descripcion: "Descripcion de Maceta 8" , precio: 550}
  ]

  const mostrarMacetas = new Promise ((resolve, reject) => {

    if (macetas.length > 0) {
      setTimeout(() => {
        resolve(macetas)
      }, 3000)
    } else {
      reject ("No hay macetas disponibles")
    }
  })

  mostrarMacetas
  .then ((resultado) => {
    console.log(resultado)
  })
  .catch ((error) => {
    console.log (error)
  })

  const macetasFiltradas = macetas.filter((maceta) => maceta.categoria == categoriaId)
  console.log(macetasFiltradas)

  

        if (macetasFiltradas.length === 0) {
          return (
            <div>
              <ItemList macetas={macetas} />
            </div>
          )
        } else {
          return (
            <ItemList macetas={macetasFiltradas} /> 
          )
        }
        
      }


export default ItemListContainer