import React from 'react';
import { Menu } from 'lucide-react';
import logo from '../assets/Unbridled-Wealth-Logo.png';

export default function Header() {
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
        <button className="md:hidden">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}