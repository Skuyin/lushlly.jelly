import React from "react";

const PartyHero = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-900 to-pink-700 py-24 md:py-32">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/10 to-transparent"></div>

      {/* Jelly blob decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-pink-500/20 blur-2xl animate-float-slow"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-purple-500/20 blur-2xl animate-float-medium"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          Party <span className="text-amber-300">Packages</span>
        </h1>
        <p className="text-xl md:text-2xl text-pink-100 max-w-2xl mx-auto mb-8">
          Make your celebration unforgettable with our jelly-themed party
          services
        </p>
        <a
          href="#packages"
          className="inline-block px-8 py-3 bg-amber-400 hover:bg-amber-500 text-white font-semibold rounded-full shadow-lg transition-all hover:scale-105"
        >
          Explore Packages
        </a>
      </div>
    </section>
  );
};

export default PartyHero;
