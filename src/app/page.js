import Image from "next/image";
import Hero from "./components/Hero";
import Products from "./components/Products";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <CallToAction />
     
    </>
  );
   
}
