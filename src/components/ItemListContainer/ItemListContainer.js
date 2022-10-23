import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import Loader from '../Loader/Loader';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    

    const {categoryId} = useParams();

    useEffect(() => {
        // Traigo el servicio de firestore
        const db = getFirestore();
        const itemCollection = collection(db, "products");
        // Filtro por categoria 
        if (categoryId) {
            const queryFilter = query(itemCollection, where('category', '==', categoryId));
            getDocs(queryFilter).then((snapshot) => {
                const getFilteredProducts = snapshot.docs.map(el => {
                    return {id: el.id, ...el.data()}
                });
                setProducts(getFilteredProducts);
            })
            .finally(() => setLoading(false));   
        } else {
            getDocs(itemCollection).then((snapshot) => {
                const getProducts = snapshot.docs.map(el => {
                    return {id: el.id, ...el.data()}
                });
                setProducts(getProducts);
            })
            .finally(() => setLoading(false));
        }
    }, [categoryId]);

    return (
        <>
            <h1 className="titulo">{greeting}</h1>
            {loading ? <Loader /> : <ItemList products={products}/>}
        </>
    )
}

export default ItemListContainer;