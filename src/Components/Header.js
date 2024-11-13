import { useState, useEffect, useContext } from "react";
import logo from './img/logo.png'


import { HeaderShimmer } from "./Shimmer";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import useOnline from "../CustomHooks/useOnline";
import UserContext from '../Utils/UserContext'
import { useSelector } from "react-redux";

//creating a header section
export const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const isOnline = useOnline();
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const { user } = useContext(UserContext);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  {
    /* <button onClick={() => title === "YumBite Foods" ? setTitle("Pops Kitchen") : setTitle("YumBite Foods")}>  Change Title</button> */
  }
  //responsive NavBar
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  //nav-items
  const navmenu = [
    {
      link: "/",
      name: "Home",
    },

    {
      link: "/about",
      name: "About",
    },
    {
      link: "/contactUS",
      name: "Contact",
    },
    {
      link: "/instamart",
      name: "F&Q",
    },
  ];
  return (
    <nav className="flex justify-between  sticky  top-0 h-20 w-full z-10 bg-orange-300 text-white">
      <div className="w-20 h-18 bg-orange-300 p-2 flex items-center justify-center">
        <NavLink to="/">
          <img className="object-cover  rounded-full" src={logo} alt="Logo" />
        </NavLink>
      </div>

    {/* Mobile Menu */}
  <div className= "hidden semimd:flex">
    <ul>
  <li>
          <NavLink
            to="/cart"
            className="flex relative"
          >
            <button
              className="flex items-center bg-[yellow]  my-6 mx-7 p-1 rounded-md text-black"
              data-testid="cart"
            >
              <span className="mr-3">{cartItems.length}</span>
              <FaShoppingCart color="black" size="20px" />
            </button>
          </NavLink>
        </li>
        </ul>
  <button
    onClick={toggleMenu}
    className={`text-3xl  transition-transform duration-300 ease-in-out transform ${
      isMenuOpen ? "rotate-180" : ""
    }`}
  >
    {isMenuOpen === true ? (
      <IoMdClose className="text-3xl cursor-pointer mr-2" onClick={toggleMenu} />
    ) : (
      <GiHamburgerMenu
        className="text-2xl cursor-pointer mr-2"
        onClick={toggleMenu}
      />
    )}
    </button>
 
    {isMenuOpen && (
      <ul className="bg-gray-800 rounded-lg backdrop-filter backdrop-blur-sm bg-opacity-30 w-full semimd:overflow-hidden h-50 flex flex-wrap items-center justify-center flex-col z-10  absolute m-auto  left-0 right-0 top-20 text-lg gap-2 font-semibold ">
        {navmenu.map((menu) => {
          return (
            <li key={menu.name}>
              <NavLink
                to={menu.link}
                activeclassname="text-green-700"
                className="text-xl font-medium p-2 hover:border-b-4 border-white
                hover:bg-[#FFC95F]"
                onClick={toggleMenu}
              >
                {menu.name}
              </NavLink>
            </li>
          );
        })}

        <li>
          <NavLink
            to="/cart"
            className="flex relative"
            onClick={toggleMenu}
          >
            <button
              className="flex items-center bg-[yellow] my-6 mx-2 p-2 rounded-md text-black"
              data-testid="cart"
            >
              <span className="mr-3">{cartItems.length}</span>
              <FaShoppingCart color="black" size="25px" />
            </button>
          </NavLink>
        </li>
      </ul>
    )}
  </div>

      {/* Desktop Menu */}
      <ul className="flex  py-7 semimd:hidden">
        {navmenu.map((menu, idx) => {
          return (
            
            <li key={idx} className="px-2 hover:border-b-4 border-white hover:text-[#FFC95F]">
              <NavLink
                to={menu.link}
                activeclassname="text-green-700"
                className="p-2"
              >
                {menu.name}
              </NavLink>
            </li>
          );
        })}
  </ul>
        <div className="flex  justify-center items-center semimd:hidden ">
          {isLoggedIn ? (
            <button
              className="logOut  text-sm mt-2 py-3  mx-3 w-16 rounded-md bg-slate-900"
              onClick={() => setIsLoggedIn(false)}
            >
              Logout
            </button>
          ) : (
            <button
              className="logIn w-16  mt-2 py-3 mx-3 text-sm rounded-md bg-slate-950"
              onClick={() => setIsLoggedIn(true)}
            >
              LogIn
            </button>
          )}

    
            <NavLink to="/cart">
              <button
                className="flex items-center bg-[yellow]  mx-2 mt-1 p-2 rounded-md text-black"
                data-testid="cart"
              >
                <span className="mr-3">{cartItems.length}</span>
                <FaShoppingCart color="black" size="25px" />
              </button>
            </NavLink>
         
        </div>
    
    </nav>
  );
};

export default HeaderComponent;