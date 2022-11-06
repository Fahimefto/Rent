import React from "react";
import Layout from "../../components/Layout";
import axios from "../../axios/axios";
import { useEffect, useState } from "react";
import moment from "moment";
import("tw-elements");
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import {
  HomeModernIcon,
  CurrencyDollarIcon,
  ClockIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";

function Details({ data }) {
  const router = useRouter();
  const [data1, setData1] = useState(null);
  useEffect(() => {
    setData1(data);
    console.log(data.image);
  }, [data]);
  return (
    <Layout title="Details">
      <section>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 py-5 lg:px-8">
          <div className="max-w-full mb-10">
            <h2 className="text-2xl uppercase font-bold  text-center w-full mx-auto">
              {data.title}
            </h2>
          </div>
          <div
            id="carouselExampleControls"
            className="carousel slide relative"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner relative w-full overflow-hidden border-emerald-800 border">
              <div className="carousel-item active relative float-left w-full ">
                <img
                  src="https://res.cloudinary.com/dtcjz5osi/image/upload/v1667723329/rent/undraw_Small_town_re_7mcn_ydygac.png"
                  className="block w-full h-1/3 object-cover"
                  alt="Wild Landscape"
                />
              </div>
              {data.image
                ? data.image.map((item, index) => (
                    <div className="carousel-item relative float-left w-full h-1/3 object-cover">
                      <img
                        src={`${item.img}`}
                        className="block w-full h-1/3 object-cover"
                        alt={`${item.img}`}
                      />
                    </div>
                  ))
                : null}
            </div>
            <button
              className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0 "
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon  inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden ">Previous</span>
            </button>
            <button
              className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0  "
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

          <div className=" grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="mt-10">
              <article className="space-y-4 text-gray-600">
                <p>{data.description}</p>

                <div className="flex flex-row w-full gap-2 items-center">
                  <MapPinIcon className="flex w-5 text-emerald-900" />
                  <div className="flex font-bold text-sm">
                    <h3 className="flex font-bold text-sm">
                      {data.area}, {data.upazila}, {data.district},{" "}
                      {data.division}
                    </h3>
                  </div>
                </div>
                <div className="flex flex-row w-full gap-2 items-center">
                  <PhoneIcon className="flex w-5 text-emerald-900" />
                  <div className="flex font-bold text-sm">
                    <h3 className="flex font-bold text-sm">{data.contact}</h3>
                  </div>
                </div>
                <div className="flex flex-row w-full gap-2 items-center">
                  <ClockIcon className="flex w-5 text-emerald-900" />
                  <div className="flex font-bold text-sm">
                    {moment(`${data.date}`).fromNow("L")},{"  "}
                    {moment(`${data.date}`).format("dddd ,do MMMM, yyyy")}
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="flex flex-row w-full gap-2 items-center">
                    <HomeModernIcon className="flex w-5 text-emerald-900" />
                    <h3 className="flex font-bold text-sm">
                      {data.room} Rooms
                    </h3>
                  </div>
                  <div className="flex flex-row w-full gap-2 items-center">
                    <CurrencyDollarIcon className="flex w-5 text-emerald-900" />
                    <h3 className="flex font-bold text-sm">{data.fees} BDT</h3>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
export default dynamic(() => Promise.resolve(Details), { ssr: false });

export const getServerSideProps = async (ctx) => {
  const id = ctx.query.details;
  console.log(ctx.query, id);
  const res = await axios.get(`post/${id}`);
  const data = await res.data[0];

  console.log(data);
  return {
    props: { data: data },
  };
};
