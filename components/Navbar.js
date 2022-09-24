import Image from "next/image";
import { useEffect, useState } from "react";
import { BarsArrowDownIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='bg-white shadow-md'>
      <div className='px-4 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
        <div className='relative top-0 flex items-center justify-between z-20'>
          <Link
            href='/'
            aria-label='Company'
            title='Company'
            className='inline-flex items-center'
          >
            <Image
              src='/asset/rent1.png'
              height={50}
              width={100}
              className='w-8 fill-white'
              alt='image'
            />
          </Link>
          <ul className='flex items-center hidden space-x-8 lg:flex'>
            <li>
              <Link
                href='/'
                title='Our product'
                className='font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href='/create'
                aria-label='Our product'
                title='Our product'
                className='font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400'
              >
                Create
              </Link>
            </li>
            <li>
              <Link
                href='/find'
                aria-label='Product pricing'
                title='Create'
                className='font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400'
              >
                Find
              </Link>
            </li>
            <li>
              <Link
                href='/about'
                aria-label='About us'
                title='About us'
                className='font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400'
              >
                About us
              </Link>
            </li>
          </ul>
          <ul className='flex items-center hidden space-x-8 lg:flex'>
            <li>
              <div className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white bg-emerald-900 transition duration-200  shadow-md rounded-md'>
                <Link href='/login'> Login</Link>
              </div>
            </li>
          </ul>
          <div className='lg:hidden '>
            <button
              aria-label='Open Menu'
              title='Open Menu'
              className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline'
              onClick={() => setIsMenuOpen(true)}
            >
              <BarsArrowDownIcon className='w-7' />
            </button>
            {isMenuOpen && (
              <div className='absolute top-0 left-0 w-full'>
                <div className='p-5 bg-white border rounded shadow-xl'>
                  <div className='flex items-center justify-between mb-4'>
                    <div></div>
                    <div>
                      <button
                        aria-label='Close Menu'
                        title='Close Menu'
                        className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <XMarkIcon className='w-5' />
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className='space-y-6 z-20 '>
                      <li>
                        <Link
                          href='/'
                          aria-label='Our product'
                          title='Our product'
                          className='font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                          Product
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/'
                          aria-label='Our product'
                          title='Our product'
                          className='font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                          Features
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/'
                          aria-label='Product pricing'
                          title='Product pricing'
                          className='font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                          Pricing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/'
                          aria-label='About us'
                          title='About us'
                          className='font-medium tracking-wide transition-colors duration-200 hover:bg-gray-200'
                        >
                          About us
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/login'
                          className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white bg-emerald-900 transition duration-200  shadow-md rounded-md w-full'
                        >
                          Sign up
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
