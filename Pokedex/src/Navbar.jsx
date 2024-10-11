import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation

export default function Navbar({ searchTerm, setSearchTerm }) {
    return (
        <nav>
            <h1>Pokedex</h1>
            <input 
                type="text" 
                placeholder="Search Pokémon..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search Pokémon" // Accessibility improvement
                style={{
                    padding: '5px',
                    height: '50%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '2em',
                    width: '30%',
                    marginTop: '1em',
                    backgroundImage: 'url(https://cdn-icons-png.flaticon.com/512/189/189012.png)', 
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 10px center',
                    backgroundSize: '20px',
                }}
            />
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/kanto">Kanto</NavLink></li>
                <li><NavLink to="/johto">Johto</NavLink></li>
                <li><NavLink to="/hoenn">Hoenn</NavLink></li>
                <li><NavLink to="/sinnoh">Sinnoh</NavLink></li>
                <li><NavLink to="/unova">Unova</NavLink></li>
            </ul>
        </nav>
    );
}

// Adding PropTypes for validation
Navbar.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    setSearchTerm: PropTypes.func.isRequired,
};
