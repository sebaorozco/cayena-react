import { useContext } from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import "./Item.css"

const Item = ({prod}) => {
  const { addItem } = useContext(CartContext);

  return (  
    <Card className='prod__card' border='success'>
      <Card.Img className='prod__foto' variant="top" src={prod.img} />
      <Card.Body>
        <Card.Title className='prod__descripcion'>{prod.name}</Card.Title>
      </Card.Body>
      <ListGroup>
        <ListGroupItem className='prod__descripcion'>{prod.brand}</ListGroupItem>
        <ListGroupItem className='prod__precio'>${prod.price}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Button className='boton__carrito__card' variant="outline-dark" disabled={prod.stock <= 0} onClick={()=>addItem(prod,1)}>Agregar al Carrito</Button>
        <Button className='boton__carrito__card' as={Link} to={`/item/${prod.id}`} variant="outline-dark">Ver detalle</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;