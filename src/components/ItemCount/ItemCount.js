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

    useEffect(() => {
        setCount(parseInt(initial));
    },[initial])

    return (
        <>
            <ButtonGroup className="button__group" size="sm">
                <Button variant="danger" disabled={count <= 1} onClick={minusClick}>-</Button>
                <Button className="input__contador" variant="light">{count}</Button>
                <Button variant="success" disabled={count >= stock} onClick={plusClick}>+</Button>
            </ButtonGroup>
            <Button variant="outline-dark" className="boton__carrito" disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</Button>
        </>
    )
}

export default ItemCount;