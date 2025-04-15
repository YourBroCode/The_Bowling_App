import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import video from '../../assets/hero.mp4';

const Homepage = () => {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ fontFamily: 'Montserrat' }}
      id="home"
    >
      <video
        src={video}
        autoPlay
        loop
        muted
        preload="auto"
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 filter brightness-80"
      />

      <div className="relative z-10">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default Homepage;
