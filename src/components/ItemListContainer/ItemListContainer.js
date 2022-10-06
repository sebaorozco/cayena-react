import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../utils/productos';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([]);

    const {categoryId} = useParams();

    useEffect(() => {
        if (categoryId) {
            getProducts()
                .then((result) => setProducts(result.filter(prod => prod.category === categoryId)))
                .catch((error) => console.log("Hay un error en la carga de Productos"));
        } else {
            getProducts()
                .then((result) => setProducts(result))
                .catch((error) => console.log("Hay un error en la carga de Productos"));
        }
    },[categoryId])

    return (
        <>
            <h1 className="titulo">{greeting}</h1>
            <ItemList products={products}/>
        </>
    )
}

export default ItemListContainer;