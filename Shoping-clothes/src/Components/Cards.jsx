
// import React, { useContext } from 'react';
// import { ShopingContext } from '../Context/ContextShoping';
// import Swal from 'sweetalert2';

// const Cards = ({ data }) => {
//   const { addToCart, cart } = useContext(ShopingContext);

//   const handleAddToCartClick = (product) => {
//     const isProductInCart = cart.some((item) => item.id === product.id);

//     if (isProductInCart) {
  
//       Swal.fire({
//         icon: 'warning',
//         title: 'Este producto ya está en el carrito',
//         showConfirmButton: false,
//         timer: 1500, 
//       });
//     } else {
      
//       addToCart(product);
//     }
//   };

//   return (
//     <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//       {data.map((item, index) => (
//         <div key={index} className="bg-white rounded-lg shadow-md p-4">
//           <img src={item.image} alt={item.title} className="w-full h-48 object-cover mb-4" />
//           <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
//           <p className="text-gray-500 mb-2">${item.price}</p>
//           <p className="text-gray-500">{item.category}</p>
//           <button onClick={() => handleAddToCartClick(item)}>Agregar al carrito</button>
//         </div>
//       ))}

import React from 'react';
import { useContext } from 'react';
import { ContextoOscuro } from '../Context/ContextModoOscuro';
import { ShopingContext } from '../Context/ContextShoping';

const Cards = ({ data }) => {
  const { dark } = useContext(ContextoOscuro);
  const { addToCart, cart } = useContext(ShopingContext);
  const cardClass = dark
    ? 'bg-gray-900 text-white border border-black '
    : 'bg-gray-100 text-gray-800 border border-gray-200';

    // data.map((item, index) => (
    //   <div key={index} className="rounded-lg shadow-md p-4">
    //     <img src={item.image} alt={item.title} className="w-full h-48 object-cover mb-4" />
    //     <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
    //     <p className="text-gray-300 mb-2">${item.price}</p>
    //     <p className="text-gray-500">{item.category}</p>
    //   </div>
    // ))

    const handleAddToCartClick = (product) => {
          const isProductInCart = cart.some((item) => item.id === product.id);
      
          if (isProductInCart) {
        
            Swal.fire({
              icon: 'warning',
              title: 'Este producto ya está en el carrito',
              showConfirmButton: false,
              timer: 1500, 
            });
          } else {
            
            addToCart(product);
          }
        };

  return (
    <div className={`grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ${cardClass}`}>
      {  data.length === 0? 
      (<div className='flex  text-end'>No results of your search were found!!!!</div>)
      : (
        data.map((item, index) => (
          <div key={index} className="rounded-lg shadow-md p-4">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover mb-4" />
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-300 mb-2">${item.price}</p>
            <p className="text-gray-500">{item.category}</p>
            <button onClick={() => handleAddToCartClick(item)}>Agregar al carrito</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cards;
