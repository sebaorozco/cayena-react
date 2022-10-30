import React, { useEffect, useState } from "react";

const CartContext = React.createContext([]);

const CartProvider = ({children}) => {

    /* aqui primero controlo si hay algo o no en el localstorage para inicializar mi carrito en su estado []*/
	const [carrito, setCarrito] = useState(() => {
		return (
            JSON.parse(localStorage.getItem(`carrito`)) || []
        );
	})

	useEffect(() => {
		localStorage.setItem("carrito", JSON.stringify(carrito))
	}, [carrito])

    //****************/ Vacia el carrito /****************//
    
    const clearCart = () => setCarrito([]);
    
    
    //****************/ Controlo si el item a ser agregado esta en el carrito /****************//
    const isInCart = (id) => carrito.some((item) => item.id === (id));
    
    //****************/ Agrega items al carrito /****************//
    const addItem = (product, quantity) => {

        if(isInCart(product.id)){
            const updateProduct = carrito.map(item => {
                return item.id === product.id ? {...item, quantity: item.quantity + quantity} : item
            }); 
            setCarrito(updateProduct);
        } else {
            const newItem = {...product, quantity};
            setCarrito([...carrito, newItem]);
        }
    }
    
    //****************/ Elimina un item del carrito /****************//
    const removeItem = (id) => setCarrito(carrito.filter(product => product.id !== id));

    
    //****************/ Calcula el precio total del carrito /****************//
    
    const totalPrice = carrito.reduce((acc,el) => acc + (el.price * el.quantity), 0);

    //****************/ Calcula el total de productos del carrito /****************//
    
    const totalProducts = carrito.reduce((acc,actual) => acc + actual.quantity, 0);

    return (
        <CartContext.Provider value={{addItem, removeItem, clearCart, carrito, totalPrice, totalProducts}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider};