import Image from 'next/image';
import React from 'react';

const THCOMPO = () => {
  return (
    <div className="p-6">
      {/* Filters Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filters */}
        <aside className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>

          {/* Price Range */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Price</h3>
            <input type="range" min="50" max="300" className="w-full" />
          </div>

          {/* Colors */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Colors</h3>
            <div className="flex gap-2">
              {['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-orange-500', 'bg-purple-500'].map((color, index) => (
                <span key={index} className={`w-6 h-6 rounded-full ${color} border`}></span>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Size</h3>
            <div className="flex gap-2">
              {['S', 'M', 'L', 'XL'].map((size) => (
                <button key={size} className="px-4 py-2 border rounded">{size}</button>
              ))}
            </div>
          </div>

          <button className="w-full bg-black text-white py-2 rounded mt-4">Apply Filters</button>
        </aside>

        {/* Products Section */}
        <section className="lg:col-span-3">
          <h2 className="text-2xl font-semibold mb-6">Casual</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className="bg-white p-4 shadow rounded hover:shadow-lg transition"
              >
                <Image width={200} height={200}
                  src={`/image ${7 + index}.png`}
                  alt={`Product ${index + 1}`}
                  className="w-full h-48 object-cover mb-4"
                />
                <h3 className="text-lg font-medium">Product Name {index + 1}</h3>
                <p className="text-gray-600">$120</p>
                <button className="mt-4 w-full bg-black text-white py-2 rounded">Buy Now</button>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-6">
            <button className="px-4 py-2 border rounded">Previous</button>
            <button className="px-4 py-2 border rounded ml-2">Next</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default THCOMPO;