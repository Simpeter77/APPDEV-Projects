import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/Kanto">Kanto</Link></li>
                <li><Link to="/Johto">Johto</Link></li>
                <li><Link to="/Hoenn">Hoenn</Link></li>
            </ul>
        </nav>
    );
}