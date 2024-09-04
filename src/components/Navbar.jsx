import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-scroll';
import AOS from 'aos';
import "aos/dist/aos.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  return (
    <nav className='py-5 px-5 fixed top-0 z-50 w-full bg-white font-poppins' data-aos="zoom-in">
      <div className='flex items-center justify-between'>
        <p className='font-bold text-yellow-500 md:text-3xl text-2xl'>FOODOE</p>

        <GiHamburgerMenu 
          className='block md:hidden text-yellow-500 text-5xl rounded-full p-2 cursor-pointer' 
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        />
        
        <ul className='hidden md:flex items-center gap-x-8 text-slate-800 font-normal'>
          <li><Link to="home" smooth={true} offset={-100}  duration={500} className='underline-offset-4 hover:underline'>Home</Link></li>
          <li><Link to="about" smooth={true} offset={-100}  duration={500} className='underline-offset-4 hover:underline'>About us</Link></li>
          <li><Link to="work" smooth={true} offset={-100}  duration={500} className='underline-offset-4 hover:underline'>Works</Link></li>
          <li><Link to="testimonial" smooth={true} offset={-100}  duration={500} className='underline-offset-4 hover:underline'>Testimonial</Link></li>
          <li><Link to="contact" smooth={true} offset={-100}  duration={500} className='underline-offset-4 hover:underline'>Contact</Link></li>
          <li><FaShoppingCart className="text-xl" /></li>
          <button className="rounded-lg bg-yellow-500 text-white text-sm transition-all hover:scale-105 p-2">Order Now</button>
        </ul>
      </div>

      {isOpen && (
        <ul id="mobile-menu" className='block md:hidden mt-4 text-slate-800 font-bold'>
          <li><Link to="home" smooth={true} offset={-100}  duration={500} className='block py-2 px-4'>Home</Link></li>
          <li><Link to="about" smooth={true} offset={-100}  duration={500} className='block py-2 px-4'>About us</Link></li>
          <li><Link to="work" smooth={true} offset={-100}  duration={500} className='block py-2 px-4'>Works</Link></li>
          <li><Link to="testimonial" smooth={true} offset={-100}  duration={500} className='block py-2 px-4'>Testimonial</Link></li>
          <li><Link to="contact" smooth={true} offset={-100}  duration={500} className='block py-2 px-4'>Contact</Link></li>
          <li><FaShoppingCart className="text-2xl ml-5" /></li>
          <button className="rounded-lg bg-yellow-500 text-white text-sm transition-all hover:scale-105 ml-3 p-2">Order Now</button>
        </ul>
      )}
    </nav>
  );
};
