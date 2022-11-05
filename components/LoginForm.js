import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "../axios/axios";
import cookie from "js-cookie";
import { verify } from "jsonwebtoken";
import useBearStore from "../Store/Store";
import toast from "react-hot-toast";

const LoginForm = () => {
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(email, password);
    const notify = toast.loading("Loging in...");
    try {
      const result = await axios.post(
        "/user/login",
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        }
      );
      console.log(result);
      if (result.status === 200) {
        const token = result.data.token;
        const isVerified = await verify(token, "asdfg");
        const user = isVerified.name;
        const id = isVerified.id;
        console.log(user, id);
        console.log(isVerified);
        if (isVerified) {
          cookie.set("user", user);
          cookie.set("id", id);
          router.push("/");
          increasePopulation();
          toast.success("Login Successfull", {
            id: notify,
          });
        } else {
          toast.error("Invalid", {
            id: notify,
          });
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Invalid Password", {
        id: notify,
      });

      router.push("/login");
    }
  };

  return (
    <section className="grid grid-cols-1 gap-0 lg:grid-cols-12">
      <div className="w-full col-span-1 p-4 mx-auto mt-6 lg:col-span-8 xl:p-12 md:w-2/4">
        <h1 className="mt-6 mb-4 text-2xl font-bold  text-left ">
          Login Your Account
        </h1>
        <form className="pb-1 space-y-4">
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
              Login
            </button>
          </div>
        </form>
        <div className="my-6 space-y-2">
          <div className="text-md font-bold ">
            Dont have an account?{"  "}
            <Link
              href="/signup"
              className="text-emerald-700 hover:text-black font-bold"
            >
              Register your account
            </Link>
          </div>
        </div>
      </div>
      <div className="col-span-1 lg:col-span-4">
        <img
          src="https://res.cloudinary.com/dtcjz5osi/image/upload/v1667685428/rent/undraw_handcrafts_computer_kqvlfh.png"
          alt="signup"
          className="object-cover w-full h-64 min-h-full bg-gray-100"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default LoginForm;
