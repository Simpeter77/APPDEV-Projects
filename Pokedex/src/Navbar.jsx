import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <h1>Pokedex</h1>
            <ul>
                <li id="navigation"><Link to="/">Home</Link></li>
                <li id="navigation"><Link to="/Kanto">Kanto</Link></li>
                <li id="navigation"><Link to="/Johto">Johto</Link></li>
                <li id="navigation"><Link to="/Hoenn">Hoenn</Link></li>
                <li id="navigation"><Link to="/Sinnoh">Sinnoh</Link></li>
                <li id="navigation"><Link to="/Unova">Unova</Link></li>

            </ul>
        </nav>
    );
}