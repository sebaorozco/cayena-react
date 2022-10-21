import { Button, Modal, Table } from 'react-bootstrap';


const ModalCart = ({show, handleClose}) => {
    
    
    
    return (
            <Modal show={show} onHide={handleClose} scrollable={true} size={'lg'}>
                <Modal.Header closeButton>
                    <Modal.Title>Carrito de Compras</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table striped>
                        <thead>
                            <tr className="text-primary table__header">
                                <th>#id</th>
                                <th>Productos</th>
                                <th>Descripción</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Aqui inserto los productos del Carrito  */}
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <div className="justify-content-center table__leyendaVacio" id="leyenda-carrito-vacio">
                        <p><b> Su carrito está vacío. </b></p> <img className="cart"  src="images/Icon/empty-cart.png" alt='' />
                    </div>
                </Modal.Footer>
                <Modal.Footer>
                    <div className="table__precioTotal">Precio total: $<span id="precioTotal">0</span></div>
                </Modal.Footer>
                <Modal.Footer>
                    <div className="d-flex justify-content-left">
                        <Button id="vaciarCarrito" variant="danger">Vaciar Carrito</Button>
                    </div>
                    <Button variant="secondary" size="lg" as='Link'>Seguir comprando</Button>
                    <Button variant="primary" size="lg">Finalizar compra</Button>
                </Modal.Footer>
            </Modal>
    );
}

export default ModalCart;