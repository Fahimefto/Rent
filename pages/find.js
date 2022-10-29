import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Layout from "../components/Layout";
import ShortDetails from "../components/ShortDetails";
const address = require("@bangladeshi/bangladesh-address");

export default function find() {
  const [division, setDivision] = useState([]);
  const [divisionId, setDivisionId] = useState([]);
  const [district, setDistrict] = useState([]);
  const [districtId, setDistrictId] = useState([]);
  const [area, setArea] = useState([]);
  useEffect(() => {
    const division = address.allDivision();
    setDivision(division);

    console.log(division);
  }, []);
  useEffect(() => {
    const district = address.districtsOf(divisionId);
    setDistrict(district);

    console.log(district);
  }, [divisionId]);
  useEffect(() => {
    console.log(districtId);
    const area = address.upazilasOf(districtId);
    setArea(area);

    console.log(area);
  }, [districtId]);

  return (
    <Layout title="Find">
      <div className="font-bold text-3xl text-center mb-10">Find your Home</div>
      <div className="max-w-3xl mx-auto ">
        <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
          <select
            placeholder="Find by location"
            required=""
            type="text"
            className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-emerald-600 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            onChange={(event) => setDivisionId(event.target.value)}
          >
            <option> Select Division </option>
            {division.map((div, index) => (
              <option key={index} value={div}>
                {div}
              </option>
            ))}
          </select>
          <select
            placeholder="Find by location"
            required=""
            type="slect"
            className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-emerald-600 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            onChange={(event) => setDistrictId(event.target.value)}
          >
            <option> Select District </option>
            {district.map((dis, index) => (
              <option key={index} value={dis}>
                {dis}
              </option>
            ))}
          </select>
          <select
            placeholder="Find by location"
            required=""
            type="slect"
            className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-emerald-600 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          >
            <option> Select Area </option>
            {area?.map((area, index) => (
              <option key={index} value={area.upazila}>
                {area.upazila}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-emerald-800 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Filter
          </button>
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 mt-10 gap-5 bg-emerald-800 p-10 rounded-md">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Layout>
  );
}
