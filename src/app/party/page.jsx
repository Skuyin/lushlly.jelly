import React from "react";
import PackageInfo from "../components/PackageInfo";
import PartyHero from "../components/PartyHero";

export const metadata = {
  title: "Lushly Jelly untuk Acara Spesialmu",
  description:
    "Pesan jelly dessert custom untuk ulang tahun, wedding, atau acara perusahaan. Tersedia paket hemat!",
  keywords: ["jelly untuk acara", "catering dessert", "paket party jelly"],
};

const Party = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            name: "Paket Party Lushly Jelly",
            startDate: "2024-12-31",
            endDate: "2024-12-31",
            eventAttendanceMode:
              "https://schema.org/OfflineEventAttendanceMode",
            eventStatus: "https://schema.org/EventScheduled",
          }),
        }}
      />
      <PartyHero />
      <PackageInfo />
    </>
  );
};

export default Party;
