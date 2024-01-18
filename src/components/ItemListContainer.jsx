import { React, useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore } from "firebase/firestore"
import Loader from './Loader'

const ItemListContainer = () => {

  const [loading, setLoading] = useState(true)

  const [macetas, setMacetas] = useState([])
  
  const {categoriaId} = useParams()



useEffect(() => {

  const db = getFirestore()

  const itemsCollection = collection(db, "macetas")

  getDocs(itemsCollection).then((snapshot) => {
    const docs = snapshot.docs.map((doc) => doc.data())
    setMacetas(docs)
    setLoading(false)
  })

}, [])



const filtrado = macetas.filter((maceta) => maceta.categoria === categoriaId);


    if (loading === true) {
      return <Loader />
    } else {
      return (

    <>
  
      {categoriaId ? <ItemList macetas={filtrado} /> : <ItemList macetas={macetas} />}

    </>

      )
   }
  }

export default ItemListContainer