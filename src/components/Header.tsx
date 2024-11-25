import React, { useState, useEffect, useRef } from 'react';
import { Menu } from 'lucide-react';
import logo from '../assets/Unbridled-Wealth-Logo.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white text-white py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
		<a className='cursor-pointer' href="https://unbridledwealth.com">
			<img 
			src={logo} 
			alt="Unbridled Wealth"
			className="h-12"
			/>
		</a>
        <nav className="hidden md:flex space-x-8">
          <a href="https://unbridledwealth.com/about/" className="text-[#644c78] relative after:absolute after:bg-[#644c78] after:bottom-[14px] after:left-1/2 after:h-[2px] after:w-0 hover:after:w-full after:-translate-x-1/2 after:transition-all after:duration-300">ABOUT</a>
          <a href="https://unbridledwealth.com/events/" className="text-[#644c78] relative after:absolute after:bg-[#644c78] after:bottom-[14px] after:left-1/2 after:h-[2px] after:w-0 hover:after:w-full after:-translate-x-1/2 after:transition-all after:duration-300">EVENTS</a>
          <a href="https://unbridledwealth.com/resources" className="text-[#644c78] relative after:absolute after:bg-[#644c78] after:bottom-[14px] after:left-1/2 after:h-[2px] after:w-0 hover:after:w-full after:-translate-x-1/2 after:transition-all after:duration-300">RESOURCES</a>
          <a href="https://calendly.com/jacarlson/meet-with-jack" className="bg-[#e1a463] hover:bg-[#BF864D] px-6 py-2 rounded-md transition-colors">
            Schedule Consultation
          </a>
        </nav>
        <button 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6 text-[#644c78]" />
        </button>

        <div 
          ref={menuRef}
          className={`
            fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            md:hidden flex items-center justify-center
          `}
        >
          <div className="flex flex-col items-center space-y-8">
            <a href="https://unbridledwealth.com/about/" className="text-[#644c78]">ABOUT</a>
            <a href="https://unbridledwealth.com/events/" className="text-[#644c78]">EVENTS</a>
            <a href="https://unbridledwealth.com/resources" className="text-[#644c78]">RESOURCES</a>
            <a href="https://calendly.com/jacarlson/meet-with-jack" 
              className="bg-[#e1a463] hover:bg-[#BF864D] px-6 py-2 rounded-md transition-colors text-white"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}