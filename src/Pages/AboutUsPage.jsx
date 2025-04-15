import React, { useContext, useState } from 'react';
import Slider from '../components/Slider.jsx';
import { TestContext } from '@/components/Testcontext.jsx';
import ball from '../../assets/ball_crop.gif';
import ballnew from '../../assets/ballnew.png';

const AboutUsPage = () => {
  // const [testOpen, setTestOpen] = useState(true);

  const { testOpen, toggleTest } = useContext(TestContext);

  // const toggleTest = () => {
  //   setTestOpen(!testOpen);
  // };

  return (
    <div
      className={`about-page min-h-[81vh] relative w-full text-white bg-gradient-to-r from-[#c24459] to-[#891728] overflow-hidden
      `}
      id="about-us"
    >
      {/* About Us Section */}
      <div className="about-us pb-12 w-full xl:pb-20 2xl:pb-32 text-center flex flex-wrap-reverse justify-center md:text-center xl:flex-col-reverse md:flex-row items-center xl:items-end xl:justify-start text-4xl">
        <div className="about-text w-[70%] ml-0 md:ml-[40px]">
          <div className="about-heading text-[90px] leading-[80px] lg:text-[180px] font-Bauhaus93 lg:leading-[180px] text-center xl:text-start md:p-10">
            About Us
          </div>
          <div
            className="about-desc w-[100%] sm:w-[87%] text-[16px] leading-[20px] font-semibold sm:px-5 m-auto mt-10 text-center xl:text-start md:pl-12 md:m-0 md:text-[24px] md:leading-[30px] md:mt-0"
            style={{ fontFamily: 'Montserrat' }}
          >
            Welcome to Brampton Bowling Centre, a family-owned establishment since the 1960s. We pride ourselves on providing a welcoming atmosphere where everyone can have fun. Our mission is to blend vintage charm with modern bowling technology, creating a nostalgic and exciting experience for all ages. Our dedicated hosts offer exceptional customer service and genuine hospitality, making every visit memorable. Join us for a casual game, party, or league night and become part of a community that values togetherness and good times, where tradition meets innovation and every roll brings friends and families closer together.
          </div>
        </div>
        <div className="video mt-[-140px] xl:mt-[-50px] h-[400px] xl:absolute xl:top-16 xl:right-[-101px] xl:w-[600px] xl:h-[600px]">
          <img
            src={ballnew}
            className="h-full object-cover xl:rotate-0 xl:scale-x-100 rotate-[-90deg] scale-x-[-1]"
          />
        </div>
      </div>

      {testOpen && (
        <div
          className={`test h-1/2 transition-all duration-200 ease-in-out pb-10`}
          style={{ fontFamily: 'Montserrat' }}
        >
          <div className="w-full flex flex-col items-center justify-center h-full text-2xl mt-16 sm:mt-20">
            <div className="w-full flex flex-col ">
              <div className="heading text-[60px] sm:text-[90px] leading-[80px] lg:text-[180px] font-Bauhaus93 lg:leading-[180px] text-center md:text-center xl:text-end md:p-5">
                Testimonials
              </div>
              <div className="desc  w-[100%] sm:w-[100%] text-[16px] leading-[20px] font-semibold sm:pl-5 sm:pr-24 m-auto mt-5 sm:mt-10 text-center md:text-center xl:text-end md:pl-12 md:m-0 md:text-[24px] md:leading-[30px] md:mt-0">
                Discover Why Our Bowlers Keep Coming Back, in Their Own Words
              </div>
            </div>

            <div className="carousel w-full mt-10 mb-14">
              <Slider className="w-full" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUsPage;
