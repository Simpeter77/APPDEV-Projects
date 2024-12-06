import { Link } from "react-router-dom";
import './Nav.css';

export default function Navigation() {
    return (
        <nav>
            <h1>KeyStaxxx</h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About Us</Link></li>
                <li><Link to='/showcase'>Showcase</Link></li>
                <li><Link to='/products'>Products</Link></li>
                <li><Link to='/artisan'>Artisan</Link></li>
                <li><Link to='/reviews'>Reviews</Link></li>
                <li><Link to='/profile'>Company Profile</Link></li>
                <li><Link to='/developer'>Developer Page</Link></li>
            </ul>
        </nav>
    );
}
