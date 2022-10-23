import ItemDetail from "../ItemDetail/ItemDetail"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";


const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});

    const {itemId} = useParams();

    useEffect(() => {
        const db = getFirestore();                              // 1 - Traigo el servicio de firestore
        const itemRef = doc(db, "products", itemId);
        getDoc(itemRef).then((snapshot) =>                      //2 - Hago la petición del dato a mi BD con una promesa
            setProduct({id: snapshot.id, ...snapshot.data()})
        );
    },[itemId])

    return (
        <ItemDetail product={product} />
    );
}

export default ItemDetailContainer;