import Image from 'next/image';
import React from 'react';

const GYM = () => {
  return (
    <div className="p-4">
      {/* New Arrivals Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">New Arrivals</h2>
        
        <button className="mt-4 bg-black text-white py-2 px-4 rounded">View All</button>
      </section>

      {/* Top Selling Section */}
      
       
      {/* Browse by Dress Style Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Browse by Dress Style</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative text-center border p-4">
            <Image width={200} height={200} src="/image 11 (1).png" alt="Casual" className="mb-4" />
            <h3 className="absolute bottom-2 left-2 bg-white px-2 py-1 text-sm font-semibold">Casual</h3>
          </div>
          <div className="relative text-center border p-4">
            <Image width={200} height={200} src="/image 12 (1).png" alt="Formal" className="mb-4" />
            <h3 className="absolute bottom-2 left-2 bg-white px-2 py-1 text-sm font-semibold">Formal</h3>
          </div>
          <div className="relative text-center border p-4">
            <Image width={200} height={200} src="/image 13 (1).png" alt="Party" className="mb-4" />
            <h3 className="absolute bottom-2 left-2 bg-white px-2 py-1 text-sm font-semibold">Party</h3>
          </div>
          <div className="relative text-center border p-4">
            <Image width={200} height={200} src="/image 14 (1).png" alt="Gym" className="mb-4" />
            <h3 className="absolute bottom-2 left-2 bg-white px-2 py-1 text-sm font-semibold">Gym</h3>
          </div>
        </div>
      </section>

      {/* Happy Customers Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Our Happy Customers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Testimonial 1 */}
          <div className="border p-4 rounded shadow">
            <p className="mb-2">The product quality and style are amazing! The fit is perfect and I love the attention to detail. Highly recommended!</p>
            <p className="text-right text-sm text-gray-500">- Sarah M.</p>
          </div>
          {/* Testimonial 2 */}
          <div className="border p-4 rounded shadow">
            <p className="mb-2">Excellent design and fabric! The delivery was quick, and Im thrilled with my purchase. Will buy again!</p>
            <p className="text-right text-sm text-gray-500">- Alex K.</p>
          </div>
          {/* Testimonial 3 */}
          <div className="border p-4 rounded shadow">
            <p className="mb-2">Great customer service and fantastic clothes This is my go-to store now for trendy apparel.</p>
            <p className="text-right text-sm text-gray-500">- James L.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GYM;