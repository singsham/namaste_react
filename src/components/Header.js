import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginState, setLoginState] = useState("Logout");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between items-center bg-gray-200">
      <img src={LOGO_URL} alt="logo" className="w-40" />

      <ul className="flex justify-between">
        <li className="px-5">Online Status{onlineStatus ? "✅" : "🔴"}</li>
        <li className="px-5">
          <Link to="/home">Home</Link>
        </li>
        <li className="px-5">
          <Link to="/about">About</Link>
        </li>
        <li className="px-5">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="px-5">
          <Link to="/instamart">InstMart</Link>
        </li>
        <li className="px-5">Cart</li>
        <button
          className="px-4 py-2"
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
