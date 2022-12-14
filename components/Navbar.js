import Image from "next/image";
import { useEffect, useState } from "react";
import { BarsArrowDownIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import useBearStore from "../Store/Store";
import { useRouter } from "next/router";
import axios from "../axios/axios";
import cookie from "js-cookie";
import toast from "react-hot-toast";

export default function Nav() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [auth, setAuth] = useState(false);
  const bears = useBearStore((state) => state.bears);
  const removeAllBears = useBearStore((state) => state.removeAllBears);
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  useEffect(() => {
    const fetch = async () => {
      const result = await axios.get("/user/verify", { withCredentials: true });
      if (result.data.status === 401) {
        removeAllBears();
      } else if (result.data.status === 200) {
        increasePopulation();
      }
    };
    fetch();
  }, [router, bears]);

  useEffect(() => {
    setAuth(bears);
  }, [bears]);
  const logoutHandler = async () => {
    const notify = toast.loading("Logging out...");
    try {
      const result = await axios.get("/user/logout", {
        withCredentials: true,
      });
      console.log(result);
      toast.success("Logged out", {
        id: notify,
      });
      sessionStorage.clear();
      removeAllBears();
      cookie.remove("user");
      cookie.remove("id");
      router.reload();
    } catch (error) {
      console.log(error);
      toast.error("Error", {
        id: notify,
      });
    }
  };

  return (
    <>
      <div className="bg-white shadow-md">
        <div className="px-4 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="relative top-0 flex items-center justify-between z-20">
            <Link
              href="/"
              aria-label="Company"
              title="Company"
              className="inline-flex items-center"
            >
              <Image
                src="/asset/rent1.png"
                height={50}
                width={100}
                className="w-8 fill-white"
                alt="image"
              />
            </Link>
            <ul className="flex items-center hidden space-x-8 lg:flex">
              <li>
                <Link
                  href="/"
                  title="Our product"
                  className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/create"
                  aria-label="Our product"
                  title="Our product"
                  className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Create
                </Link>
              </li>
              <li>
                <Link
                  href="/find"
                  aria-label="Product pricing"
                  title="Create"
                  className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Find
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  aria-label="About us"
                  title="About us"
                  className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  About us
                </Link>
              </li>
              <li>
                {!auth ? null : (
                  <Link
                    href="/profile"
                    aria-label="profile"
                    title="Profile"
                    className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
                  >
                    Profile
                  </Link>
                )}
              </li>
            </ul>
            <ul className="flex items-center hidden space-x-8 lg:flex">
              <li>
                {!auth ? (
                  <Link href="/login  ">
                    <button className="inline-flex items-center justify-center h-12 px-6 font-bold hover:scale-105 tracking-wide ease-in-out  text-emerald-800 bg-emerald-800 bg-opacity-10 transition duration-75  shadow-md rounded-md">
                      Login
                    </button>
                  </Link>
                ) : (
                  <Link href="/  ">
                    <button
                      className="inline-flex items-center justify-center h-12 px-6  tracking-wide text-rose-700 hover:scale-105 bg-opacity-10 font-bold bg-rose-700 transition duration-75  shadow-md rounded-md"
                      onClick={logoutHandler}
                    >
                      Logout
                    </button>
                  </Link>
                )}
              </li>
            </ul>
            <div className="lg:hidden ">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(true)}
              >
                <BarsArrowDownIcon className="w-7" />
              </button>
              {isMenuOpen && (
                <div className="absolute top-0 left-0 w-full">
                  <div className="p-5 bg-white border rounded shadow-xl">
                    <div className="flex items-center justify-between mb-4">
                      <div></div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <XMarkIcon className="w-5" />
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul className="space-y-6 z-20 ">
                        <li>
                          <Link
                            href="/"
                            aria-label="Our product"
                            title="Our product"
                            className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/create"
                            aria-label="Our product"
                            title="Our product"
                            className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Create
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/find"
                            aria-label="Product pricing"
                            title="Product pricing"
                            className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Find
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/"
                            aria-label="About us"
                            title="About us"
                            className="font-medium tracking-wide transition-colors duration-200 hover:bg-gray-200"
                          >
                            About us
                          </Link>
                        </li>
                        <li>
                          {!auth ? null : (
                            <Link
                              href="/profile"
                              aria-label="profile"
                              title="Profile"
                              className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
                            >
                              Profile
                            </Link>
                          )}
                        </li>

                        <li>
                          {!auth ? (
                            <Link href="/login  ">
                              <button className="inline-flex items-center justify-center h-12 w-full font-bold hover:scale-105 tracking-wide ease-in-out  text-emerald-800 bg-emerald-800 bg-opacity-10 transition duration-75  shadow-md rounded-md">
                                Login
                              </button>
                            </Link>
                          ) : (
                            <Link href="/  ">
                              <button
                                className="inline-flex items-center justify-center h-12 w-full  tracking-wide text-rose-700 hover:scale-105 bg-opacity-10 font-bold bg-rose-700 transition duration-75  shadow-md rounded-md"
                                onClick={logoutHandler}
                              >
                                Logout
                              </button>
                            </Link>
                          )}
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
