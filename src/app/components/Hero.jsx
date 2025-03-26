"use client";

import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-900 to-pink-700">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNwYXR0ZXJuKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')]"></div>
        </div>

        {/* Content Container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            {/* Animated Tagline */}
            <div className="mb-6 animate-fade-in">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-pink-100 bg-white/10 rounded-full backdrop-blur-sm">
                Since 2015
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
              <span className="block">Crafting Jelly</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-pink-200">
                Masterpieces
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-pink-100 max-w-3xl mx-auto mb-10 animate-slide-up delay-100">
              Where art meets flavor in every wobbly, delightful creation
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in delay-200">
              <Link
                href="/about"
                className="px-8 py-3 text-lg font-medium text-purple-900 bg-amber-300 rounded-full hover:bg-amber-200 transition-colors shadow-lg hover:shadow-xl"
              >
                Discover Our Story
              </Link>
              <Link
                href="/menu"
                className="px-8 py-3 text-lg font-medium text-white bg-transparent border-2 border-white rounded-full hover:bg-white/10 transition-colors"
              >
                Explore Menu
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>

        {/* Floating Jelly Shapes (CSS-only) */}
        <div className="absolute top-1/4 left-10 w-16 h-16 rounded-full bg-pink-400/20 blur-xl animate-float-slow"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 rounded-full bg-purple-400/15 blur-xl animate-float-medium"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 rounded-full bg-amber-300/10 blur-xl animate-float-fast"></div>
      </div>

      {/* Rest of your AboutUs component... */}

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        @keyframes float-medium {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-15px) translateX(-15px);
          }
        }
        @keyframes float-fast {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-10px) translateX(5px);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-slide-up {
          animation: slide-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }
        .delay-100 {
          animation-delay: 100ms;
        }
        .delay-200 {
          animation-delay: 200ms;
        }
      `}</style>
    </div>
  );
};

export default Hero;
