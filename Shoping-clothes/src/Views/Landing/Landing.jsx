import React, { useRef, useState, useEffect } from "react";
import One from "./One";
import Two from "./Two";
import About from "./About";

const Landing = () => {
  const [currentComponent, setCurrentComponent] = useState(0);
  const components = [Two, One, About];
  const containerRef = useRef(null);
  let isScrolling = false;

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();

      if (!isScrolling) {
        isScrolling = true;
        const delta = event.deltaY;

        if (delta > 0) {
          setCurrentComponent((prev) => Math.min(prev + 1, components.length - 1));
        } else if (delta < 0) {
          setCurrentComponent((prev) => Math.max(prev - 1, 0));
        }

        setTimeout(() => {
          isScrolling = false;
        }, 850); 
      }
    };

    const containerElement = containerRef.current;
    containerElement.addEventListener("wheel", handleScroll, { passive: false });
    return () => {
      containerElement.removeEventListener("wheel", handleScroll);
    };
  }, []);


  return (
    <div ref={containerRef} style={{ height: "100vh", overflow: "hidden" }} className="bg-gray-800">
      {components.map((Component, index) => (
        <div
          key={index}
          style={{
            width: "100%",
            height: "100%",
            transform: `translateY(-${currentComponent * 100}vh)`,
            transition: "transform 0.7s ease",
          }}
        >
          <Component />
        </div>
      ))}
    </div>
  );
};

export default Landing;









// import React, { useState } from "react";
// import { FaHome, FaShoppingCart, FaBars, FaGalacticRepublic, FaUser } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const NavBar = () => {
//   const navigate = useNavigate();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const toHome = () => {
//     navigate("/home");
//   };

//   const toLanding = () => {
//     navigate("/");
//   };

//   const toCarrito = () => {
//     navigate("/carrito");
//   };

//   const toForm = () => {
//     navigate("/form");
//   };

//   return (
//     <nav className="bg-gray-900 py-3">
//       <div className="container flex items-center justify-between">
//         <FaGalacticRepublic
//           onClick={toLanding}
//           className="text-white cursor-pointer"
//           style={{ fontSize: "2.8rem"}}
//         />

//         <div className={`lg:flex ${isMenuOpen ? "block" : "hidden"}  lg:mt-0 ml-auto`}  >
//           <span
//             onClick={toHome}
//             className="text-white cursor-pointer"
//             style={{ fontSize: "2rem"}}
//           >
//             <FaHome className="mr-4" />
          
//           </span>
//           <span
//             onClick={toCarrito}
//             className="text-white cursor-pointer"
//             style={{ fontSize: "2rem"}}
//           >
//             <FaShoppingCart className="mr-4" />
       
//           </span>
//         <button
//           onClick={toForm}
//           className="btn btn-dark btn-sm ml-20"
//           style={{ fontSize: "1.2rem"}}
//         >
//           Registrarse
//         </button>
//         </div>


//         <button
//           className="lg:hidden text-white text-2xl ml-2"
//           onClick={toggleMenu}
//           aria-label="Toggle navigation"
//         >
//           <FaBars />
//         </button>
        
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

