import Image from 'next/image';
import React from 'react';

const First = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex flex-col items-center md:items-start">
          <Image width={200} height={200} src="/image 1.png" alt="ONE LIFE GRAPHIC T-SHIRT" className="w-64 h-64 object-cover" />
          <div className="flex mt-4 space-x-2">
            <Image width={200} height={200} src="/image 2.png" alt="Front view" className="w-16 h-16 object-cover" />
            <Image width={200} height={200} src="/image 5.png" alt="Back view" className="w-16 h-16 object-cover" />
            <Image width={200} height={200} src="/image 6.png" alt="Model view" className="w-16 h-16 object-cover" />
          </div>
        </div>
        <div className="mt-4 md:mt-0 md:ml-8">
          <h1 className="text-2xl font-bold">ONE LIFE GRAPHIC T-SHIRT</h1>
          <div className="flex items-center mt-2">
            <span className="text-yellow-500">★★★★★</span>
            <span className="ml-2 text-gray-600">4.5/5</span>
          </div>
          <div className="flex items-center mt-2">
            <span className="text-2xl font-bold text-red-500">$260</span>
            <span className="ml-2 text-gray-500 line-through">$300</span>
            <span className="ml-2 text-red-500">-40%</span>
          </div>
          <p className="mt-4 text-gray-700">This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
          <div className="mt-4">
            <span className="text-gray-700">Select Colors:</span>
            <div className="flex mt-2 space-x-2">
              <button className="w-8 h-8 bg-green-700 rounded-full"></button>
              <button className="w-8 h-8 bg-green-900 rounded-full"></button>
              <button className="w-8 h-8 bg-blue-900 rounded-full"></button>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-gray-700">Choose Size:</span>
            <div className="flex mt-2 space-x-2">
              <button className="px-4 py-2 border rounded">Small</button>
              <button className="px-4 py-2 border rounded">Medium</button>
              <button className="px-4 py-2 border rounded bg-black text-white">Large</button>
              <button className="px-4 py-2 border rounded">X-Large</button>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <button className="px-4 py-2 border rounded">-</button>
            <span className="mx-4">1</span>
            <button className="px-4 py-2 border rounded">+</button>
          </div>
          <button className="mt-4 px-4 py-2 bg-black text-white rounded">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default First;
