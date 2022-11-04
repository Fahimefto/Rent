import React from "react";
import Layout from "../../components/Layout";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "../../axios/axios";
import toast from "react-hot-toast";

export default function Update({ data }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setName(data.name);
    setEmail(data.email);

    console.log(data);
  }, []);

  const submitHandler = async (e) => {
    const notify = toast.loading("Updating your account");
    try {
      console.log(name, email, password);
      const result = await axios.put(
        "/user/me",
        {
          name: name,
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        }
      );
      console.log(result);
      if (result.status === 200) {
        toast.success("Account Updated successfully", {
          id: notify,
        });
        router.push("/profile");
      }
    } catch (error) {
      console.log(error);
      toast.error("Update failed", {
        id: notify,
      });
    }
  };

  return (
    <Layout>
      <section className="grid grid-cols-1 gap-0 lg:grid-cols-12">
        <div className="w-full col-span-1 p-4 mx-auto mt-6 lg:col-span-8 xl:p-12 md:w-2/4">
          <h1 className="mt-6 mb-4 text-2xl font-bold  text-left ">
            Update Your Account
          </h1>
          <form className="pb-1 space-y-4">
            <label className="block">
              <span className="block mb-1 text font-medium ">Your Name</span>
              <input
                className="form-input border-2 rounded-full p-2 w-full px-8"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Write your name"
                inputMode="text"
                required
              />
            </label>
            <label className="block">
              <span className="block mb-1 text font-medium ">Your Email</span>
              <input
                className="form-input border-2 rounded-full p-2 w-full px-8"
                type="email"
                value={email}
                placeholder="Write your email"
                inputMode="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label className="block">
              <span className="block mb-1 text font-medium ">
                Your Password
              </span>
              <input
                className="form-input border-2 rounded-full p-2 w-full px-8"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="enter your password"
                inputMode="password"
                required
              />
            </label>
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="bg-emerald-800 px-4 py-2 rounded-md text-white font-semibold hover:bg-emerald-700"
                value="Login"
                onClick={submitHandler}
              >
                Update
              </button>
            </div>
          </form>
          <div className="my-6 space-y-2"></div>
        </div>
        <div className="col-span-1 lg:col-span-4">
          <img
            src="https://res.cloudinary.com/dtcjz5osi/image/upload/v1667577159/rent/undraw_Insert_re_s97w_yxe3hw.png"
            alt="signup"
            className="object-cover w-full h-64 min-h-full bg-gray-100"
            loading="lazy"
          />
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
