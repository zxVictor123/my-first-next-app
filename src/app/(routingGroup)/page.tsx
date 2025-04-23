import React from "react";
import homeImage from '../../../public/home.png'
import Hero from "@/components/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};
function Home() {
  return (
    <Hero
      imageSrc={homeImage}
      imageAlt="home"
      content="The stream flows through the desolate year"
      gradientColor="from-orange-200/50"
    />
  );
}

export default Home;
