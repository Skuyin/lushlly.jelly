"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Card = ({ title, description, price, isBestseller }) => {
  return (
    <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all h-[400px] flex flex-col">
      {/* Product Image Placeholder with Jelly Color */}
      <div
        className={`h-60 w-full ${
          isBestseller
            ? "bg-gradient-to-br from-pink-300 to-purple-400"
            : "bg-gradient-to-br from-amber-200 to-yellow-300"
        }`}
      >
        {isBestseller && (
          <div className="absolute top-4 left-4 bg-yellow-300 text-yellow-800 px-3 py-1 rounded-full text-sm font-bold shadow-md">
            ⭐ BESTSELLER
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-pink-600">
            Rp{price.toLocaleString()}
          </span>
          {/* <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
            Add to Cart
          </button> */}
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  // Sample jelly product data
  const jellyProducts = [
    {
      id: 1,
      title: "Rainbow Jelly Delight",
      description: "Colorful layers of fruity jelly with fresh mango topping",
      price: 35000,
      isBestseller: true,
    },
    {
      id: 2,
      title: "Strawberry Cloud Jelly",
      description: "Fluffy strawberry jelly with whipped cream and berries",
      price: 42000,
      isBestseller: true,
    },
    {
      id: 3,
      title: "Tropical Jelly Paradise",
      description: "Mixed tropical fruits in coconut jelly base",
      price: 38000,
      isBestseller: false,
    },
    {
      id: 4,
      title: "Matcha Jelly Dream",
      description: "Premium matcha jelly with red bean and mochi",
      price: 45000,
      isBestseller: true,
    },
    {
      id: 5,
      title: "Chocolate Lava Jelly",
      description:
        "Rich chocolate jelly with molten center and vanilla ice cream",
      price: 48000,
      isBestseller: false,
    },
    {
      id: 6,
      title: "Mango Tango Jelly",
      description: "Double layer mango jelly with mango chunks",
      price: 40000,
      isBestseller: true,
    },
  ];

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 1.2,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: {
          perView: 2.2,
          spacing: 20,
        },
      },
      "(min-width: 768px)": {
        slides: {
          perView: 3,
          spacing: 24,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 4,
          spacing: 28,
        },
      },
    },
  });

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
            Our Jelly Creations
          </h2>
          <p className="text-xl text-pink-600 max-w-2xl mx-auto">
            Wobbly, delicious, and full of joy - discover our jelly wonders!
          </p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={() => instanceRef.current?.prev()}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-3 rounded-full shadow-lg hover:bg-pink-100 z-10 transition-colors"
            aria-label="Previous"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Slider */}
          <div ref={sliderRef} className="keen-slider">
            {jellyProducts.map((product) => (
              <div key={product.id} className="keen-slider__slide">
                <Card
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  isBestseller={product.isBestseller}
                />
              </div>
            ))}
          </div>

          <button
            onClick={() => instanceRef.current?.next()}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-3 rounded-full shadow-lg hover:bg-pink-100 z-10 transition-colors"
            aria-label="Next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile dots indicator */}
        <div className="flex justify-center mt-8 md:hidden">
          {jellyProducts.map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className="w-3 h-3 mx-1 rounded-full bg-pink-200 hover:bg-pink-400 transition-colors"
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
