"use client";

import { useState, useEffect } from "react";
import { useCategories } from "../../hooks/useCategories";

const MenuClient = () => {
  const { data: categories, loading, error } = useCategories();
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState("all");

  // Initialize active category when data loads
  useEffect(() => {
    if (categories && categories.length > 0) {
      setActiveCategory(categories[0].slug);
    }
  }, [categories]);

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-pink-500"></div>
        <p className="mt-2 text-gray-600">Loading menu...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <div className="bg-red-50 text-red-600 p-4 rounded-lg max-w-md mx-auto">
          <h3 className="font-bold">Failed to load menu</h3>
          <p className="mb-3">{error}</p>
        </div>
      </div>
    );
  }

  if (!categories || categories.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No categories available</p>
      </div>
    );
  }

  const activeCategoryData = categories.find(
    (category) => category.slug === activeCategory
  );

  let displayedProducts = [];
  if (activeCategoryData) {
    if (activeSubcategory === "all") {
      // For "all", show products from all subcategories
      if (activeCategoryData.subCategory) {
        displayedProducts = Array.isArray(
          activeCategoryData.subCategory.product
        )
          ? activeCategoryData.subCategory.product
          : [activeCategoryData.subCategory.product];
      }
    } else {
      // For specific subcategory
      if (activeCategoryData.subCategory?.slug === activeSubcategory) {
        displayedProducts = Array.isArray(
          activeCategoryData.subCategory.product
        )
          ? activeCategoryData.subCategory.product
          : [activeCategoryData.subCategory.product];
      }
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Menu",
            name: "Menu Lushly Jelly",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://lushlyjelly.vercel.app/menu",
            },
          }),
        }}
      />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-pink-600 text-center mb-6">
          Menu Kami
        </h1>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-6 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category.slug}
              onClick={() => {
                setActiveCategory(category.slug);
                setActiveSubcategory("all");
              }}
              className={`px-4 py-2 rounded-full font-semibold text-lg shadow-md transition-all duration-300 hover:scale-110 active:scale-95 ${
                activeCategory === category.slug
                  ? "bg-pink-500 text-white"
                  : "bg-pink-200 text-pink-800 hover:bg-pink-400 hover:text-white"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Subcategory Selection */}
        {activeCategoryData?.subCategory && (
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/4 flex md:flex-col gap-3 overflow-x-auto md:overflow-visible whitespace-nowrap pb-2">
              <button
                className={`px-4 py-2 rounded-full font-medium transition-all hover:scale-105 active:scale-95 flex-shrink-0 ${
                  activeSubcategory === "all"
                    ? "bg-yellow-500 text-white shadow-lg"
                    : "bg-yellow-200 text-yellow-800 hover:bg-yellow-400 hover:text-white"
                }`}
                onClick={() => setActiveSubcategory("all")}
              >
                All
              </button>
              <button
                key={activeCategoryData.subCategory.slug}
                onClick={() =>
                  setActiveSubcategory(activeCategoryData.subCategory.slug)
                }
                className={`px-4 py-2 rounded-full font-medium transition-all hover:scale-105 active:scale-95 flex-shrink-0 ${
                  activeSubcategory === activeCategoryData.subCategory.slug
                    ? "bg-yellow-500 text-white shadow-lg"
                    : "bg-yellow-200 text-yellow-800 hover:bg-yellow-400 hover:text-white"
                }`}
              >
                {activeCategoryData.subCategory.name}
              </button>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
              {displayedProducts.length > 0 ? (
                displayedProducts.map((product, index) => (
                  <div
                    key={`${product.title}-${index}`}
                    className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-105 active:scale-95 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative h-48 bg-gray-200 rounded-t-2xl overflow-hidden">
                      <img
                        src={product.image.url}
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                      {product.isBestSeller && (
                        <span className="absolute top-2 left-2 bg-yellow-300 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold shadow-md">
                          ⭐ Bestseller
                        </span>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-2xl font-bold text-pink-700 mb-1">
                        {product.title}
                      </h3>
                      <p className="text-gray-600 mb-3">
                        {product.shortDescription}
                      </p>
                      <p className="text-gray-800 mb-4 font-light">
                        {product.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-green-600">
                          Rp{product.price.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-500 text-lg">
                    No products found in this category
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        <style jsx global>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fade-in 0.5s ease-out forwards;
            opacity: 0;
          }
        `}</style>
      </div>
    </>
  );
};

export default MenuClient;
