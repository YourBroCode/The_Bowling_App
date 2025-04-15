import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { MdMenu } from 'react-icons/md';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleAnchorClick = () => {
    setMenuOpen(false);
  };

  const navbarItems = [
    {
      name: 'Home',
      id: 'home',
    },
    {
      name: 'News',
      id: 'news',
    },
    {
      name: 'About Us',
      id: 'about-us',
    },
    {
      name: 'Packages',
      id: 'packages',
    },
  ];

  return (
    <div className="navbar flex justify-between items-center w-full h-[80px] text-white sm:px-4 md:px-10">
      {/* Left Section: Logo */}
      <div className="left mt-10  md:mt-0 w-[250px] md:min-w-[200px] md:w-[170px] md:h-[70px] lg:mt-8 lg:w-[300px] lg:h-[100px]">
        <img
          src={logo}
          alt="logo"
          className="w-full md:size-full"
          loading="eager"
        />
      </div>

      {/* Middle Section: Links - Visible on larger screens */}
      <div className="hidden md:flex md:mr-[15px] lg:mr-[32px]">
        <ul className="flex text-[20px] text-nowrap lg:mt-5 md:gap-8 lg:gap-16 items-center mr-[12px]">
          {navbarItems.map((item, idx) => (
            <li
              key={idx}
              className="relative group hover:text-[#0596AA] cursor-pointer p-1.5 font-semibold w-[98px]"
            >
              <a
                onClick={handleAnchorClick}
                href={`#${item.id}`}
                className="relative inline-block"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 h-[3px] bg-[#0596AA] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Hamburger Menu Icon - Visible on smaller screens */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-4xl mt-[30px] mr-[4px]">
          {menuOpen ? <RiCloseLine /> : <MdMenu />}
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`absolute top-[80px] left-0 w-full overflow-hidden bg-gray-800 text-white transition-all duration-300 ease-in ${
          menuOpen ? 'h-[calc(100svh-80px)] py-4' : 'h-0'
        } flex flex-col justify-center items-center gap-6 md:hidden select-none`}
      >
        {menuOpen &&
          navbarItems.map((item, idx) => (
            <div
              key={idx}
              className="w-full text-2xl text-center py-3 hover:bg-gray-700"
            >
              <a
                onClick={handleAnchorClick}
                href={`#${item.id}`}
                className="border-b border-b-[#f72f4f]"
              >
                {item.name}
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Navbar;
