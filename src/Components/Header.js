import { useState, useContext } from "react";
import logo from './img/logo.png';
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
import useOnline from "../CustomHooks/useOnline";
import UserContext from '../Utils/UserContext';
import { useSelector } from "react-redux";

export const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const isOnline = useOnline();
  const cartItems = useSelector((store) => store.cart.items);
  const { user } = useContext(UserContext);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const navmenu = [
    { link: "/", name: "Home" },
    { link: "/about", name: "About" },
    { link: "/contactUS", name: "Contact" },
    { link: "/instamart", name: "F&Q" },
  ];

  return (
    <nav className="flex items-center justify-between bg-white shadow-md sticky top-0 z-50 px-4 py-2">
      {/* Logo Section */}
      <div className="flex items-center">
        <NavLink to="/">
          <img
            className="h-16 w-20 rounded-full object-cover"
            src={logo}
            alt="Logo"
          />
        </NavLink>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button
        onClick={toggleMenu}
        className="text-3xl sm:hidden focus:outline-none"
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? (
          <IoMdClose className="text-black" />
        ) : (
          <GiHamburgerMenu className="text-black" />
        )}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center gap-4 py-4 z-40 sm:hidden">
          {navmenu.map((menu) => (
            <li key={menu.name} className="w-full text-center">
              <NavLink
                to={menu.link}
                className="block py-2 text-lg font-medium text-gray-800 hover:bg-gray-200"
                onClick={toggleMenu}
              >
                {menu.name}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              to="/cart"
              className="flex items-center justify-center text-black py-2 px-4 rounded-md"
              onClick={toggleMenu}
            >
              <span className="mr-2">{cartItems.length}</span>
              <FaShoppingCart size="20px" />
            </NavLink>
          </li>
        </ul>
      )}

      {/* Desktop Menu */}
      <ul className="hidden sm:flex items-center space-x-6">
        {navmenu.map((menu) => (
          <li key={menu.name}>
            <NavLink
              to={menu.link}
              className="text-gray-800 hover:text-red-500 text-lg font-medium"
            >
              {menu.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Login and Cart Buttons */}
      <div className="hidden sm:flex items-center space-x-4">
        {isLoggedIn ? (
          <button
            className="bg-red-500 text-black px-4 py-2 rounded-md"
            onClick={() => setIsLoggedIn(false)}
          >
            Logout
          </button>
        ) : (
          <button
            className="bg-black text-white px-4 py-2 rounded-md"
            onClick={() => setIsLoggedIn(true)}
          >
            Login
          </button>
        )}
        <NavLink to="/cart">
          <button className="flex items-center text-black px-4 py-2 rounded-md">
            <span className="mr-2">{cartItems.length}</span>
            <FaShoppingCart size="20px" />
          </button>
        </NavLink>
      </div>
    </nav>
  );
};

export default HeaderComponent;
