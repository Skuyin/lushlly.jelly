import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-gradient-to-br from-pink-700 to-purple-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-3">
        {/* Brand & Address */}
        <div className="text-center sm:text-left">
          <h1 className="text-3xl font-bold mb-2">
            Lush<span className="text-yellow-300">Jelly</span>
          </h1>
          <p className="text-lg">Jl. Depok Marggona</p>
        </div>

        {/* Contact Info */}
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <div className="space-y-2">
            <p>+62 4545 4343</p>
            <p>jelly@gmail.com</p>
          </div>
        </div>

        {/* Social Media */}
        <div className="text-center sm:text-right">
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex justify-center sm:justify-end space-x-4">
            <a
              href="#"
              className="bg-white text-pink-500 w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            >
              IG
            </a>
            <a
              href="#"
              className="bg-white text-pink-500 w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            >
              TT
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/30 text-center">
        <p>© {new Date().getFullYear()} LushJelly. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
