import Image from 'next/image';
import React from 'react';

const FOUR = () => {
  return (
    <div className="p-4 flex flex-col md:flex-row md:space-x-4">
      <div className="md:w-2/3 w-full flex flex-col space-y-4">
        {/* Item 1 */}
        <div className="flex justify-between items-center border p-4 rounded-lg">
          <div className="flex items-center">
            <Image width={500} height={500} src="/image 7.png" alt="Gradient Graphic T-shirt" className="w-20 h-20 object-cover mr-4" />
            <div>
              <h2 className="font-bold text-lg">Gradient Graphic T-shirt</h2>
              <p>Size: Large</p>
              <p>Color: White</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg">$145</p>
          </div>
        </div>
        {/* Item 2 */}
        <div className="flex justify-between items-center border p-4 rounded-lg">
          <div className="flex items-center">
            <Image width={500} height={500} src="/image 8.png" alt="Checkered Shirt" className="w-20 h-20 object-cover mr-4" />
            <div>
              <h2 className="font-bold text-lg">Checkered Shirt</h2>
              <p>Size: Medium</p>
              <p>Color: Red</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg">$180</p>
          </div>
        </div>
        {/* Item 3 */}
        <div className="flex justify-between items-center border p-4 rounded-lg">
          <div className="flex items-center">
            <Image width={500} height={500} src="/image 9.png" alt="Skinny Fit Jeans" className="w-20 h-20 object-cover mr-4" />
            <div>
              <h2 className="font-bold text-lg">Skinny Fit Jeans</h2>
              <p>Size: Large</p>
              <p>Color: Blue</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg">$240</p>
          </div>
        </div>
      </div>
      {/* Order Summary */}
      <div className="md:w-1/3 w-full mt-4 md:mt-0 border p-4 rounded-lg">
        <h2 className="font-bold text-lg mb-4">Order Summary</h2>
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>$565</span>
        </div>
        <div className="flex justify-between mb-2 text-red-500">
          <span>Discount (-20%)</span>
          <span>-$113</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Delivery Fee</span>
          <span>$15</span>
        </div>
        <div className="flex justify-between font-bold mb-4">
          <span>Total</span>
          <span>$467</span>
        </div>
        <input type="text" placeholder="Promo Code" className="w-full p-2 mb-4 border rounded-lg" />
        <button className="w-full bg-black text-white py-2 rounded-lg">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default FOUR;
