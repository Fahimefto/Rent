import Link from "next/link";
import React from "react";
import moment from "moment";
import {
  HomeModernIcon,
  CurrencyDollarIcon,
  ClockIcon,
  PencilIcon,
  XCircleIcon,
  PencilSquareIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function RentCard({ data }) {
  return (
    <>
      <div className="bg-white border-2 border-emerald-900 border-opacity-20 rounded-md p-5 shadow-xl">
        <Link href="/">
          <a>
            {data.image
              ? data.image.map((img, index) => {
                  if (index === 0) {
                    console.log(img);
                    return (
                      <img
                        src={`${img.img}`}
                        className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                        alt=""
                        key={index}
                      />
                    );
                  }
                })
              : null}
          </a>
        </Link>

        <div className="mt-8">
          <div className="flex flex-row w-full gap-2 items-center">
            <MapPinIcon className="flex w-5 text-emerald-900" />
            <h3 className="flex font-bold text-sm text-emerald-800 truncate">
              {data.area}, {data.upazila}, {data.district}, {data.division}
            </h3>
          </div>

          <h1 className="mt-4 text-xl font-semibold text-gray-800  truncate">
            {data.title}
          </h1>

          <p className="mt-2 text-gray-800  truncate">{data.description}</p>

          <div className="flex items-center justify-between mt-4 ">
            <div className="flex flex-col gap-3">
              <div className="text-lg font-medium text-gray-700 dark:text-gray-300  hover:text-gray-500">
                <div className="flex flex-row w-full gap-2 items-center">
                  <HomeModernIcon className="flex w-5 text-emerald-900" />
                  <h3 className="flex font-bold text-sm">{data.room} Rooms</h3>
                </div>
              </div>
              <div className="text-lg font-medium text-gray-700 dark:text-gray-300  hover:text-gray-500">
                <div className="flex flex-row w-full gap-2 items-center">
                  <CurrencyDollarIcon className="flex w-5 text-emerald-900" />
                  <h3 className="flex font-bold text-sm">{data.fees} BDT</h3>
                </div>
              </div>

              <div className="text-lg font-medium text-gray-700 dark:text-gray-300  hover:text-gray-500">
                <div className="flex flex-row w-full gap-2 items-center">
                  <ClockIcon className="flex w-5 text-emerald-900" />
                  <h3 className="flex font-bold text-sm">
                    {moment(`${data.date}`).fromNow()}
                  </h3>
                </div>
              </div>
            </div>

            <div className="inline-block 0 ">
              <div className="flex text-lg font-medium text-emrald-800    gap-5">
                <Link href={`/rent/${data.id}`}>
                  <button className="flex justify-end text-emerald-800 bg-opacity-10 border border-emerald-800 w-full gap-2 items-center bg-emerald-800 p-2 text-sm rounded-md">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
