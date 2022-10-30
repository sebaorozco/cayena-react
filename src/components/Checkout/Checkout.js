import { Container } from "react-bootstrap";
import './Checkout.css'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useContext, useState } from "react";
import { addDoc, collection, documentId, getDocs, getFirestore, query, Timestamp, where, writeBatch } from "firebase/firestore";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

const Checkout = () => {

  const { totalPrice, carrito, clearCart } = useContext(CartContext);

  const [buyer, setbuyer] = useState({});
  const [id, setId] = useState();
  const [semaforo, setSemaforo] = useState(false);
  const [loading, setLoading] = useState(true);
  const [itemsToUpdate, setItemsToUpdate] = useState([])

  const changeHandler = (ev) => {
    setbuyer({...buyer, [ev.target.name]: ev.target.value})
  };

  const date = Timestamp.fromDate(new Date());
  const newOrder = {
    date,
    buyer,
    items: carrito.map(product => ({id: product.id, title: product.name, description: product.description, price: product.price, quantity: product.quantity})),
    total: totalPrice
  }
  
  const submitHandler = (ev) => {
    ev.preventDefault();
    setSemaforo(true);
    const database = getFirestore();
    const ordersCollection = collection(database, 'orders');
    addDoc(ordersCollection, newOrder)
    .then((snapshot) => {
      setId(snapshot.id);
      updateProducts();
      clearCart();
    })
    .finally(() => {
      setLoading(false);
    });
  };

   //***** Actualizo la BD de productos ****//
  
  const updateProducts = () => {
    const itemsID = carrito.map((el) => el.id);
    console.log(itemsID)
    const db = getFirestore();
    const itemCollectionRef = collection(db, "products"); // Hago referencia a mi colección de productos
    const q = query(itemCollectionRef, where(documentId(), "in", itemsID))
    getDocs(q)
      .then((snapshot) => {
        const getItems = snapshot.docs.map(el => {
          return {id: el.id, ...el.data()}
        });
        setItemsToUpdate(getItems);
      })
    const batch = writeBatch(db); 
    itemsToUpdate.forEach((result) => {
      batch.update(result, {
        stock: result.data().stock - carrito.find((item) => item.id === result.id).quantity,
      })
    })
    batch.commit();
  }  


    return (
      <div>
        { !semaforo ?  
            (
              <Container className="checkout__title col-lg-8">
                <h1> Formulario de compra</h1>
                <Form onSubmit={submitHandler}>
                  <Row className="mb-3">
                      <Form.Group className="form__text">
                          <Form.Label htmlFor="name">Nombre y Apellido</Form.Label>
                          <Form.Control size="lg" type="text" placeholder="Ingrese nombre" required
                            name="name" 
                            id="name" 
                            value={buyer.name || ''}
                            onChange={changeHandler} />
                      </Form.Group>
                  </Row>
                  <Row className="mb-3">
                      <Form.Group className="mb-3 form__text">
                          <Form.Label htmlFor="email">Email</Form.Label>
                          <Form.Control size="lg" type="email" placeholder="Ingrese su correo" required
                            name="email"
                            id="email"
                            value={buyer.email || ''} 
                            onChange={changeHandler} />
                      </Form.Group>
                  </Row>
                  <Row className="mb-3">
                      <Form.Group className="form__text">
                          <Form.Label htmlFor="email2">Repetir email</Form.Label>
                          <Form.Control size="lg" type="text" placeholder="Ingrese su correo nuevamente" required
                            name="email2" 
                            id="email2" 
                            value={buyer.email2 || ''}
                            onChange={changeHandler} />
                      </Form.Group>
                  </Row>
                  <Row className="mb-3">
                      <Form.Group className="mb-3 form__text">
                          <Form.Label htmlFor="phone">Nro. de Teléfono</Form.Label>
                          <Form.Control size="lg" type="number" placeholder="Ingrese su número de celular sin 0 ni 15" required
                          name="phone"
                          id="phone"
                          value={buyer.phone || ''} 
                          onChange={changeHandler} />
                      </Form.Group>
                      <Form.Group as={Col} className="form__text">
                          <Form.Label htmlFor="address">Domicilio</Form.Label>
                          <Form.Control size="lg" type="text" placeholder="Ingrese su dirección" required
                          name="address"
                          id="address"
                          value={buyer.address || ''}
                          onChange={changeHandler} />
                      </Form.Group>
                  </Row>
                  {buyer.email !== undefined && buyer.email === buyer.email2 ? (
                    <Row>
                      <Col>
                        <Button variant="outline-dark" className="boton__form1" type="submit">
                            Generar orden
                        </Button>
                      </Col>
                  </Row>
                  ):(<></>)}
                </Form>
              </Container>
            ): loading ? <Loader /> : (
              <div className="compra__text">
                <h2>Gracias por su compra! Hemos registrado la misma con el siguiente número de id:</h2>
                <h3> {id} </h3>
                <div>
                  <Button className='boton__form4' as={Link} to={'/'} variant="outline-dark" size="lg">Seguir Comprando</Button>
                </div>
                <div>
                  <Button className='boton__form4' as={Link} to={`/checkoutorder/${id}`} variant="outline-dark" size="lg" id={id}>
                    Imprimir comprobante de orden
                  </Button>
                </div>
              </div>
            )}
      </div>
    )
}

export default Checkout;