import React from 'react';
import { Calendar } from 'lucide-react';

export default function Hero() {
  return (
		<div className='relative bg-[#644c78] text-white py-20'>
			<div className='container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center'>
				<div className='text-center md:text-left'>
					<h1 className='text-4xl md:text-5xl font-bold mb-6'>
						Take Control of Your Financial Future
					</h1>
					<p className='text-xl mb-8'>
						Expert wealth management and financial education to help
						you build lasting prosperity.
					</p>
					<a
						href='https://calendly.com/jacarlson/meet-with-jack'
						target='_blank'
						rel='noopener noreferrer'
						className='inline-flex items-center justify-center bg-[#e1a463] hover:bg-[#BF864D] px-8 py-4 rounded-md text-lg font-semibold transition-colors'
					>
						<Calendar className='mr-2 h-5 w-5' />
						Schedule a Free Consultation
					</a>
				</div>
				<div className='flex justify-center md:justify-start'>
					<img
						src='https://unbridledwealth.com/wp-content/uploads/2021/03/Jack-Carlson-300x300.jpg'
						alt='Jack Carlson'
						className='rounded-lg shadow-xl'
					/>
				</div>
			</div>
		</div>
  );
}