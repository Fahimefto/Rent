import React from "react";
import Layout from "../../components/Layout";
import axios from "../../axios/axios";
import { useEffect, useState } from "react";
import moment from "moment";
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
    console.log(data);
  }, [data]);
  return (
    <Layout title="Details">
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl  font-bold sm:text-4xl">{data.title}</h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <img
                alt="Party"
                src="https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-16">
              <article className="space-y-4 text-gray-600">
                <p>{data.description}</p>

                <div className="flex flex-row w-full gap-2 items-center">
                  <MapPinIcon className="flex w-5 text-emerald-900" />
                  <h3 className="flex font-bold text-sm">
                    <h3 className="flex font-bold text-sm">
                      {data.area}, {data.upazila}, {data.district},{" "}
                      {data.division}
                    </h3>
                  </h3>
                </div>
                <div className="flex flex-row w-full gap-2 items-center">
                  <PhoneIcon className="flex w-5 text-emerald-900" />
                  <h3 className="flex font-bold text-sm">
                    <h3 className="flex font-bold text-sm">{data.contact}</h3>
                  </h3>
                </div>
                <div className="flex flex-row w-full gap-2 items-center">
                  <ClockIcon className="flex w-5 text-emerald-900" />
                  <h3 className="flex font-bold text-sm">
                    {moment(`${data.date}`).fromNow("L")},{"  "}
                    {moment(`${data.date}`).format("dddd ,do MMMM, yyyy")}
                  </h3>
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
