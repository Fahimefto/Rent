import { Cursor, useTypewriter } from "react-simple-typewriter";

export default function Hero() {
  const [words, count] = useTypewriter({
    words: [
      "find your home",
      "Create a rent",
      "create a categoty",
      "rent your home ",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="flex flex-col items-center justify-center  mx-auto sm:max-w-xl md:max-w-2xl  md:px-8">
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
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>
      <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
        <input
          placeholder="Find your home"
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
      <p className="max-w-md mb-10 text-xs text-gray-600 sm:text-sm md:text-center">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium.
      </p>
    </div>
  );
}
