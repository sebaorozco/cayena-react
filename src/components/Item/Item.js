import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Item.css"

const Item = ({prod}) => {
  return (
    
    <Card className='prod__card' border='success' style={{ width: '28rem' }}>
      <Card.Img className='prod__foto' variant="top" src={prod.img} />
      <Card.Body>
        <Card.Title className='prod__descripcion'>{prod.name}</Card.Title>
      </Card.Body>
      <ListGroup>
        <ListGroupItem className='prod__descripcion'>{prod.marca}</ListGroupItem>
        <ListGroupItem className='prod__precio'>${prod.price}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Button className='boton__carrito' variant="outline-dark">Agregar al Carrito</Button>
        <Button className='boton__carrito' as={Link} to={`/item/${prod.id}`} variant="outline-dark">Ver detalle</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;