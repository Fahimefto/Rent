import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "../axios/axios";
import cookie from "js-cookie";
import { verify } from "jsonwebtoken";
import useBearStore from "../Backend/Store";
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
    <div>
      <div className="max-w-2xl mx-auto ">
        <form
          onSubmit={submitHandler}
          className="p-8 mt-6 mb-0 space-y-10 rounded-lg shadow-2xl"
        >
          <p className="text-2xl font-bold uppercase text-center">login</p>

          <div>
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>

            <div className="relative mt-1">
              <input
                type="email"
                id="email"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <span className="absolute inset-y-0 inline-flex items-center right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>

            <div className="relative mt-1">
              <input
                type="password"
                id="password"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <span className="absolute inset-y-0 inline-flex items-center right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="block w-full px-5 py-3 text-sm font-bold uppercase text-white bg-emerald-800 hover:bg-emerald-600 rounded-lg"
          >
            login
          </button>

          <div className="flex flex-row justify-center text-sm text-center text-gray-900  py-2 rounded-lg gap-1">
            No account?
            <Link href="/signup">
              <div className=" font-bold text-emerald-800 cursor-pointer">
                Create Account
              </div>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
