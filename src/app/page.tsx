'use client'
import React from 'react'
import Sponsors from './components/home/Sponsors';
import Slider from './components/home/Slider';

import About_2 from './components/home/About_2';

const Home: React.FC = () => {
  return (
  <>
      <Slider />
      <About_2/>
      <Sponsors/>
      <script src="/assets/js/jquery.js" />
      <script src="/assets/js/fontawesome.min.js" />
      <script src="/assets/js/waypoints.min.js" />
      <script src="/assets/js/bootstrap.min.js" />
      <script src="/assets/js/wow.min.js" />
      <script src="/assets/js/swiper.min.js" />
      <script src="/assets/js/jquery.countdown.min.js" />
      <script src="/assets/js/jquery.counterup.min.js"  />
      <script src="/assets/js/isotope.pkgd.min.js" />
      <script src="/assets/js/lightcase.js" />
      <script src="/assets/js/functions.js" />
  </>
  );
};



export default Home;
