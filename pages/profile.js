import React from "react";
import Card from "../components/Card";
import Layout from "../components/Layout";
import cookie from "js-cookie";
import { useEffect } from "react";
export default function profile() {
  const [user, setUser] = React.useState(null);
  useEffect(() => {
    const token = cookie.get("user");
    if (token) {
      setUser(token);
    }
  }, [user]);

  return (
    <Layout title="profile">
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt="Profile"
                src="https://res.cloudinary.com/dtcjz5osi/image/upload/v1667508022/rent/undraw_Select_house_re_s1j9_kbmbhv.png"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">{user}</h2>

              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                qui hic atque tenetur quis eius quos ea neque sunt, accusantium
                soluta minus veniam tempora deserunt? Molestiae eius quidem quam
                repellat.
              </p>

              <a
                href="#"
                className="mt-8 inline-flex items-center rounded border border-emerald-800 hover:bg-emerald-800 px-8 py-3 hover:text-white hover:bg-transparent text-emerald-800 focus:outline-none focus:ring "
              >
                <span className="text-sm font-medium"> Update Profile </span>

                <svg
                  className="ml-3 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="my-10">
        <div className="font-bold text-2xl text-center mb-5">All Post</div>
        <div>
          <div className="grid grid-cols-1  lg:grid-cols-3 gap-5 bg-emerald-800 p-5">
            {/* <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card /> */}
          </div>
        </div>
      </div>
    </Layout>
  );
}
