import React, { useState } from "react";
import { FaHome, FaShoppingCart, FaBars, FaGalacticRepublic } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toLanding = () => {
    navigate("/");
  }

  const toHome = () => {
    navigate("/home");
  };

  const toCarrito = () => {
    navigate("/carrito");
  };

  const toForm = () => {
    navigate("/form");
  };

  return (
    <nav className="bg-gray-900 py-3">
      <div className="container flex items-center justify-between">
        <FaGalacticRepublic
          onClick={toLanding}
          className="text-white cursor-pointer"
          style={{ fontSize: "2.8rem"}}
        />

        <div className="hidden lg:flex items-center space-x-6">
          <span
            onClick={toHome}
            className="text-white cursor-pointer"
            style={{ fontSize: "2rem"}}
          >
            <FaHome className="mr-4" />
          </span>
          <span
            onClick={toCarrito}
            className="text-white cursor-pointer"
            style={{ fontSize: "2rem"}}
          >
            <FaShoppingCart className="mr-4" />
          </span>
          <button
            onClick={toForm}
            className="btn btn-dark btn-sm "
            style={{ fontSize: "1.2rem", marginLeft:"2rem"}}
          >
            Registrarse
          </button>
        </div>

        <button
          className="lg:hidden text-white text-2xl ml-2"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <FaBars />
        </button>

        {isMenuOpen && (
          <div className="lg:hidden absolute top-14 right-0 bg-gray-900 p-4 w-48 rounded-md shadow-lg" style={{ zIndex: 999 }}>
          <span
            onClick={toHome}
            className="text-white cursor-pointer block mb-2 flex flex-row items-center"
            style={{ fontSize: "1.5rem"}}
          >
            <FaHome className="mr-2" />
            Home
          </span>
          <span
            onClick={toCarrito}
            className="text-white cursor-pointer block mb-2 flex flex-row items-center"
            style={{ fontSize: "1.5rem"}}
          >
            <FaShoppingCart className="mr-2" />
            Cart
          </span>
          <button
            onClick={toForm}
            className="btn btn-dark btn-sm w-full"
            style={{ fontSize: "1.2rem"}}
          >
            Registrarse
          </button>
        </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
