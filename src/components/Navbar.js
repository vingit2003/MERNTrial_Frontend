import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar bg-warning">
            <Link style={{fontFamily:"Nosifer"}} to="/" className="navbar-brand mx-2">JobBoard</Link>
            <div className="nav">
                <Link to="/createUser" className="nav-link">Register</Link>
                <Link to="/userList" className="nav-link">List of users</Link>
            </div>
        </nav>
    )
}

export default Navbar;
