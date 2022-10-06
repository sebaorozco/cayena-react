import cart from "../../images/Icon/shopping-cart1.png";
import { Link } from 'react-router-dom';
import "./CartWidget.css"


const CartWidget = () => {
    return (
        <Link to ='/cart'>
            <img 
                src={cart} 
                alt="Icono carrito" 
                className="cart"
            />
            <span 
                id="total-carrito" 
                className="position-absolute top-09 start-90 translate-middle badge bg-dark text-white ms-1 rounded-pill">0
            </span>
        </Link>
    )
}

export default CartWidget;