# Curso de React - Facundo Stazione
---
## e-commerce sobre venta de macetas artesanales

__*Mi e-commerce se trata sobe ventas de macetas artesanales. Elegi este tema porque es un emprendimiento exclusivo de un familiar. Por lo tanto, durante toda la creacion de la pagina, se trabajo y se puede observar, diseños relacionado con este tema. Espero disfruten de este README.*__

[Instagram del e-commerce](https://www.instagram.com/ojalamacetas/)

---
---

### Funcionamiento de los filtrados

__*En esta pagina, podremos filtrar productos con categorias en comun, como tambien, podremos filtrar productos por su id (una categoria caracteristica de cada producto).*__

**A continuacion, se muestra un gif mostrando lo anteriormente dicho:**

![GIF para entrega](https://github.com/FakuStt/CursoReact/assets/138645047/3f77fb10-b12e-45ce-803d-36f30eff0113)

---
### ¿Que informacion muestra el filtrado de cada producto?

__Cuando se filtra por id, se obtiene informacion mas detallada del producto seleccionado. En esta informacion, tambien se incluye un contador para agregar ese item al carrito (de esto se hablara mas adelante).__

**Foto de un elemento con su informacion detallada:**

![Foto de Item](https://github.com/FakuStt/CursoReact/assets/138645047/6b28e711-dbbf-4390-bc30-6f53efd062c7)


---
### Funcionamiento del Spinner

__Tambien, mientras navegaba por la pagina, me di cuenta que las funciones y procesos que estaban por detras de los filtrados (anteriormente dichos), se demoraban en ejecutar.__

**La solucion a este problema fue poner un spinner. Este se termina de ejecutar cuando las funciones de filtrados den sus resultados. De esta manera, se logra que el usuario no abandone la pagina y no se confunda.**

__**Aqui esta su funcionamiento:**__

![GIF mostrando spinner](https://github.com/FakuStt/CursoReact/assets/138645047/56e465f5-dc5f-4cf7-92bf-9df29f11fe98)


---
### Logica del Contador

__*¿Que pasa con el contador que nos encontramos en cada item? ¿El boton agregar al carrito funciona?*__

**Este es el contador:**

![Foto del Contador](https://github.com/FakuStt/CursoReact/assets/138645047/050e7933-6cbe-4c2f-b7be-a0c1f1951060)

__En principio, el numero que acompañaba al logo del carrito estaba fijo! Pero una vez que implementamos context, logramos hacer que este numero dependiera de cuantos elementos habiamos agregado al carrito!__

__*Por ejemplo, si yo agrego dos items de "Maceta 1" por un lado y tres items de "Maceta 5" por otro, este numero cambiaria a 5.*__

---

### La logica del Carrito.


__*Aqui se muestran los productos agregados al carrito, de una forma menos detallada.*__

__*Cuando no hay ningun item agregado al carrito, se muestra un mensaje avisandole al usuario y se le ofrece, mediante un boton, ver los productos.*__

__En el caso de que hayan elementos en el carrito, se mostraran con menos informacion y con un boton para eliminar ese item (con las cantidades que contenga), del carrito.__

__*¿Que pasa si agrego dos items iguales?*__

__**Lo que sucede es que no se agregan los dos items por separado, la logica esta implementada para que detecte si son items iguales y directamente se mostraria el item una vez pero con las cantidades sumadas.**__

**Como a continuacion se muestra:**

![GIF mostrando carrito](https://github.com/FakuStt/CursoReact/assets/138645047/82a6e9be-0a3a-4d76-a232-368efe4bd52b)

__Por ultimo, se encuentran dos botones a lo ultimo del carrito. Uno de ellos es para vaciar el carrito, el cual elimina absolutamente todos los items del carrito.__

__Otro boton que se muestra es para enviar el pedido, y su funcionalidad la explicaremos a continuacion.__

---

### Funcionalidad del boton Ordenar Pedido

__**Este boton te redirecciona a un apartado.** En este, se mostrara un formulario para completar! Aqui deberas poner tu nombre y tu email. Una vez que se aprieta en ordenar pedido, los datos personales y su pedido queda guardado en la base de datos con un id unico, que se mostrara en pantalla.__

---


### Fin de la presentacion de la pagina, te esperamos por aqui!

---



