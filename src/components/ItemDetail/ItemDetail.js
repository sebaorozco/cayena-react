import { Container, Row, Col, Button } from 'react-bootstrap';
import './ItemDetail.css'
import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import ModalCart from '../Cart/ModalCart';

const ItemDetail = ({product}) => {

    const [gotoCart, setgotoCart] = useState(false);
    
    const onAdd = (quantity) => {
        setgotoCart(true)
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
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
                            <p> Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam
                                vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet
                                quam vehicula elementum sed sit amet dui. Proin eget tortor risus.</p>
                            <div className="product__details__quantity">
                                {
                                    gotoCart ? (
                                        <>
                                            <Button className='boton__carrito' as={Link} to={'/'} variant="outline-dark">Seguir Comprando</Button>
                                            <Button className='boton__carrito' variant="outline-dark" onClick={handleShow}>Ir a Carrito de Compras</Button>
                                        </>
                                    ) : <ItemCount initial={1} stock={5} onAdd={onAdd} />                                   
                                } 
                            </div>
                    </div>
                        </Col>
                </Row>
            </Container>
            <ModalCart show={show} handleClose={handleClose} />
        </>
    );
}

export default ItemDetail;