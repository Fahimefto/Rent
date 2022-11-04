import Link from "next/link";
import { useState } from "react";
import axios from "../axios/axios";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const submitHandler = async (e) => {
    console.log(name, email, password);
    e.preventDefault();
    const notify = toast.loading("Creating your account");
    try {
      const result = await axios.post(
        "/user/new",
        {
          name: name,
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        }
      );
      const status = result.status;
      if (status === 201) {
        toast.success("Account Created", {
          id: notify,
        });
        router.push("/login");
      }
    } catch (error) {
      console.log(error.response.data);
      toast.error(error.response.data, {
        id: notify,
      });
    }
  };
  return (
    <section className="grid grid-cols-1 gap-0 lg:grid-cols-12">
      <div className="w-full col-span-1 p-4 mx-auto mt-6 lg:col-span-8 xl:p-12 md:w-2/4">
        <h1 className="mt-6 mb-4 text-2xl font-bold  text-left ">
          Create Your Account
        </h1>
        <form className="pb-1 space-y-4">
          <label className="block">
            <span className="block mb-1 text font-medium ">Your Name</span>
            <input
              className="form-input border-2 rounded-full p-2 w-full px-8"
              type="text"
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
              placeholder="Write your email"
              inputMode="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label className="block">
            <span className="block mb-1 text font-medium ">Your Password</span>
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
              Register
            </button>
          </div>
        </form>
        <div className="my-6 space-y-2">
          <div className="text-md font-bold ">
            Already an account?{"  "}
            <Link
              href="/login"
              className="text-emerald-700 hover:text-black font-bold"
            >
              Login your account
            </Link>
          </div>
        </div>
      </div>
      <div className="col-span-1 lg:col-span-4">
        <img
          src="https://res.cloudinary.com/dtcjz5osi/image/upload/v1667507879/rent/image_pmurzn.png"
          alt="signup"
          className="object-cover w-full h-64 min-h-full bg-gray-100"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default SignUpForm;
