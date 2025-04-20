import { Link } from "react-router-dom";
import '../css/Navbar.css'; // Import the CSS file for styling

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                Movie123
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/favorites" className="nav-link">Favorites</Link>
            </div>

        </nav>
    )
}

export default NavBar;