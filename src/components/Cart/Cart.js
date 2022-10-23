import { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import { CartContext } from "../../contexts/CartContext";
import emptycart from "../../images/Icon/empty-cart.png";
import './Cart.css'
import CartTable from "../CartTable/CartTable";
import { Link } from "react-router-dom";

const Cart = () => {

    const { carrito } = useContext(CartContext);
   
    return (
        <Container>
            <div className="cart__title">
                <h1>Carrito de Compras</h1>
            </div>
            <div>
                {
                    carrito.length === 0 ? (
                        <> 
                            <div>
                                <div className="col d-flex justify-content-center table__leyendaVacio">
                                    <p><b> Su carrito está vacío. </b></p> <img className="cart__image"  src={emptycart} alt="" />
                                </div>
                            </div>
                            <div className= "col d-flex justify-content-center">
                                <Button className='boton__carrito' as={Link} to={'/'} variant="success" size="lg">Ir a Compras</Button>
                            </div>
                        </>    
                    ) : <CartTable />
                }
            </div>    
        </Container>  
    );
}

export default Cart;