import React from "react";
import scaleImage from "../../../../public/scale.png";
import Hero from "@/components/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "castle",
};

function Scale() {
  return (
    <Hero
      imageSrc={scaleImage}
      imageAlt="scale"
      content="May there be gentle and dreams"
      gradientColor="from-pink-300/30"
    />
  );
}

export default Scale;
