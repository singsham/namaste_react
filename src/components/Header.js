import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  const [loginState, setLoginState] = useState("Logout");
  return (
    <div className="header">
      <img src={LOGO_URL} alt="logo" className="logo" />

      <ul className="menu">
        <li>Home</li>
        <li>About</li>
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
