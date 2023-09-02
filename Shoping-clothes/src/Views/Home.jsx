import React, { useContext } from "react";
import { ShopingContext } from "../Context/ContextShoping";
import { useState } from "react";
import { FiChevronDown } from 'react-icons/fi';
import { BiSearch } from 'react-icons/bi';
import Cards from "../Components/Cards";
const Home = () => {
  const { shoping, categorias } = useContext(ShopingContext);
  console.log(shoping);
  console.log("soy la catergoria",categorias);
  

  const getSelectCategories = () => {
    return (
      <select className="appearance-none h-full rounded-md border border-gray-300 pr-8 focus:border-indigo-500 focus:outline-none">
        {categorias.map((element) => (
          <option key={element}value={element}>{element}</option>
        ))}
      </select>
    );
  };
  return (
    <div>

    <nav className="bg-gray-200 shadow-md">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center h-16 justify-center">
          <div className="flex items-center">
            <div className="relative mr-4">
              <select className="appearance-none h-full rounded-md border border-gray-300 pr-8 focus:border-indigo-500 focus:outline-none">
                <option>order by</option>
                <option>ASC</option>
                <option>DES</option>
              </select>
              <span className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                <FiChevronDown className="w-4 h-4"/>
              </span>
            </div>
            <div className="flex-1 max-w-xs mx-4">
              <label htmlFor="search" className="sr-only">Search</label>
              <div className="relative text-gray-400 focus-within:text-gray-600">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <BiSearch className="w-5 h-5" />
                </div>
                <input id="search" className="block w-full rounded-md border border-gray-300 pl-10 pr-4 py-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Buscar" type="search" />
              </div>
            </div>
            <div className="relative ml-4">
              {getSelectCategories()}
              <span className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                <FiChevronDown className="w-4 h-4" />
              </span> 
            </div>
          </div>
        </div>
      </div>
    </nav>
     <Cards data ={shoping}/>
    </div>
  );
}


export default Home;