import React from "react";
import Layout from "../components/Layout";
import ShortDetails from "../components/ShortDetails";

export default function find() {
  return (
    <Layout title="Find">
      <div className="font-bold text-2xl text-center mb-10">
        Find by location
      </div>
      <div className="max-w-xl mx-auto ">
        <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
          <input
            placeholder="Find by location"
            required=""
            type="text"
            className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-emerald-600 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-emerald-800 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Search
          </button>
        </form>
      </div>
      <div className=" -space-y-10">
        <ShortDetails />
        <ShortDetails />
        <ShortDetails />
      </div>
    </Layout>
  );
}
