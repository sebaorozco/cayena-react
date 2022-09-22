import cart from "../../images/Icon/shopping-cart1.png"

const CartWidget = () => {
    return (
        <div>
            <img 
                src={cart} 
                alt="Icono agregar al carrito" 
                width="28"
                height="28"
                className="cart"
            />
            <span 
                id="total-carrito" 
                className="position-absolute top-09 start-90 translate-middle badge bg-dark text-white ms-1 rounded-pill">0
            </span>
        </div>
    )
}

export default CartWidget;