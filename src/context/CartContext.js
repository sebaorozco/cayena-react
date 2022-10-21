import React, { useState } from "react";

const CartContext = React.createContext([]);

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    
    const getFromCart = (id) => cache.find((el) => el.id === id);

    const isInCart = (id) => cart.some((el) => el.id === id);
    
    const addItem = (obj) => {
        if(isInCart){
            console.log("Producto agregado ya");
            return;
        }
        setCart([...cart, obj]);
    }
    
    const removeItem = (id) => {
        setCart(cart.filter(product => product.id !== id));
    }
    
    const clearCart = () => setCart([]);
    
    
    return (
        <CartContext.Provider value={{getFromCart, isInCart, addItem, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider};