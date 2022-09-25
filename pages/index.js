import Layout from "../components/Layout";
import Hero from "../components/Hero";
import ShortDetails from "../components/ShortDetails";
import { useState, useEffect } from "react";

export default function Home() {
  return (
    <>
      <Layout title="Home">
        <div className="">
          <Hero />
        </div>
        <div>
          <h1 className="text-center text-3xl font-bold m-10">Recent Post</h1>
          <section className="bg-emerald-800 rounded-2xl  space-y-5 items-center">
            <ShortDetails />
          </section>
        </div>
      </Layout>
    </>
  );
}
