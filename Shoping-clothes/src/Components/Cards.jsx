import React from 'react';

const Cards = ({ data }) => {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data.map((item, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-4">
          <img src={item.image} alt={item.title} className="w-full h-48 object-cover mb-4" />
          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
          <p className="text-gray-500 mb-2">${item.price}</p>
          <p className="text-gray-500">{item.category}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;