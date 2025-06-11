import React from "react";
import Hero from "../../Components/Hero/Hero";
import FeaturedSection from "../../Components/FeaturedSection/FeaturedSection";
import OurServicesSection from "../../Components/OurServicesSection/OurServicesSection";
import FaqSection from "../../Components/FaqSection/FaqSection";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <OurServicesSection></OurServicesSection>
      <FeaturedSection></FeaturedSection>
      <FaqSection></FaqSection>
    </div>
  );
};

export default Home;
