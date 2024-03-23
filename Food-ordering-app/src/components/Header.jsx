import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
    const [loginBtn, setLoginBtn] = useState("Login");
    const isOnline = useOnlineStatus();

    const cartItems = useSelector((store) => store.cart.items);
    // console.log(cartItems);
    return(
        <div className="flex justify-between border">
            <div className="w-36">
                <img className="logo" src={ LOGO_URL }></img>
            </div>
            <div>
                <ul className="flex p-4 m-4">
                    <li className="mx-4">{isOnline ? "🟢 Online" : "🔴 Offline"}</li>
                    <li className="mx-4 cursor-pointer"><Link to="/">Home</Link></li>
                    <li className="mx-4 cursor-pointer"><Link to="/about">About Us</Link></li>
                    <li className="mx-4 cursor-pointer"><Link to="/contact">Contact Us</Link></li>
                    <li className="mx-4 cursor-pointer"><Link to="/cart"><div><span className="text-3xl text-red-200"><FaShoppingCart /></span><span className="absolute top-[24px] right-[115px] font-bold text-cyan-700 text-xl">{ cartItems.length }</span></div></Link></li>
                    <li className="mx-4 cursor-pointer"><button className="login-btn" onClick={() => {
                        loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login");
                    }}>{loginBtn}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;