import React from "react";

const PricingCard = ({ title, price, features, isPopular }) => {
  return (
    <div
      className={`relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all ${
        isPopular ? "border-2 border-amber-400" : "border border-gray-200"
      }`}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-amber-400 text-amber-900 px-4 py-1 font-bold text-sm">
          MOST POPULAR
        </div>
      )}

      <div className="h-48 bg-gradient-to-r from-pink-200 to-purple-200 flex items-center justify-center">
        <div className="text-6xl">
          {title === "Lovely" && "🍨"}
          {title === "Sweet Heart" && "🍧"}
          {title === "Sultan Booth" && "🎪"}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-2">
          {title}
        </h3>
        <p className="text-4xl font-extrabold text-center text-amber-500 mb-6">
          Rp{price}
        </p>

        <ul className="space-y-3 mb-8">
          {features.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>

        <button
          className={`w-full py-3 font-semibold rounded-lg transition-all ${
            isPopular
              ? "bg-gradient-to-r from-amber-400 to-amber-500 text-white"
              : "bg-gray-100 hover:bg-gray-200 text-gray-800"
          }`}
        >
          Choose Package
        </button>
      </div>
    </div>
  );
};

const PackageInfo = () => {
  const plans = [
    {
      title: "Lovely",
      price: "1.000.000",
      features: [
        "Up to 300 jelly cups",
        "Basic drink stand setup",
        "2 jelly flavors",
        "3-hour service",
      ],
      isPopular: false,
    },
    {
      title: "Sweet Heart",
      price: "1.500.000",
      features: [
        "Up to 800 jelly cups",
        "Premium booth setup",
        "4 jelly flavors",
        "Custom decorations",
        "5-hour service",
      ],
      isPopular: true,
    },
    {
      title: "Sultan Booth",
      price: "2.500.000",
      features: [
        "Up to 1200 jelly cups",
        "Luxury booth setup",
        "6 jelly flavors",
        "Custom decorations",
        "Professional staff",
        "8-hour service",
      ],
      isPopular: false,
    },
  ];

  return (
    <section
      id="packages"
      className="py-16 bg-gradient-to-b from-white to-pink-50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-900 mb-12">
          Our Party Packages
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Need something custom?</p>
          <button className="px-6 py-2 border-2 border-purple-500 text-purple-600 font-semibold rounded-full hover:bg-purple-50 transition-colors">
            Request Custom Package
          </button>
        </div>
      </div>
    </section>
  );
};

export default PackageInfo;
