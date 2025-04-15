import NewsSlider from '@/components/NewSlider';
import Timetable from '@/components/Timetable';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import vector from '../../assets/Vector (1).png';
import vector2 from '../../assets/Vector (2).png';

import React, { useState } from 'react';

const Vector = () => {
  return (
    <div>
      <img className="w-[70%]" src={vector} alt="" />
    </div>
  );
};
const Vector2 = () => {
  return (
    <div className="flex justify-end">
      <img className="w-[70%] flex justify-end" src={vector2} alt="" />
    </div>
  );
};

const SchedulePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col w-full md:h-[800px]" id="schedule-page">
      <div
        className="flex flex-col md:flex-row items-start h-full w-full transition-all duration-1000 ease-[ease-in-out]"
        style={{
          transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        }}
      >
        {/* Schedule Section */}
        <div
          className={`schedule w-full px-5 pt-10 pb-20 md:pb-10 md:px-10 flex flex-col gap-16 md:gap-12 justify-center items-center transition-all duration-1000 ease-[ease-in-out] ${
            isOpen ? 'md:w-[20%]' : 'md:w-[80%]'
          } bg-[#250e1b] h-full`}
          style={{
            transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          }}
        >
          <div
            className={`text-[80px] md:text-[140px] md:leading-[140px] lg:text-[180px] font-Bauhaus93 lg:leading-[180px] text-[#f72f4f] flex flex-col justify-center font-bold transition-all duration-1000 ease-[ease-in-out] z-2 ${
              isOpen ? 'md:-rotate-90' : 'md:rotate-0'
            } `}
            style={{
              transitionTimingFunction:
                'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              zIndex: '2',
            }}
          >
            Schedule
          </div>
          {!isOpen && <Timetable isOpen={isOpen} />}
        </div>

        {/* News Section */}
        <div
          className={`news relative w-full py-8 md:py-0 flex flex-col items-center justify-center transition-all duration-1000 ease-in ${
            isOpen ? 'md:w-[80%]' : 'md:w-[20%]'
          } bg-white text-white h-full p-4`}
          style={{
            transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          }}
          id="news"
        >
          <div
            className={`text-end text-[90px] leading-[80px] md:text-[140px] md:leading-[140px]  lg:text-[180px] font-Bauhaus93 lg:leading-[180px] text-[#0f96aa] transition-all duration-1000 ease-[ease-in-out] m-4 md:m-0 ${
              isOpen ? 'md:rotate-0' : 'md:-rotate-90'
            } `}
            style={{
              transitionTimingFunction:
                'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              zIndex: '2',
            }}
          >
            News
          </div>
          {isOpen && (
            <div
              className="newsSliderContainer w-full flex justify-center"
              style={{ fontFamily: 'Montserrat' }}
            >
              <NewsSlider />
            </div>
          )}
          <div
            onClick={handleClick}
            className={`button text-[80px] font-semibold cursor-pointer  absolute flex justify-center items-center w-[90px] h-[100px] left-[50%] translate-x-[-50%] md:translate-x-0 rotate-90 md:rotate-0  md:top-[50%] rounded-[50%]
            ${
              isOpen
                ? 'text-white bg-[#250e1b] -top-12 md:left-[-3.9rem] flex justify-center items-center'
                : 'text-[#0f96aa] bg-white -top-12 p-4 md:-left-8'
            }
            `}
          >
            {isOpen ? <Vector2 /> : <Vector />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;
