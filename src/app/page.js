import Image from "next/image";
import Hero from "./components/Hero";
import Products from "./components/Products";
import CallToAction from "./components/CallToAction";

export const metadata = {
  title: "Lushly Jelly - Dessert Jelly Premium & Sehat",
  description:
    "Temukan jelly dessert lezat berbahan alami tanpa pengawet. Pesan sekarang untuk pengalaman rasa yang unik!",
  keywords: [
    "Minuman Jelly",
    "Jelly Enak",
    "jelly buah",
    "Minuman rendah kalori",
  ],
  alternates: {
    canonical: "https://lushlyjelly.vercel.app",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <CallToAction />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Bakery",
            name: "Lushly Jelly",
            description: "Toko dessert jelly premium dengan bahan alami",
            image: "https://lushlyjelly.vercel.app/og-image.jpg",
          }),
        }}
      />
    </>
  );
}
