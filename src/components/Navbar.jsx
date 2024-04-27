import { useState } from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Our Work', target: 'our-work' },
    { label: 'Chalo', target: 'our-work' },
    { label: 'About Us', target: 'about-us' },
    { label: 'Team', target: 'team' },
    { label: 'Reviews ', target: 'review' },
    { label: 'Contact', target: 'contact' },
  ];

  return (
    <div className="fixed z-50 w-full px-4 sm:px-20 py-4 sm:py-8 font-['Neue Montreal'] flex justify-between items-center text-center">
      <div className="logo">
        <a href="#"><img src="https://i.postimg.cc/rwfBnyqH/Pi7-lo-removebg-preview.png" alt="" width="70px" /></a>
      </div>
      <div className="hidden sm:flex gap-4 sm:gap-10">
      {menuItems.map((item, index) => (
  <Link
    to={item.target}
    smooth={true}
    duration={500}
    key={index}
    className={`text-md sm:text-lg capitalize font-light ${
      index === 4 ? 'lg:text-xl' : ''
    } cursor-pointer`}
  >
    {item.label}
  </Link>
))}
      </div>
      <div className="sm:hidden">
        <button
          className="block text-gray-800 hover:text-gray-900 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="sm:hidden absolute top-full right-12 bg-zinc-900 w-[18vw] rounded-md">
          <div className="flex flex-col gap-2 ">
            {menuItems.map((item, index) => (
              <Link
                to={item.target}
                smooth={true}
                duration={500}
                key={index}
                className="block py-2 text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
