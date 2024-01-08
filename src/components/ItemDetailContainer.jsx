import {React, useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import data from '../data/data.json'

const ItemDetailContainer = () => {

  const { id } = useParams()
  const [item, setItem] = useState(null)

  const pedirMacetaPorId = (id) => {
    return new Promise ((resolve, reject) => {
        const item = data.find((macetaIndividual) => macetaIndividual.id === id)
        
        if (item) {
            resolve(item)
        } else {
            reject({
                Error: 'El item que estas solicitando no esta disponible'
            })
        }
    })
}


        useEffect(() => {
            pedirMacetaPorId(Number(id))
                .then((res) => {
                    setItem(res)
                })
        }, [id])


        return (
            <div>
                {item && <ItemDetail item={item} />}
            </div>
        )

        }


export default ItemDetailContainer