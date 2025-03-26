import React from "react";

export const metadata = {
  title: "Tentang Kami - Lushly Jelly",
  description:
    "Lushly Jelly berkomitmen menyajikan jelly minuman & dessert premium dengan 100% bahan alami sejak 2025.",
  openGraph: {
    title: "Tentang Kami - Lushly Jelly",
    images: "/og-image.jpg",
  },
};

const About = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Lushly Jelly",
            foundingDate: "2025-05-15",
            founder: {
              "@type": "Person",
              name: "Chef Lushly",
            },
          }),
        }}
      />
      <div className="bg-gradient-to-b  py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
              Our Jelly Journey
            </h1>
            <p className="text-xl text-purple-700 max-w-3xl mx-auto">
              Crafting delightful jelly experiences since 2015 with passion,
              innovation, and the finest ingredients.
            </p>
          </div>

          {/* Story Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {/* Our Story */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-3xl font-bold text-pink-600 mb-6 pb-4 border-b-2 border-pink-100">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  LushJelly began as a small home kitchen experiment in Jakarta,
                  where our founder fell in love with the art of jelly-making.
                  What started as a passion project quickly grew into a beloved
                  brand known for its innovative textures and flavors.
                </p>
                <p>
                  Today, we operate multiple stores across Indonesia, each
                  serving our signature jelly creations made with premium
                  ingredients and meticulous craftsmanship.
                </p>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="bg-gradient-to-br from-pink-200 to-purple-300 rounded-2xl shadow-lg flex items-center justify-center">
              <div className="text-white text-center p-8">
                <span className="text-6xl font-light block mb-4">"</span>
                <p className="text-xl italic">
                  We believe every bite should be a moment of joy
                </p>
              </div>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {/* Vision */}
            <div className="bg-gradient-to-br from-purple-600 to-pink-500 p-8 rounded-2xl text-white shadow-xl">
              <h2 className="text-3xl font-bold mb-6 pb-4 border-b border-white/20">
                Our Vision
              </h2>
              <p className="text-lg leading-relaxed">
                To redefine dessert experiences across Southeast Asia by
                pioneering innovative jelly creations that combine traditional
                techniques with modern culinary artistry.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h2 className="text-3xl font-bold text-purple-900 mb-6 pb-4 border-b-2 border-pink-100">
                Our Mission
              </h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="block w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3"></span>
                  <span>
                    Source the highest quality ingredients sustainably
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="block w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3"></span>
                  <span>
                    Innovate while respecting traditional dessert craftsmanship
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="block w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3"></span>
                  <span>
                    Create memorable experiences through exceptional service
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="block w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3"></span>
                  <span>
                    Expand accessibility to premium dessert experiences
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-purple-900 mb-12">
              Meet Our Jelly Artisans
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="h-48 bg-gradient-to-r from-pink-100 to-purple-100 flex items-center justify-center">
                    <span className="text-5xl text-pink-400">
                      {member.initials}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-purple-900">
                      {member.name}
                    </h3>
                    <p className="text-pink-600 mb-3">{member.position}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center text-purple-900 mb-12">
                Our Journey
              </h2>
              <div className="relative">
                {/* Timeline line */}
                <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-pink-300 to-purple-300 transform -translate-x-1/2"></div>

                {/* Timeline items */}
                <div className="space-y-12 md:space-y-0">
                  {timelineData.map((item, index) => (
                    <div
                      key={index}
                      className={`relative flex flex-col md:flex-row ${
                        index % 2 === 0 ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <div className="md:w-1/2 p-4 md:p-8">
                        <div
                          className={`bg-white p-6 rounded-xl shadow-lg ${
                            index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                          }`}
                        >
                          <h3 className="text-xl font-bold text-pink-600 mb-2">
                            {item.year}
                          </h3>
                          <h4 className="text-lg font-semibold text-purple-900 mb-3">
                            {item.title}
                          </h4>
                          <p className="text-gray-700">{item.description}</p>
                        </div>
                      </div>
                      <div className="hidden md:block md:w-1/2"></div>
                      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 md:translate-x-0 w-6 h-6 rounded-full bg-pink-500 border-4 border-white shadow-md"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Timeline data
const timelineData = [
  {
    year: "2015",
    title: "Humble Beginnings",
    description:
      "Started as a home-based jelly dessert business in Jakarta with just 3 signature flavors.",
  },
  {
    year: "2017",
    title: "First Store Opening",
    description:
      "Opened our first physical store in South Jakarta, introducing our now-famous Jelly Art Cake.",
  },
  {
    year: "2019",
    title: "National Recognition",
    description:
      "Featured in 'Indonesia's Top Dessert Spots' magazine and expanded to 5 cities.",
  },
  {
    year: "2021",
    title: "Innovation Lab",
    description:
      "Established our R&D center to develop healthier jelly alternatives and new textures.",
  },
  {
    year: "2023",
    title: "Regional Expansion",
    description:
      "Launched our first international store in Singapore with a new tropical flavor line.",
  },
];

// Team data
const teamMembers = [
  {
    initials: "AJ",
    name: "Aisha Jasmine",
    position: "Founder & Head Chef",
    bio: "Jelly enthusiast with 15 years of patisserie experience. Creates all our signature recipes.",
  },
  {
    initials: "DR",
    name: "Dewi Ratna",
    position: "Innovation Director",
    bio: "Food scientist specializing in texture development and healthy alternatives.",
  },
  {
    initials: "TS",
    name: "Teguh Santoso",
    position: "Operations Manager",
    bio: "Ensures every store delivers consistent quality and excellent service.",
  },
  {
    initials: "LM",
    name: "Lia Maharani",
    position: "Creative Director",
    bio: "Designs our stunning jelly presentations and store experiences.",
  },
];

export default About;
