import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };
return (
<div className="login">
      <div className="login-wrapper">
        <div className="login-left">
          <h3 className="login-logo">DreamBooking.com</h3>
          <span className="login-desc">
          Make Your First Booking Here!
          </span>
        </div>
        <div className="login-right">
         <div className ="login-box">
          
          <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="login-input"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="login-input"
        />
        
        <button disabled={loading} onClick={handleClick} className="login-button">
          Login
        </button>
        </div>
        <div className="sign-up">
            <span class="sign-up-text">Not a User?</span>
            <Link to="/register">
              <button className="login-register-button">
                Create a New Account
              </button>
            </Link>
          </div>
        {error && <span>{error.message}</span>}
        </div>
      </div>
    </div>
  );
}
 

export default Login;