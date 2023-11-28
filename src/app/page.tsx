'use client'
import React from 'react'
import Sponsors from './components/home/Sponsors';
import Slider from './components/home/Slider';
import About_2 from './components/home/About_2';
import { useSearchParams } from 'next/navigation';

const Home: React.FC = () => {
  const path= useSearchParams().get("sexo");
  console.log(path)
  return (
  <>
    <Slider />
    <About_2/>
    <Sponsors/>
  </>
  );
};



export default Home;
