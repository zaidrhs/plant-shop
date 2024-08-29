import React, { useContext, useEffect } from 'react';
import "./assets/style/bootstrap.css";
import './assets/style/card.css';
import { CartContext, useCart } from './CartContext'; 

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const cart=useContext(CartContext)
    const handleAddToCart = () => {
        console.log('Adding to cart:', product); // Check the product object
        addToCart(product);
    };
    useEffect(() => {
        console.log('Cart state updated:', cart);
    }, [cart]);
    return (
        <div className="card col-lg-3 col-md-5 col-sm-11 m-2">
            <img className="card-img h-60" src={product.image} alt={product.title} />
            <div className="card-body w-50 h-50">
                <h4 className="card-title">{product.title.slice(0, 30)}</h4>
                <p className="card-text">${product.price}</p>
                <p className="card-text">{product.description.slice(0, 60)}...</p>
                <button 
                    className="bnt-green btn btn-outline-success" 
                    onClick={handleAddToCart}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
