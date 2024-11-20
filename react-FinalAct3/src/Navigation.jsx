import { NavLink } from "react-router-dom";
import './Nav.css'
export default function Navigation() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><NavLink to="/" activeClassName="active">Overview</NavLink></li>
        <li><NavLink to="/specification" activeClassName="active">Specification</NavLink></li>
        <li><NavLink to="/inthebox" activeClassName="active">In the Box</NavLink></li>
        <li><NavLink to="/keyfeatures" activeClassName="active">Key Features</NavLink></li>
        <li><NavLink to="/setup" activeClassName="active">Setup</NavLink></li>
        <li><NavLink to="/howtouse" activeClassName="active">How to Use</NavLink></li>
        <li><NavLink to="/troubleshoot" activeClassName="active">Troubleshoot</NavLink></li>
        <li><NavLink to="/maintenance" activeClassName="active">Maintenance</NavLink></li>
        <li><NavLink to="/warrantyandsupport" activeClassName="active">Warranty</NavLink></li>
      </ul>
    </nav>
  );
}
