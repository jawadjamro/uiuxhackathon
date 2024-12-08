import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Main = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-extrabold text-black leading-tight mb-6">
            FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Browse through our diverse range of meticulously crafted garments, designed
            to bring out your individuality and cater to your sense of style.
          </p>
          <button className="bg-black text-white text-lg py-3 px-6 rounded-lg shadow-lg hover:bg-gray-800">
            <Link href="seccompo">Shop Now</Link>
          </button>
        </div>

        {/* Image Section */}
        <div className="relative md:w-1/2">
          <div className="w-full h-full aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
            {/* Adjusted Image */}
            <Image
              width={2500} 
              height={2500} 
              src="/boy1.png" 
              alt="Placeholder for fashion models" 
              className="object-cover w-full h-full"
            />
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 md:top-20 md:left-20 text-black text-3xl font-extrabold">
            ★ {/* Star Symbol */}
          </div>
          <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 text-black text-3xl font-extrabold">
            ★ {/* Star Symbol */}
          </div>
        </div>
      </div>

      {/* Brand Logos Section */}
      <div className="mt-16 bg-black py-4">
        <div className="container mx-auto flex justify-around items-center">
          <Image
            src="/Vector.png"
            alt="Versace"
            width={80}
            height={80}
            className="h-6 md:h-12"
          />
          <Image
            src="/Vector (1).png"
            alt="Zara"
            width={80}
            height={80}
            className="h-6 md:h-12"
          />
          <Image
            src="/Vector (2).png"
            alt="Gucci"
            width={80}
            height={80}
            className="h-6 md:h-12"
          />
          <Image
            src="/Vector (3).png"
            alt="Prada"
            width={80}
            height={80}
            className="h-6 md:h-12"
          />
          <Image
            src="/Vector (4).png"
            alt="Calvin Klein"
            width={80}
            height={80}
            className="h-6 md:h-12"
          />
        </div>
      </div>
    </section>
  );
};

export default Main;
