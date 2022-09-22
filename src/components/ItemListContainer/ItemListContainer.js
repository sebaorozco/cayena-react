import './ItemListContainer.css';

const ItemListContainer = ({greeting}) => {
    return (
        <>
            <h1>Hola!</h1>
            <h3 className="titulo">{greeting}</h3>
        </>
    )
}

export default ItemListContainer;