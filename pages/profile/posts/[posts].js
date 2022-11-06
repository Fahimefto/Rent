import { useRouter } from "next/router";
import React from "react";
import Layout from "../../../components/Layout";
import { useEffect, useState } from "react";
import PostCard from "../../../components/PostCard";
import axios from "../../../axios/axios";
import { toast } from "react-hot-toast";
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

  const deleteHandler = async (id) => {
    console.log(id);
    const notify = toast.loading("Deleting your post");

    try {
      const res = rent ? rent.filter((item) => item.id !== id) : null;
      console.log(res);
      const result = await axios.delete(`/post/delete/${id}`, {
        withCredentials: true,
      });
      console.log(result);
      if (result.status === 200) {
        toast.success("Post deleted successfully", {
          id: notify,
        });
        setRent(res);
      }
      /* setRent(res); */
    } catch (error) {
      console.log(error);
      toast.error("Delete failed", {
        id: notify,
      });
    }
  };

  return (
    <Layout>
      <section className="bg-white ">
        <div className="container px-6 py-10 ">
          <div className="flex items-center w-full ">
            <h1 className="text-2xl text-center w-full lg:text-center font-semibold text-gray-800 capitalize lg:text-2xl ">
              All Posts
            </h1>
          </div>

          <hr className="my-8 border-emerald-900 border-2 " />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {rent &&
              rent.map((rent, i) => (
                <PostCard key={i} data={rent} deleteHandler={deleteHandler} />
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
