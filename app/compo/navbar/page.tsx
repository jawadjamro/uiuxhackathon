import Link from 'next/link';
import React from 'react';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex justify-between items-center px-4 py-2">
        {/* Announcement Bar */}
        <div className="text-sm w-full text-center">
          Sign up and get 20% off your first order.{' '}
          <a href="#" className="underline">
            Sign Up Now
          </a>
        </div>
      </div>

      <nav className="bg-white text-black">
        <div className="container mx-auto flex justify-between items-center px-4 py-4">
          {/* Logo */}
          <div className="text-2xl font-bold">SHOP.CO</div>

          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-8">
            <li className="hover:text-gray-700">
            <Link href="seccompo">Shop</Link>
            </li>
            <li className="hover:text-gray-700">
              <Link href="thcompo">On Sale</Link>
            </li>
            <li className="hover:text-gray-700">
              <Link href="/fourcompo">New Arrivals</Link>
            </li>
            <li className="hover:text-gray-700">
              <Link href="/">Brands</Link>
            </li>
          </ul>

          {/* Search and Icons */}
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search for products..."
              className="hidden md:block border border-gray-300 rounded-md px-4 py-2 w-64"
            />
             <Link href="fourcompo"><FaShoppingCart className="text-xl cursor-pointer hover:text-gray-700" /></Link>
            <FaUserCircle className="text-xl cursor-pointer hover:text-gray-700" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
