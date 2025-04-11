import { Link } from "react-router-dom";
import "./NavbarComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { isLoggedIn, logout, getLoggedInUserName } from "../service/authService";
import { useEffect, useState } from "react";
import { BsPersonBadge, BsPersonCircle } from "react-icons/bs";

const NavbarComponent = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setLoggedIn(isLoggedIn());
    setUsername(getLoggedInUserName() || "");
  }, []);

  const handleLogout = () => {
    logout();
    window.location.reload(); // Refresh to update state
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark " style={{ backgroundColor: '#000000' }}>
        <div className="container p-2">
          {/* Logo and Brand */}
          <Link className="navbar-brand text-light" to="/">
            <span className="p-2 text-uppercase fw-bold h2">
              Omelas <span className="h4">Movie Rental</span>
            </span>
          </Link>

          {/* Navbar Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
            aria-controls="nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div id="nav" className="collapse navbar-collapse justify-content-end text-uppercase fw-bold">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link mx-2 menuitems" to="/">Home</Link>
              </li>
              
              {loggedIn && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link mx-2 menuitems" to="/movies">Movies</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link mx-2 menuitems" to="/watchlist">Watchlist</Link>
                  </li>
                 
                  <li className="nav-item">
                    <span className="nav-link mx-2 text-info">
                    <BsPersonCircle /> {username}
                    </span>
                  </li>
                  <li className="nav-item">
                    <span 
                      className="nav-link mx-2 menuitems "
                      onClick={handleLogout}
                    >
                      Logout
                    </span>
                  </li>
                </>
              )}

              {!loggedIn && (
                <li className="nav-item">
                  <Link className="nav-link mx-2 menuitems" to="/login">Login</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavbarComponent;