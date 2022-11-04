import Layout from "../components/Layout";
import Hero from "../components/Hero";
import ShortDetails from "../components/ShortDetails";
import { useState, useEffect } from "react";
import Card from "../components/RentCard";
import Link from "next/link";
import axios from "../axios/axios";

export default function Home({ data }) {
  return (
    <>
      <Layout title="Home">
        <div className="scrollbar-hide">
          <Hero />
        </div>
        <div>
          <h1 className="text-center text-3xl font-bold m-10">Recent Post</h1>
          <div className=" bg-emerald-800 py-10 px-10 rounded-xl ">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mx-auto ">
              {data &&
                data.slice(0, 3).map((data, i) => (
                  <Link href={`/${data.title}`} key={i} passHref>
                    <>
                      <Card data={data} key={i} />
                    </>
                  </Link>
                ))}
            </div>
            <span className="flex justify-center mt-10  ">
              <Link href="/find">
                <button className="bg-white px-4 py-2 font-bold rounded-md">
                  View All
                </button>
              </Link>
            </span>
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const res = await axios.get("/post/all");
  const resData = res.data;
  const data = resData;

  console.log(data);
  return {
    props: { data },
  };
}
