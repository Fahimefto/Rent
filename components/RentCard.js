import Link from "next/link";
import React from "react";
import {
  HomeModernIcon,
  CurrencyDollarIcon,
  ClockIcon,
  PencilIcon,
  XCircleIcon,
  PencilSquareIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function RentCard() {
  return (
    <>
      <div className="bg-white border-2 border-emerald-900 border-opacity-20 rounded-md p-5 shadow-xl">
        <Link href="/" passHref>
          <a>
            <img
              className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
              src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
          </a>
        </Link>

        <div className="mt-8">
          <div className="flex flex-row w-full gap-2 items-center">
            <MapPinIcon className="flex w-5 text-emerald-900" />
            <h3 className="flex font-bold text-md text-emerald-800">
              Topobon,Sylhet Sadar,Sylhet
            </h3>
          </div>

          <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
            Ekta Shundor Basha vara dibo
          </h1>

          <p className="mt-2 text-gray-800 dark:text-gray-400">
            ekta basha basha..zubaer thake ei bashay. alway wifi slow. vara
            beshi na
          </p>

          <div className="flex items-center justify-between mt-4">
            <div>
              <div className="text-lg font-medium text-gray-700 dark:text-gray-300  hover:text-gray-500">
                <div className="flex flex-row w-full gap-2 items-center">
                  <HomeModernIcon className="flex w-5 text-emerald-900" />
                  <h3 className="flex font-bold text-md">2 Rooms</h3>
                </div>
              </div>
              <div className="text-lg font-medium text-gray-700 dark:text-gray-300  hover:text-gray-500">
                <div className="flex flex-row w-full gap-2 items-center">
                  <CurrencyDollarIcon className="flex w-5 text-emerald-900" />
                  <h3 className="flex font-bold text-md">1000 BDT</h3>
                </div>
              </div>

              <div className="text-lg font-medium text-gray-700 dark:text-gray-300  hover:text-gray-500">
                <div className="flex flex-row w-full gap-2 items-center">
                  <ClockIcon className="flex w-5 text-emerald-900" />
                  <h3 className="flex text-md">10 January 2022</h3>
                </div>
              </div>
            </div>

            <div className="inline-block text-blue-500 hover:text-blue-400">
              <div className="flex text-lg font-medium text-gray-700 dark:text-gray-300  hover:text-gray-500 gap-5">
                <div className="flex flex-row w-full gap-2 items-center">
                  <PencilSquareIcon className="flex w-7 text-amber-500" />
                </div>
                <div className="flex flex-row w-full gap-2 items-center">
                  <XCircleIcon className="flex w-7 text-rose-700 hover:scale-105" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
