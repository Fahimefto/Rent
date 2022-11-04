import React, { useEffect, useState } from "react";
import Card from "../components/RentCard";
import Layout from "../components/Layout";
import ShortDetails from "../components/ShortDetails";
const address = require("@bangladeshi/bangladesh-address");
import axios from "../axios/axios";

export default function find({ data }) {
  const [division, setDivision] = useState([]);
  const [divisionId, setDivisionId] = useState([]);
  const [district, setDistrict] = useState([]);
  const [districtId, setDistrictId] = useState([]);
  const [upazilaFilter, setUpazilaFilter] = useState("");
  const [area, setArea] = useState([]);
  const [filter, setFilter] = useState("");
  const [data1, setData1] = useState(data);

  const filterHandler = async () => {
    console.log(filter);
    if (filter) {
      const filterItem = data1.filter((item) => {
        return item.upazila === filter;
      });
      setData1(filterItem);
    } else {
      setData1(data);
    }
  };
  const AllHandler = async () => {
    setData1(data);
  };
  useEffect(() => {
    setFilter(upazilaFilter);
  }, [upazilaFilter]);

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
            type="slect"
            className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-emerald-600 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            onChange={(event) => setDistrictId(event.target.value)}
          >
            <option> Select District </option>
            {district?.map((dis, index) => (
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
            onChange={(event) => setUpazilaFilter(event.target.value)}
          >
            <option value=""> Select Area </option>
            {area?.map((area, index) => (
              <option key={index} value={area.upazila}>
                {area.upazila}
              </option>
            ))}
          </select>
          <button
            type="button"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-emerald-800 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            onClick={filterHandler}
          >
            Filter
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-emerald-800 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none m-5"
            onClick={AllHandler}
          >
            Reset
          </button>
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 mt-10 gap-5 bg-emerald-800 p-10 rounded-md">
        {data1?.map((data, i) => (
          <Card data={data} key={i} />
        ))}
      </div>
    </Layout>
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
