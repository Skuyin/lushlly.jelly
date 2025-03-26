"use client";

const CallToAction = () => {
  return (
    <div className="space-y-12 p-4">
      {/* Location Section */}
      <div className="bg-gradient-to-r from-amber-300 to-pink-400 rounded-3xl shadow-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-8 p-8">
          {/* Map */}
          <div className="flex-1 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.612010932659!2d106.9701056750384!3d-6.31459029367475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6992681fe69f47%3A0xf1f3e1284d370436!2sRuko%20Villa%20Nusa%20Indah%202%2C%20Jl.%20Vila%20Nusa%20Indah%2C%20Bojong%20Kulur%2C%20Kec.%20Gn.%20Putri%2C%20Kabupaten%20Bogor%2C%20Jawa%20Barat%2016969!5e0!3m2!1sid!2sid!4v1742253616559!5m2!1sid!2sid"
              style={{ width: "100%" }} // Gunakan CSS
              height="500"
              className="rounded-xl shadow-lg border-4 border-white"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Location
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-white mb-6">
              Ruko Villa Nusa Indah 2
            </h2>
            <a
              href="https://maps.app.goo.gl/XjWZ9zvAsNSeSJpJA"
              className="inline-block px-6 py-3 bg-white text-pink-600 font-bold rounded-full shadow-lg hover:scale-105 transition-transform"
            >
              Kunjungi Lokasi
            </a>
          </div>
        </div>
      </div>

      {/* Party Section */}
      <div className="bg-gradient-to-r from-purple-400 to-blue-400 rounded-3xl shadow-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 p-8">
          {/* Image */}
          <div className="flex-1 w-full">
            <img
              className="w-full h-80 object-cover rounded-xl border-4 border-white shadow-lg"
              src="https://thumbs.dreamstime.com/b/blue-birthday-cake-presents-hats-colorful-balloons-over-light-grey-94034395.jpg"
              alt="Party decoration"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-right">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Pesta
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-white mb-6">
              Biarkan kami meriahkan pesta Anda
            </h2>
            <a
              href="/party"
              className="inline-block px-6 py-3 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:scale-105 transition-transform"
            >
              Lihat Paket
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
