import LocationClient from "../_components/locationClient";

export const metadata = {
  title: "Lokasi & Jam Buka - Lushly Jelly",
  description:
    "Kunjungi outlet kami di Jakarta atau pesan online untuk pengantaran seluruh Indonesia.",
};

export default function LocationC() {
  return (
    <>
      <LocationClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Bakery",
            name: "Lushly Jelly",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Jl. Jelly No. 123",
              addressLocality: "Jakarta",
              postalCode: "12345",
            },
            openingHours: "Mo-Sa 10:00-20:00",
          }),
        }}
      />
    </>
  );
}
