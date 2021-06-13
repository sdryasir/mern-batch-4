import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <ul className="navbar-main">
                <li><Link to="/collection/everyday-value">Everyday Value</Link></li>
                <li><Link to="/collection/make-it-a-meal">Make it a meal</Link></li>
                <li><Link to="/collection/signature-box">Signature Box</Link></li>
                <li><Link to="/collection/sharing">Sharing</Link></li>
                <li><Link to="/collection/promotions">Promotions</Link></li>
                <li><Link to="/collection/snacks">Snacks</Link></li>
                <li><Link to="/collection/midnight-deals">Midnight Deals</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
