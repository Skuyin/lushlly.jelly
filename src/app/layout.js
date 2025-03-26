import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lushly Jelly - Premium Jelly Desserts",
  description:
    "Temukan dessert jelly premium dengan rasa unik dan tekstur sempurna. 100% natural, tanpa pengawet!",
  metadataBase: new URL("https://lushlyjelly.vercel.app"),
  openGraph: {
    images: "/og-image.jpg",
  },
  icons: {
    icon: "/og-image.ico", // Path relatif dari /public
    shortcut: "/og-image.svg", // Windows/Chrome
    apple: "/og-image.svg", // iPhone/iPad
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
