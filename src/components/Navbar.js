import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser, faChartBar } from '@fortawesome/free-solid-svg-icons';
import '../components/assets/style/Navebar.css';
import Cart from './Cart'; // Import the Cart component

function Navbar() {
    const [isCartVisible, setCartVisible] = useState(false);

    const toggleCart = () => {
        setCartVisible(!isCartVisible);
    };

    return (
        <div className="navbar">
            <div className="left">
                <h3 className="logo">GREENMIND</h3>
                <NavLink className="bnt-link" to='/'>Home</NavLink>
                <NavLink className="bnt-link" to='/products'>Products</NavLink>
                <NavLink className="bnt-link" to='/dashboard'>Dashboard</NavLink>
            </div>
            <div className="right">
                <button className="icon-button" onClick={toggleCart}>
                    <FontAwesomeIcon icon={faCartShopping} />
                </button>
                <button className="icon-button">
                    <FontAwesomeIcon icon={faUser} />
                </button>
                <button className="icon-button">
                    <FontAwesomeIcon icon={faChartBar} flip="horizontal" />
                </button>
            </div>
            <Cart isVisible={isCartVisible} onClose={() => setCartVisible(false)} />
        </div>
    );
}

export default Navbar;
