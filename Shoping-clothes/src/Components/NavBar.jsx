import React from "react";
import { FaHome, FaShoppingCart, FaGalacticRepublic } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const toHome = () => {
    navigate("/home");
  };

  const toLanding = () => {
    navigate("/");
  };

  const toCarrito = () => {
    navigate("/carrito");
  };

  const toForm = () => {
    navigate("/form");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-4">
      <div className="container">
        <FaGalacticRepublic
          onClick={toLanding}
          className="navbar-brand"
          style={{ fontSize: "3rem", cursor: "pointer" }}
        />

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <span
              onClick={toHome}
              className="nav-link"
              style={{ fontSize: "1.8rem", cursor: "pointer" }}
            >
              <FaHome className="mr-2" />
             
            </span>
          </li>
          <li className="nav-item">
            <span
              onClick={toCarrito}
              className="nav-link"
              style={{ fontSize: "1.8rem", cursor: "pointer" }}
            >
              <FaShoppingCart className="mr-2" />
          
            </span>
          </li>
        </ul>
        
      </div>
        <button
          onClick={toForm}
          className="btn btn-dark btn-sm"
          style={{ fontSize: "1.2rem",  marginRight: "5rem" }}
        >
          Registrarse
        </button>
    </nav>
  );
};

export default NavBar;
