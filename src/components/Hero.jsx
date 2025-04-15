import React from 'react';
import { MdLocationOn } from 'react-icons/md';

const Hero = () => {
  return (
    <div className="hero text-white  mt-12 md:ml-[0vw] lg:ml-[] xl:ml-[]">
      <div className="heading px-5 sm:px-0 text-[90px] leading-[80px] sm:text-[120px] sm:leading-[120px] md:text-[140px] md:leading-[140px] lg:text-[190px] lg:leading-[180px] font-Bauhaus93 text-[#f72f4f]">
        <div className="md:text-nowrap  sm:text-center">BOWL YOUR</div>
        <div className="md:text-nowrap  sm:text-center">WAY TO FUN</div>
      </div>
      <div className="desc flex gap-3 px-5 sm:px-0 pt-3 flex-col text-[15px] lg:text-[20px]">
        <div className="1 sm:text-center">
          Enjoy Lanes, Games, and Great Times Together at Brampton Bowling
          Centre
        </div>
        <div className="2">
          <span className="flex sm:justify-center items-center gap-3">
            <MdLocationOn className="text-[30px]" />
            12 Beech St, Brampton, ON L6V 1V1, Canada
          </span>
        </div>
      </div>
      <div className="w-full flex sm:justify-center items-center mt-5 mb-20">
        <div className="button w-[200px] bg-[#0f96aa] flex justify-center items-center p-3 rounded-[30px] ml-3 md:ml-0">
          <a
            href="#footer"
            className="font-semibold h-full w-full outline-none text-center"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
