import React from 'react';
import { PlayCircle } from 'lucide-react';
import video from '../assets/ibc-breakdown.mp4';
import poster from '../assets/poster.png';
import IBC_Guide from '../assets/IBC_Guide.pdf';

export default function VideoSection() {
  return (
		<div className='py-20 bg-gray-50'>
			<div className='container mx-auto px-4'>
				<div className='max-w-4xl mx-auto'>
					<h2 className='text-3xl font-bold text-[#644c78] text-center mb-8'>
						Learn How We Can Help Secure Your Financial Future
					</h2>
					<div className='aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden shadow-xl'>
						<video
							className='w-full cursor-pointer'
							poster={poster}
							controls
						>
							<source
								src={video}
								type='video/mp4'
							/>
							Your browser does not support the video tag.
						</video>
					</div>
					<div className='mt-8 text-center'>
						<a
							href={IBC_Guide}
							className='inline-flex items-center bg-[#644c78] hover:bg-[#7d609a] text-white px-6 py-3 rounded-md transition-colors'
							download
						>
							<PlayCircle className='mr-2 h-5 w-5' />
							Download Free Guide
						</a>
					</div>
				</div>
			</div>
		</div>
  );
}