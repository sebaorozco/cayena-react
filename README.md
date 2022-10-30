![Cayena](https://github.com/sebaorozco/cayena-react/blob/master/src/images/Logo/logoCayena.jpg)

# - Proyecto E-commerce Dietética Cayena - 

Este proyecto tiene como objetivo desarrollar un e-commerce para la empresa **"Cayena - Almacén Orgánico & Natural"**.

Todo el proyecto fue desarrollado para el cursado de la carrera de React JS de plataforma [Coderhouse](https://plataforma.coderhouse.com/cursos)

## Herramientas y librerías

- El proyecto fue desarrollado utilizando la herramienta create-react-app.
- Bootstrap y React bootstrap.
- React router dom.
- Hace uso de la BDD Firestore para almacenar los productos y crear las órdenes de compra diarias, almacenandolas en una colección "orders" con su id automático. Los productos corresponden a una colección de nombre "products".

## Estado del Proyecto

Actualmente el proyecto se encuentra en estado de avance, ya que aún restan elaborar otros componentes como el footer, contacto y consultorio (ya que no sólo sera una tienda donde se vendan los productos del almacén sino que también se darán turnos para el consultorio nutricional).

Para aprobar el proyecto se realizó lo siguiente:

- La tienda lista los productos almacenados en Firestore. Estos items pueden ser agregados al carrito de a uno o bien ingresando al botón de "detalle", se puede incrementar la cantidad requerida de ese producto, siempre que no supere el stock del mismo ya que el botón se deshabilita.
- Una vez que se agregó el primer producto al carrito, se muestra junto al **Cartwidget**, la cantidad agregada de items que tiene el carrito. Se creó un contexto para el carrito, de manera de tener las funcionalidades a mano para los demás componentes.
- El cliente desde la vista del carrito, si el mismo se encuentra sin productos se observa un mensaje de *"carrito vacío"* junto a un botón para volver al sector de Compras. En caso contrario de que el carrito posea items, se podrá visualizar un listado de la compra detallada, con la cantidad de cada producto agregado al carrito como así también de su Monto Total a pagar. Desde esta tabla el cliente podrá eliminar un producto si así lo desea o bien "vaciar" la totalidad del carrito.
- Además cuenta con un botón para *"Volver a comprar"* si es que se olvidó de comprar algún producto o bien de *"Finalizar la Compra"*.
- Al finalizar la compra, la siguiente ventana muestra un formulario de compra donde el cliente deberá ingresar datos mínimos, para poder habilitar un botón de **"Generar orden de compra"**. Al hacer clic en el mismo, se genera una orden de compra, guardando los datos del cliente, la fecha de compra y los productos del carrito en una colección "orders" en Firestore. La siguiente ventana mostrará al cliente el ID de la compra mas un botón para volver al Home o bien si lo desea podrá imprimir un Comprobante de la compra realizada. 
- El comprobante muestra los datos de la orden y el total a pagar por el cliente. Aqui se adecuará el proyecto para permitir al cliente imprimir o descargar el comprobante.
- El stock es actualizado una vez realizada la compra por el cliente.-

