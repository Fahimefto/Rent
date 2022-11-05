import { useEffect, useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
const address = require("@bangladeshi/bangladesh-address");
import toast from "react-hot-toast";
import { useRouter } from "next/router";
export default function Hero() {
  const [division, setDivision] = useState([]);
  const [divisionId, setDivisionId] = useState(null);
  const [district, setDistrict] = useState([]);
  const [districtId, setDistrictId] = useState(null);
  const [upazila, setUpazila] = useState(null);
  const [area, setArea] = useState([]);

  const [words, count] = useTypewriter({
    words: ["find your Home", "rent your Place"],
    loop: true,
    delaySpeed: 2000,
  });
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
  const router = useRouter();
  const searchHandler = async () => {
    const notify = toast.loading("Searching...");
    console.log("searching");
    console.log(divisionId, districtId, upazila);
    if (!divisionId && !districtId && !upazila) {
      toast.error("Please select a the option", {
        id: notify,
      });
    }
    try {
      if (divisionId && districtId && upazila) {
        router.push({
          pathname: "/search",
          query: { divisionId, districtId, upazila, notify },
        });
        console.log(router);
      }
      if (divisionId && !districtId && !upazila) {
        router.push({
          pathname: "/search",
          query: { divisionId, notify },
        });
      }
      if (divisionId && districtId && !upazila) {
        router.push({
          pathname: "/search",
          query: { divisionId, districtId, notify },
        });
      }
    } catch (error) {
      toast.error(error.message, {
        id: notify,
      });
    }
  };
  return (
    <div className="flex flex-col items-center justify-center  mx-auto sm:max-w-xl md:max-w-3xl  md:px-8">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Welcome to Rent
          </p>
        </div>
        <h2 className="max-w-lg mb-6  text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block mr-5"></span> You can, {words}{" "}
          <Cursor></Cursor>
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Renting a new place is the start of something great
        </p>
      </div>
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
          onChange={(event) => setUpazila(event.target.value)}
        >
          <option> Select Upazila </option>
          {area?.map((area, index) => (
            <option key={index} value={area.upazila}>
              {area.upazila}
            </option>
          ))}
        </select>
        <button
          type="button"
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-emerald-800 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          onClick={searchHandler}
        >
          Search
        </button>
      </form>
      <p className="max-w-md mb-10 text-xs text-gray-600 sm:text-sm md:text-center">
        Find sweet deals on apartments and houses for rent in our most popular
        locations.
      </p>
    </div>
  );
}
