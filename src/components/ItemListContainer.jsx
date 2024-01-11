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
              setTimeout (() => {
                setMacetas(res.filter((maceta) => maceta.categoria === categoriaId))
                setLoading(false)
              }, 0)
            }else {
              setTimeout (() => {
                setMacetas(res)
                setLoading(false)
              },1200)
            }   
         
          })
    }, [categoriaId]) 


    if (loading) {
      <Loader />
    } else {
      return (

        <div>
  
            <ItemList macetas={macetas} />
  
        </div>
      )
   }
    
    
}


export default ItemListContainer