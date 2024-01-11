import React from 'react'
import { useEffect, useState } from 'react'
import {collection, getDocs, getfirestore} from "firebase/firestore"
//ItemListContainer

const Collection = () => {

    const {macetas, setMacetas} = useState([])

    useEffect(() => {

        const cb = getfirestore()
        const itemCollection = collection(cb, "macetas")

        getDocs(itemCollection).then()


    }, [])

  return (
    <div>Collection</div>
  )
}

export default Collection