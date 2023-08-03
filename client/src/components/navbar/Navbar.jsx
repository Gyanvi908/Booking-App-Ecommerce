import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);
  const handleLogout = () => {
    localStorage.setItem("user", null);
    window.location.reload();
  };
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">DreamBooking.com</span>
        </Link>
        {user ?
        <div className="profile">
        <div className="user-profile">
            <img src="/image/profile.png" alt="" className="profile-image"/>
            <span className="username">{user.username}</span>
        </div>
        <div className="logout">
          <button onClick={handleLogout} className="logout-button">Logout</button>
        </div>
      </div>
          : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;