import { React, useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import data from '../data/data.json'
import Loader from './Loader'

const ItemListContainer = () => {

  const [loading, setLoading] = useState(true)

  const [macetas, setMacetas] = useState([])
  
  const {categoriaId} = useParams()


  const pedirMacetas = () => {
    return new Promise ((resolve, reject) => {
        
      setTimeout(() => {
            resolve(data);
            setLoading(false)
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
    }, [categoriaId])

  

  /*  if (loading) {
      return 
      <Loader />
    } else {
      return (

        <div>
  
            <ItemList macetas={macetas} />
  
        </div>
  
  
      )
    }
    */


    return (

      <div>

          <ItemList macetas={macetas} />

      </div>


    ) 
}


export default ItemListContainer