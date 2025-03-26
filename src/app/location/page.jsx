import LocationClient from "../components/locationClient";

export const metadata = {
  title: "Lokasi & Jam Buka - Lushly Jelly",
  description:
    "Kunjungi outlet kami di Jakarta atau pesan online untuk pengantaran seluruh Indonesia.",
};

export default function LocationC() {
  return (
    <>
      <LocationClient />
    </>
  );
}
