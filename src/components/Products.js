import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { CartProvider } from './CartContext'; 
import "./assets/style/card.css";

const ProductsPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/products') 
        .then((res) => res.json())
        .then((data) => {
            setProducts(data.slice(0, 30)); 
        });
    }, []);

    return (
        <CartProvider>
            <div className='cardbody'>
                <div id="mainDiv" className="row m-0">
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
        </CartProvider>
    );
};

export default ProductsPage;
