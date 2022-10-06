import ItemDetail from "../ItemDetail/ItemDetail"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../utils/productos";
//import ItemCount from '../ItemCount/ItemCount';


const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});

    const {itemId} = useParams();

    useEffect(() => {
        getProduct(itemId)
            .then ((data) => setProduct(data))
            .catch((error) => console.log("Hay un error en la carga del Producto"));
    },[itemId])

    // const onAdd = (quantity) => {
    //     alert(`Usted ha seleccionado ${quantity} unidades de este producto`)
    // }

    return (
        <ItemDetail product={product} />
       // {{<ItemCount initial={1} stock={5} onAdd={onAdd} /> }}
    );
}

export default ItemDetailContainer;