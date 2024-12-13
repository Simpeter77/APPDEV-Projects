import { NavLink } from "react-router-dom";
import './Nav.css';

export default function Navigation() {
    return (
        <nav>
            <h1>KeyStaxx</h1>
            <ul>
                <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
                <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink></li>
                <li><NavLink to="/showcase" className={({ isActive }) => isActive ? "active" : ""}>Showcase</NavLink></li>
                <li><NavLink to="/products" className={({ isActive }) => isActive ? "active" : ""}>Products</NavLink></li>
                <li><NavLink to="/artisan" className={({ isActive }) => isActive ? "active" : ""}>Artisan</NavLink></li>
                <li><NavLink to="/profile" className={({ isActive }) => isActive ? "active" : ""}>Company</NavLink></li>
                <li><NavLink to="/developer" className={({ isActive }) => isActive ? "active" : ""}>Developer</NavLink></li>
                <li><NavLink to="/cart" className={({ isActive }) => isActive ? "active" : ""}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                        <path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z"/>
                    </svg>
                </NavLink></li>
            </ul>
        </nav>
    );
}
