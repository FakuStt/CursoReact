import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemListContainer = () => {
    const [texto, setTexto] = useState("Bienvenido a nuestra pagina!")
  return (
    <>
        <h1> {texto} </h1>
        <Button variant="secondary" size="lg" onClick = {() => setTexto("Bienvenida a nuestra pagina!")}>Cambiar a genero Femenino</Button>{` `}
        <Button variant="secondary" size="lg" onClick = {() => setTexto("Bienvenido a nuestra pagina!")}>Cambiar a genero Masculino</Button>{` `}
        <Button variant="secondary" size="lg" onClick = {() => setTexto("Bienvenide a nuestra pagina!")}>Cambiar a genero Inclusivo</Button>{` `}


    </>

  )
}

export default ItemListContainer