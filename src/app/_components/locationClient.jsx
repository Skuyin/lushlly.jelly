"use client";
import { useState } from "react";

const locationsData = [
  {
    city: "Jakarta",
    areas: [
      {
        name: "Jagakarsa",
        address:
          "Jl. M Kahfi II No.50, Jagakarsa, Jakarta Selatan, DKI Jakarta",
      },
      {
        name: "Ciganjur",
        address:
          "Jl. Ciganjur Raya No.18, Jagakarsa, Jakarta Selatan, DKI Jakarta",
      },
    ],
  },
  {
    city: "Bandung",
    areas: [
      {
        name: "Dago",
        address: "Jl. Ir. H. Juanda No.97, Dago, Bandung, Jawa Barat",
      },
    ],
  },
];

export default function LocationClient() {
  const [expandedCity, setExpandedCity] = useState(null);

  const toggleCity = (city) => {
    setExpandedCity(expandedCity === city ? null : city);
  };

  return (
    <>
      <div className="p-6 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-pink-600 font-comic">
          Our Locations
        </h2>
        <div className="space-y-6">
          {locationsData.map((loc, index) => (
            <div
              key={index}
              className="border-2 border-purple-200 rounded-2xl p-4 bg-gradient-to-br from-pink-50 to-purple-50 shadow-lg hover:shadow-xl transition-all"
            >
              <button
                onClick={() => toggleCity(loc.city)}
                className={`w-full text-left font-bold text-xl p-4 rounded-xl transition-all flex items-center justify-between
                ${
                  expandedCity === loc.city
                    ? "bg-purple-500 text-white"
                    : "bg-pink-400 text-white hover:bg-purple-400"
                }`}
              >
                <span>🏙️ {loc.city}</span>
                <span className="text-2xl">
                  {expandedCity === loc.city ? "👇" : "👉"}
                </span>
              </button>

              {expandedCity === loc.city && (
                <div className="mt-4 space-y-3 animate-fadeIn">
                  {loc.areas.map((area, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-white border-2 border-pink-200 rounded-xl shadow-md hover:scale-[1.02] transition-transform"
                    >
                      <p className="font-bold text-lg text-purple-700 flex items-center">
                        <span className="mr-2">📍</span> {area.name}
                      </p>
                      <p className="text-sm text-gray-600 mt-1 pl-6">
                        {area.address}
                      </p>
                      <div className="mt-2 flex justify-end">
                        <button className="px-3 py-1 bg-pink-200 text-pink-700 rounded-full text-sm font-semibold hover:bg-pink-300 transition-colors">
                          View Map
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out forwards;
          }
        `}</style>
      </div>
    </>
  );
}
