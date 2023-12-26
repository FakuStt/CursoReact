import { React, useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import data from '../data/data.json'

const ItemListContainer = () => {


  const [macetas, setMacetas] = useState([])
  

  const {categoriaId} = useParams()


  const pedirMacetas = () => {
    return new Promise ((resolve, reject) => {
        
      setTimeout(() => {
            resolve(data);
            console.log(macetas)
       }, 0)
    })
}


    useEffect(() => {
      pedirMacetas()
          .then((res) => {
              if (categoriaId){
                  setMacetas(res.filter((maceta) => maceta.categoria === categoriaId))
              }else {
                  setMacetas(res)
              }   
          })
    }, [categoriaId]) //o categoriaId dentro de los parentesis rectos

  
    return (

      <div>

          <ItemList macetas={macetas} />

      </div>


    )
}


export default ItemListContainer