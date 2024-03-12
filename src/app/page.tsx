'use client'
import React from 'react'
import Sponsors from './components/home/Sponsors';
import Slider from './components/home/Slider';
import About_2 from './components/home/About_2';
import dotenv from 'dotenv';
import ProductSection from './components/home/ProductSection';
dotenv.config();

const Home: React.FC = () => {
  return (
  <>
    <Slider />
    <About_2/>
    <ProductSection/>
    <Sponsors/>
  </>
  );
};

export default Home;
