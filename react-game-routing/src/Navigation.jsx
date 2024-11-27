import { Link } from "react-router-dom";
import './Navigation.css'; 
export default function Navigation() {
    return (
        <>
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/games" className="nav-link">Games</Link>
                </li>
            </ul>
        </nav>
        <br /><br /><br /><br /><br />
        </>
        
    );
}
