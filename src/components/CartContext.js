import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the context
export const CartContext = createContext();

// Context provider component
export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const isProductInCart = prevCart.some(item => item.id === product.id);

            if (isProductInCart) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const increaseQuantity = (productId) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQuantity = (productId) => {
        setCart(prevCart =>
            prevCart
                .map(item =>
                    item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
                )
                .filter(item => item.quantity > 0)
        );
    };

    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, increaseQuantity, decreaseQuantity, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}

// Custom hook to use the cart context
export function useCart() {
    return useContext(CartContext);
}
