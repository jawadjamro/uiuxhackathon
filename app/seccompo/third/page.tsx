import Image from 'next/image';
import React from 'react';

const products = [
  {
    name: 'Polo with Contrast Trims',
    price: 212,
    originalPrice: 242,
    discount: '20%',
    rating: 4.0,
    image: '/image 7 (1).png', // Replace with actual product image URL
  },
  {
    name: 'Gradient Graphic T-shirt',
    price: 145,
    rating: 3.5,
    image: '/image 8 (1).png', // Replace with actual product image URL
  },
  {
    name: 'Polo with Tipping Details',
    price: 180,
    rating: 4.5,
    image: '/image 9 (1).png', // Replace with actual product image URL
  },
  {
    name: 'Black Striped T-shirt',
    price: 120,
    originalPrice: 160,
    discount: '30%',
    rating: 5.0,
    image: '/image 10 (1).png', // Replace with actual product image URL
  },
];

const Third = () => {
  const renderStars = (rating:number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        className={`h-5 w-5 ${
          index < Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'
        }`}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 .587l3.668 7.429 8.2 1.19-5.933 5.785 1.399 8.153L12 18.897l-7.334 3.847 1.4-8.153L.133 9.206l8.2-1.19z" />
      </svg>
    ));
  };

  return (
    <div className="bg-white py-10 px-4 sm:px-8 md:px-16">
      <h2 className="text-3xl font-bold text-center mb-8">You Might Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-100 border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <Image width={200} height={200}
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-medium text-gray-800 text-center">
              {product.name}
            </h3>
            <div className="flex justify-center items-center mt-2">
              {renderStars(product.rating)}
              <span className="text-sm text-gray-600 ml-2">
                {product.rating.toFixed(1)}/5
              </span>
            </div>
            <div className="mt-4 text-center">
              <span className="text-xl font-bold text-gray-800">${product.price}</span>
              {product.originalPrice && (
                <div className="text-sm text-gray-500">
                  <span className="line-through">${product.originalPrice}</span>
                  <span className="text-red-500 ml-2">-{product.discount}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Third;
