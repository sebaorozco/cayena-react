import { Container, Row, Col, Button } from 'react-bootstrap';
import './ItemDetail.css'
import { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';

const ItemDetail = ({product}) => {

    const [showItemCount, setShowItemCount] = useState(true);
    
    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) => {
        setShowItemCount(false)
        addItem(product, quantity)
    }

    return (
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <div className="item__pic">
                            <img src={product.img} className="img-fluid" alt="" />
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <div className="product__details__text">
                            <h3>{product.name}</h3>
                            <div className="product__details__price">${product.price}</div>
                            <p> {product.description}</p>
                            <div>
                                {
                                    showItemCount ? <ItemCount initial={1} stock={10} onAdd={onAdd} /> : (
                                        <>
                                            <Button className='boton__carrito' as={Link} to={'/'} variant="outline-dark" size="lg">Seguir Comprando</Button>
                                            <Button className='boton__carrito' as={Link} to={'/cart'} variant="outline-dark" >Ver Carrito</Button>
                                        </>
                                    )                                  
                                } 
                            </div>
                    </div>
                        </Col>
                </Row>
            </Container>
    );
}

export default ItemDetail;