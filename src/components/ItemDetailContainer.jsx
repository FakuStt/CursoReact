import {React, useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import {doc, getDoc, getFirestore} from 'firebase/firestore'
import Loader from './Loader'

const ItemDetailContainer = () => {

  const { id } = useParams()
  const [item, setItem] = useState([]) //null
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const db = getFirestore();

    const oneItem = doc(db, "macetas", `${id}`);
    getDoc(oneItem).then((snapshot) => {
        if (snapshot.exists()) {
            const doc = snapshot.data()
            setItem(doc)
            setLoading(false)
        }
    })
}, [])



        if (loading === true) {
            return <Loader />
         } else { 
            return (
                <div>
                    {item && <ItemDetail item={item} />}
                </div>
            )
         }


    
        }


export default ItemDetailContainer