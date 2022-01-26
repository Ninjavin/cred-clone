import React from "react";
import AppRating from "../components/AppRating/AppRating";
import BrandsLove from "../components/BrandsLove/BrandsLove";
import Header from "../components/common/Header/Header";
import CredExperience from "../components/CredExperience/CredExperience";
import CredSecurity from "../components/CredSecurity/CredSecurity";
import CredStory from "../components/CredStory/CredStory";
import FeelSpecial from "../components/FeelSpecial/FeelSpecial";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection/HeroSection";
import MobileScroll from "../components/MobileScroll/MobileScroll";
import ProductShowcase from "../components/ProductShowcase/ProductShowcase";
import WindowPeak from "../components/WindowPeak/WindowPeak";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductShowcase />
      <FeelSpecial />
      <BrandsLove />
      <CredExperience />
      <MobileScroll />
      <div className="non-mobile">
        <WindowPeak />
      </div>
      <CredSecurity />
      <CredStory />
      <AppRating />
      <Footer />
    </>
  );
};

export default HomePage;
