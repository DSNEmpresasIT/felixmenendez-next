'use client'
import React from 'react'
import Sponsors from './components/home/Sponsors';
import Slider from './components/home/Slider';
import About_2 from './components/home/About_2';
import dotenv from 'dotenv';
dotenv.config();

const Home: React.FC = () => {
  return (
  <>
    <Slider />
    <About_2/>
    <Sponsors/>
  </>
  );
};

export default Home;
