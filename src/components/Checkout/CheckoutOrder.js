import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import logoCayena from '../../images/Logo/LogoCayena-small.png'
import './CheckoutOrder.css'

const defaultOrder = {
    buyer: {
        address: "",
        email:"",
        email2:"",
        name:"",
        phone:0
    },
    date: "",
    items: []
}


const CheckoutOrder = () => {

    const {orderId} = useParams();
    const [order, setOrder] = useState(defaultOrder);

    useEffect(() => {
        const db = getFirestore();                      // Traigo el servicio de firestore
        const orderRef = doc(db, "orders", orderId)
        getDoc(orderRef).then(snapshot => {         
            if (snapshot.exists()) {                    //Consulto en la base de datos si existe ese documento
                setOrder(snapshot.data())               // lo almaceno en el estado
            }
        })
    }, [orderId])
   
    //***** Método para obtener la fecha desde el formato Timestamp: ****//
    let time = {
    seconds: order.date.seconds,
    nanoseconds: order.date.nanoseconds,
    } 
    const firestoreTime = new Date(
    time.seconds * 1000 + time.nanoseconds / 1000000
    );
    const orderDate = firestoreTime.toDateString();
    const atTime = firestoreTime.toLocaleTimeString();
      
    const cartItems = order.items;

    return (
        <>
            <Container className='orden__compra'>
                <Row>
                    <Col>
                        <div>
                            <img alt="logo" src={logoCayena} height="120px;" />
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <h1>Cayena Almacén Orgánico & Natural</h1>
                            <h3>Jujuy esq. Leandro Alem - Local 2</h3>
                            <h3>Santiago del Estero - Argentina</h3>
                        </div>
                    </Col>
                    <Col>
                        <div className='form__header3'>
                            <p>Fecha: {orderDate}, {atTime} </p>
                            <p>Orden de compra #: {orderId} </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className="datos__cliente">
                        <div>
                            <h4>Datos del cliente</h4>
                            <p>Nombre: {order.buyer.name}</p>
                            <p>Telefono: {order.buyer.phone}</p>
                            <p>Email: {order.buyer.email}</p>
                        </div>
                    </div>
                </Row>

                <Row className='table__title'>
                    <p>Resúmen de compra</p>
                </Row>
                <Row className='table__container'>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>#id</th>
                                <th>Producto</th>
                                <th>Descripción</th>
                                <th>Precio unitario</th>
                                <th>Cantidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item)=>(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>${item.price}</td>
                                <td>{item.quantity}</td>
                            </tr> 
                            ))}
                        </tbody>
                    </Table>
                </Row>            
                <Row>
                    <Table striped className='total__pagar'>
                        <thead>
                            <tr>
                                <th>Total a pagar: $ {order.total}</th>
                            </tr>
                        </thead>
                    </Table>
                </Row>
                <Row>
                    <p className='table__container'>Observaciones</p>
                    <div className="col-xs-offset-4 col-xs-3">
                        <p className='observaciones'></p>
                    </div>
                </Row>    
            </Container>
        </>
    );
}

export default CheckoutOrder;