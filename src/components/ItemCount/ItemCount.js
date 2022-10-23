import { useEffect, useState } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import "./ItemCount.css"

const ItemCount = ({ initial, stock, onAdd }) => {

    const [count, setCount] = useState(parseInt(initial));
    
    const minusClick = () => {
        setCount(count - 1);
    }
    
    const plusClick = () => {
        setCount(count + 1); 
    }   

    const buttonClickHandler = () => {
        onAdd(count);
    }

    useEffect(() => {
        setCount(parseInt(initial));
    },[initial])

    return (
        <>
            <ButtonGroup className="button__group" size="lg">
                <Button variant="outline-dark" size="lg" disabled={count <= 1} onClick={minusClick} className="quantity__left">-</Button>
                <Button className="input__contador" variant="light" size="lg">{count}</Button>
                <Button variant="outline-dark" size="lg" disabled={count >= stock} onClick={plusClick} className="quantity__right">+</Button>
            </ButtonGroup>
            <Button variant="outline-dark" className="boton__carrito" disabled={stock <= 0} onClick={buttonClickHandler}>Agregar al carrito</Button>
        </>
    )
}

export default ItemCount;