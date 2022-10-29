import { useRouter } from "next/router";
import React from "react";
import Card from "../../components/Card";
import Layout from "../../components/Layout";

export default function Search() {
  const router = useRouter();
  const { search } = router.query;
  return (
    <Layout title="Search">
      <div className="flex flex-col  mx-auto">
        <div className="text-center my-10">
          <h3 className="text-3xl font-bold">Here is the result of {search}</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mx-auto">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </Layout>
  );
}
