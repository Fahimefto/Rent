import Link from "next/link";
import React from "react";
import moment from "moment";
import {
  HomeModernIcon,
  CurrencyDollarIcon,
  ClockIcon,
  XCircleIcon,
  PencilSquareIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function PostCard({ data, deleteHandler }) {
  return (
    <div className="bg-white border-2 border-emerald-900 border-opacity-20 rounded-md p-5 shadow-xl relative">
      <Link href={`/rent/${data.id}`}>
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

        <h1 className="relative mt-4 text-xl font-semibold text-gray-800  truncate">
          {data.title}
        </h1>

        <p className="mt-2 text-gray-800  truncate">{data.description}</p>

        <div className="flex items-center justify-between mt-4 ">
          <div className="flex flex-col gap-3">
            <div className="text-lg font-medium text-gray-700   hover:text-gray-500">
              <div className="flex flex-row w-full gap-2 items-center">
                <HomeModernIcon className="flex w-5 text-emerald-900" />
                <h3 className="flex font-bold text-sm">{data.room} Rooms</h3>
              </div>
            </div>
            <div className="text-lg font-medium text-gray-700   hover:text-gray-500">
              <div className="flex flex-row w-full gap-2 items-center">
                <CurrencyDollarIcon className="flex w-5 text-emerald-900" />
                <h3 className="flex font-bold text-sm">{data.fees} BDT</h3>
              </div>
            </div>

            <div className="text-lg font-medium text-gray-700   hover:text-gray-500">
              <div className="flex flex-row w-full gap-2 items-center">
                <ClockIcon className="flex w-5 text-emerald-900" />
                <h3 className="flex font-bold text-sm">
                  {moment(`${data.date}`).fromNow()}
                </h3>
              </div>
            </div>
          </div>

          <div className="inline-block text-blue-500 hover:text-blue-400">
            <div className="flex text-lg font-medium text-gray-700   hover:text-gray-500 gap-5">
              <Link href={`/profile/posts/edit/${data.id}`}>
                <div className="flex flex-row w-full gap-2 items-center">
                  <PencilSquareIcon className="flex w-7 text-amber-500 hover:scale-105" />
                </div>
              </Link>
              <div className="flex flex-row w-full gap-2 items-center">
                <XCircleIcon
                  className="flex w-7 text-rose-700 hover:scale-105"
                  onClick={() => deleteHandler(data.id)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
