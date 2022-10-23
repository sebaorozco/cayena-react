import cart from "../../images/Icon/shopping-cart1.png";
import { Link } from 'react-router-dom';
import "./CartWidget.css"
import ModalCart from "../ModalCart/ModalCart";
import { useState } from 'react';



const ModalCartWidget = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Link onClick={handleShow}>
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
            <ModalCart show={show} handleClose={handleClose} />
        </>
        
    )
}

export default ModalCartWidget;