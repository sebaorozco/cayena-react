import ItemDetail from "../ItemDetail/ItemDetail"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../utils/productos";


const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});

    const {itemId} = useParams();

    useEffect(() => {
        getProduct(itemId)
            .then ((data) => setProduct(data))
            .catch((error) => console.log("Hay un error en la carga del Producto"));
    },[itemId])

    return (
        <ItemDetail product={product} />
    );
}

export default ItemDetailContainer;