import React from "react";
import Layout from "../../components/Layout";
import axios from "../../axios/axios";
import { useEffect } from "react";
import Link from "next/link";
export default function Profile({ data }) {
  const [user, setUser] = React.useState(null);
  useEffect(() => {
    if (data) {
      setUser(data.name);
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

              <div className="mt-4 text-gray-600">
                You can update your profile here and see your posts
              </div>
              <div className="flex gap-5">
                <Link href="/profile/update">
                  <button className="mt-8 inline-flex items-center rounded border border-emerald-800 hover:bg-emerald-100 px-8 py-3  hover:bg-transparent text-emerald-800  ">
                    <span className="text-sm font-bold"> Update Profile </span>
                  </button>
                </Link>
                <Link href="/profile/post">
                  <button className="mt-8 inline-flex items-center rounded border border-emerald-800 hover:bg-emerald-100 px-8 py-3  hover:bg-transparent text-emerald-800  ">
                    <span className="text-sm font-bold"> All Post </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getServerSideProps = async (ctx) => {
  try {
    const cookie = ctx.req?.cookies["access_token"];

    const result = await axios.get("/user/me", {
      headers: {
        cookie: `access_token=${cookie}`,
      },
    });
    const data = result.data;
    console.log(data);
    console.log(cookie);
    return {
      props: { data },
    };
  } catch (err) {}
};
