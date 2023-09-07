import React, { useContext } from 'react';
import { ShopingContext } from '../Context/ContextShoping';
import Swal from 'sweetalert2';

const Cards = ({ data }) => {
  const { addToCart, cart } = useContext(ShopingContext);

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
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data.map((item, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-4">
          <img src={item.image} alt={item.title} className="w-full h-48 object-cover mb-4" />
          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
          <p className="text-gray-500 mb-2">${item.price}</p>
          <p className="text-gray-500">{item.category}</p>
          <button onClick={() => handleAddToCartClick(item)}>Agregar al carrito</button>
        </div>
      ))}
    </div>
  );
};

export default Cards;
