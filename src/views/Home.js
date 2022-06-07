import React, { useRef } from 'react';
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';

// import Cta from '../components/sections/Cta';
// <Cta split /> can be added after everything to get something like a newsletter TBF

const Home = () => {
  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <FeaturesTiles />
    </>
  );
}

export default Home;