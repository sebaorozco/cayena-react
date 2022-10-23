import { useContext } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import trashicon from "../../images/Icon/delete.png";
import './CartTable.css'

const CartTable = () => {
  
  const { carrito, totalPrice, clearCart, removeItem } = useContext(CartContext);
  return (
    <Container>
      <Row>
        <Table striped>
          <thead>
            <tr className="table__header">
              <th>#id</th>
              <th>Productos</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>¿Eliminar?</th>
            </tr>
          </thead>
          <tbody className='body__styles'>
          {/* Aqui inserto los productos del Carrito  */}
          {carrito.map((item)=>(
            <tr key={item.id}>
                <td>#</td>
                <td>{<img
                        alt=""
                        src={item.img}
                        className="product__image"
                    />}</td>
                <td>{item.description}</td>
                <td>${item.price}</td>
                <td>{item.quantity}</td>
                <td>{<img
                        alt=""
                        src={trashicon}
                        className="trash"
                        onClick={() => removeItem(item.id)}
                    />}</td>
            </tr> 
            ))}
          </tbody>
        </Table>
      </Row>
      <br></br>
      <Row>
        <div>
            <div className="table__precioTotal">Precio total: $<span id="precioTotal">{totalPrice}</span></div>
        </div>
      </Row>
      <Row>
        <Col>
          <Button className="boton__carrito" variant="danger" size='lg' onClick={clearCart}>Vaciar Carrito</Button>
        </Col>
        <Col className='two__buttons'>
          <Button as={Link} to={'/'} className="boton__carrito" variant="secondary" size='lg'>Seguir comprando</Button>
          <Button as={Link} to={'/checkout'} className="boton__carrito" variant="primary" size='lg'>Finalizar compra</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default CartTable;