import { useRouter } from "next/router";
import React from "react";
import Layout from "../../../components/Layout";
import { useEffect, useState } from "react";
import PostCard from "../../../components/PostCard";
import axios from "../../../axios/axios";
export default function post() {
  const router = useRouter();
  const { posts } = router.query;
  const [user, setUser] = useState("");
  const [rent, setRent] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (posts) {
        console.log(posts);
        setUser(posts);
        console.log(user);
        const result = await axios.get(`/post/user/${posts}`, {
          withCredentials: true,
        });

        setRent(result.data);
      }
    };
    fetchUser();
  }, [router]);
  useEffect(() => {
    console.log(rent);
  }, [rent]);

  return (
    <Layout>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 ">
          <div className="flex items-center w-full ">
            <h1 className="text-2xl text-center w-full lg:text-center font-semibold text-gray-800 capitalize lg:text-2xl dark:text-white">
              All Posts
            </h1>
          </div>

          <hr className="my-8 border-emerald-900 border-2 dark:border-gray-700" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {rent && rent.map((rent, i) => <PostCard key={i} data={rent} />)}
          </div>
        </div>
      </section>
    </Layout>
  );
}
