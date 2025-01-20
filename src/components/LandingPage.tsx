import React from 'react'
import HeroSection from './HeroSection'
import FeatureSection from './FeatureSection'
import Footer from './Footer'
import Navbar from './Navbar'

const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection />
      <FeatureSection />
      <Footer />
    </div>
  );
}

export default LandingPage
