import React from 'react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import logo from '../../assets/logo.png'
function Footer() {
  return (
    <footer
      className="bg-[#001D38] text-white text-[24px] leading-[30px] "
      id="footer"
      style={{ fontFamily: 'Montserrat' }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-center gap-14 md:gap-20 items-center lg:items-start p-10">
        <div className="w-[300px] flex flex-col items-center md:items-start">
          <img
            src={logo}
            alt="Brampton Bowling Centre Logo"
            className="w-full mb-4"
            loading="eager"
          />
          <div className="flex w-full space-x-4 justify-center items-center">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://g.co/kgs/5vZaZoS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGoogleCircle className="text-[27px]" />
            </a>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-20 text-center lg:text-left ">
          <div className="flex flex-col">
            <h3 className="font-bold mb-4 md:text[24px]">News</h3>
            <a
              href="#schedule-page"
              className="hover:underline text-[20px] md:text-[22px] text-[#D9D9D9]"
            >
              Schedule
            </a>
            <a href="#news" className="hover:underline text-[#D9D9D9]">
              News
            </a>
          </div>

          <div className="flex flex-col">
            <h3 className="font-semibold mb-4 md:text[24px]">About Us</h3>
            <a
              href="#"
              className="hover:underline text-[20px] md:text-[22px] text-[#D9D9D9]"
            >
              Our Values
            </a>
            <a
              href="#"
              className="hover:underline text-[20px] md:text-[22px] text-[#D9D9D9]"
            >
              Testimonials
            </a>
          </div>

          <div className="flex flex-col">
            <h3 className="font-semibold mb-4 md:text[24px]">Packages</h3>
            <a
              href="#"
              className="hover:underline text-[20px] md:text-[22px] text-[#D9D9D9]"
            >
              10 Pin Package
            </a>
            <a
              href="#"
              className="hover:underline text-[20px] md:text-[22px] text-[#D9D9D9]"
            >
              5 Pin Package
            </a>
          </div>

          <div className="flex flex-col">
            <h3 className="font-semibold mb-4 md:text[24px]">Contact Us</h3>
            <p className="hover:underline text-[20px] md:text-[22px] text-[#D9D9D9]">
              <a href="tel:+19054592711">+1 905-459-2711</a>
            </p>
            <a
              href="mailto:bramptonbowl@yahoo.ca"
              className="hover:underline text-[20px] md:text-[22px] text-[#D9D9D9]"
            >
              bramptonbowl@yahoo.ca
            </a>
            <p className="hover:underline text-[20px] md:text-[22px] text-[#D9D9D9]">
              12 Beech St, Brampton, ON L6V 1V1, Canada
            </p>
          </div>
        </div>
      </div>

     <div className="border-t border-gray-500 mt-8 py-8 text-center text-xs">
  © {new Date().getFullYear()} Brampton Bowling Centre | All rights reserved
</div>

    </footer>
  );
}

export default Footer;
