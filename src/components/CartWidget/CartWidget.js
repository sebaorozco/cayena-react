import cart from "../../images/Icon/shopping-cart1.png";
import { Link } from 'react-router-dom';
import "./CartWidget.css"
import { Badge } from "react-bootstrap";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";

const CartWidget = () => {

    const { totalProducts } = useContext(CartContext); 

    return (
            <Link to='/cart'>
                <img 
                    src={cart} 
                    alt="Icono carrito" 
                    className="cart"
                />
                <Badge className="position-absolute top-09 start-90 translate-middle pill__format" pill bg="dark">
                    {totalProducts || ""}
                </Badge> 
            </Link>  
    )
}

export default CartWidget;