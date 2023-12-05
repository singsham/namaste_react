import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginState, setLoginState] = useState("Logout");
  return (
    <div className="header">
      <img src={LOGO_URL} alt="logo" className="logo" />

      <ul className="menu">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>Cart</li>
        <button
          className="logout"
          onClick={() => {
            setLoginState("Login");
          }}
        >
          {loginState}
        </button>
      </ul>
    </div>
  );
};
export default Header;
