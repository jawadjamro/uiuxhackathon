import React from 'react';

const reviews = [
  {
    name: 'Samantha D.',
    date: 'August 14, 2023',
    review:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    rating: 5,
  },
  {
    name: 'Alex M.',
    date: 'August 15, 2023',
    review:
      "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    rating: 5,
  },
  {
    name: 'Ethan R.',
    date: 'August 16, 2023',
    review:
      "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt!",
    rating: 5,
  },
  {
    name: 'Olivia P.',
    date: 'August 17, 2023',
    review:
      "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
    rating: 5,
  },
  {
    name: 'Liam K.',
    date: 'August 18, 2023',
    review:
      "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
    rating: 4,
  },
  {
    name: 'Ava H.',
    date: 'August 19, 2023',
    review:
      "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this t-shirt a conversation starter.",
    rating: 5,
  },
];

const ReviewsSection = () => {
  const renderStars = (rating:number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
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
      <h2 className="text-2xl font-semibold mb-6 text-center">All Reviews</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-sm p-4"
          >
                        <div className="flex items-center mt-2">{renderStars(review.rating)}</div>

            <h3 className="font-semibold text-lg">{review.name}</h3>
            <p className="text-gray-500 text-sm">{review.date}</p>
            <p className="mt-4 text-gray-700">{review.review}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">
          Load More Reviews
        </button>
      </div>
    </div>
  );
};

export default ReviewsSection;
