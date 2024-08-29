import React, { useEffect } from 'react';
import { useCart } from './CartContext';
import './assets/style/cart.css'; // Ensure the CSS file is imported

const Cart = ({ isVisible }) => {
    const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

    useEffect(() => {
        console.log('Cart updated:', cart);
    }, [cart]);

    if (!isVisible) {
        return null; // Don't render if not visible
    }

    return (
        <div className="cart-container show">
            <h2>Your Cart</h2>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Total Price</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.length === 0 ? (
                        <tr>
                            <td colSpan="4">Your cart is empty.</td>
                        </tr>
                    ) : (
                        cart.map(item => (
                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>${(item.price * item.quantity).toFixed(2)}</td>
                                <td>{item.quantity}</td>
                                <td>
                                    <button className="increase-btn" onClick={() => increaseQuantity(item.id)}>+</button>
                                    <button className="decrease-btn" onClick={() => decreaseQuantity(item.id)}>-</button>
                                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Cart;
