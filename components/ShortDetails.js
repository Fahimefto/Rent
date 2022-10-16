import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function ShortDetails() {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full'>
        <div className='overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm'>
          <img
            src=
              'https://images.rentals.ca/property-pictures/medium/vancouver-bc/468498/apartment-5596387.jpg'
            
            alt=''
            className='object-cover w-full h-64'
            
          />
          <div className='p-5 border border-t-0'>
            <p className='mb-3 text-xs font-semibold tracking-wide uppercase'>
              <Link
                href='#'
                className='transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700'
                aria-label='Category'
                title='traveling'
              >
                Full Mess
              </Link>
              <span className='text-gray-600'>— 28 Dec 2020</span>
            </p>
            <Link
              href='#'
              aria-label='Category'
              title='Visit the East'
              className='inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700'
            >
              Modina Market,Sylhet
            </Link>
            <p className='mb-2 text-gray-700'>
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <Link
              href='#'
              aria-label=''
              className='inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800'
            >
              See Details
            </Link>
          </div>
        </div>
        <div className='overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm'>
          <img
            src='https://images.rentals.ca/property-pictures/medium/vancouver-bc/468498/apartment-5596387.jpg'
            alt=''
          />
          <div className='p-5 border border-t-0'>
            <p className='mb-3 text-xs font-semibold tracking-wide uppercase'>
              <Link
                href='#'
                className='transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700'
                aria-label='Category'
                title='traveling'
              >
                Two rooms
              </Link>
              <span className='text-gray-600'>— 28 Dec 2020</span>
            </p>
            <Link
              href='#'
              aria-label='Category'
              title='Simple is better'
              className='inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700'
            >
              Topobon R/A,Sylhet
            </Link>
            <p className='mb-2 text-gray-700'>
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <Link
              href='#'
              aria-label=''
              className='inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-purple-800'
            >
              See Details
            </Link>
          </div>
        </div>
        <div className='overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm'>
          <img
            src='https://images.rentals.ca/property-pictures/medium/vancouver-bc/468498/apartment-5596387.jpg'
            className='object-cover w-full h-64'
            alt=''
          />
          <div className='p-5 border border-t-0'>
            <p className='mb-3 text-xs font-semibold tracking-wide uppercase'>
              <Link
                href='#'
                className='transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700'
                aria-label='Category'
                title='traveling'
              >
                Single Room
              </Link>
              <span className='text-gray-600'>— 28 Dec 2020</span>
            </p>
            <Link
              href='#'
              aria-label='Category'
              title='Film It!'
              className='inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700'
            >
              Kali Bari,Sylhet
            </Link>
            <p className='mb-2 text-gray-700'>
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <Link
              href='#'
              aria-label=''
              className='inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800'
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
