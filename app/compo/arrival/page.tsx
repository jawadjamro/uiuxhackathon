import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Arrival = () => {
  const products = [
    {
      id: 1,
      name: 'T-shirt with Tape Details',
      price: '$120',
      image: '/image 7.png',
      rating: 4.5,
      reviews: 200,
    },
    {
      id: 2,
      name: 'Skinny Fit Jeans',
      price: '$240',
      discountPrice: '$260',
      image: '/image 8.png',
      rating: 4.6,
      reviews: 150,
    },
    {
      id: 3,
      name: 'Checkered Shirt',
      price: '$180',
      image: '/image 9.png',
      rating: 4.3,
      reviews: 300,
    },
    {
      id: 4,
      name: 'Sleeve Striped T-shirt',
      price: '$130',
      discountPrice: '$160',
      image: '/image 10.png',
      rating: 4.2,
      reviews: 100,
    },
    {
      id: 5,
      name: 'Vertical Striped Shirt',
      price: '$212',
      discountPrice: '$232',
      image: '/image 11.png',
      rating: 4.4,
      reviews: 120,
    },
    {
      id: 6,
      name: 'Courage Graphic T-shirt',
      price: '$145',
      image: '/image 12.png',
      rating: 4.5,
      reviews: 80,
    },
    {
      id: 7,
      name: 'Loose Fit Bermuda Shorts',
      price: '$80',
      image: '/image 13.png',
      rating: 4.7,
      reviews: 50,
    },
    {
      id: 8,
      name: 'Faded Skinny Jeans',
      price: '$210',
      image: '/image 14.png',
      rating: 4.8,
      reviews: 75,
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* New Arrivals Section */}
        <h2 className="text-2xl font-bold mb-8">NEW ARRIVALS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product) => (
            <div key={product.id} className="bg-white p-4 shadow-md rounded-lg">
              <Image width={200} height={200}
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-500">{product.price}</p>
            </div>
          ))}
        </div>
        {/* Top Selling Section */}
        <h2 className="text-2xl font-bold mt-16 mb-8">TOP SELLING</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.slice(4, 8).map((product) => (
            <div key={product.id} className="bg-white p-4 shadow-md rounded-lg">
              <Image width={200} height={200}
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-500">
                {product.discountPrice ? (
                  <span className="line-through mr-2">{product.discountPrice}</span>
                ) : null}
                {product.price}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-black text-white py-2 px-6 rounded-full"><Link href="thcompo">View All</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Arrival;
