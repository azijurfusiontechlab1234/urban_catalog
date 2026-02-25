import React from "react";
import HeroSection from "./HeroSection";
import ExperienceSection from "./ExperienceSection";
import PurposeGoals from "./PurposeGoals";
import StatsCounter from "./StatsCounter";
import TestimonialSlider from "./TestimonialSlider";
import LatestNews from "./LatestNews";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ExperienceSection />      
      <PurposeGoals />
      <StatsCounter />
      <TestimonialSlider />
      <LatestNews />
    </>
  );
};

export default Home;
