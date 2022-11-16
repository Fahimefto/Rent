import React from "react";
import Layout from "../components/Layout";
import useBearStore from "../Store/Store";

export default function Zustand() {
  const bears = useBearStore((state) => state.bears);
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  const removeAllBears = useBearStore((state) => state.removeAllBears);
  return (
    <Layout>
      <div className=" min-h-screen">
        <div className="container mx-auto gap-5">
          <div className="text-3xl">{bears}</div>
          <button className="p-5 bg-slate-600 m-5" onClick={increasePopulation}>
            Login{" "}
          </button>
          <button className="p-5 bg-slate-600" onClick={removeAllBears}>
            logout{" "}
          </button>
        </div>
      </div>
    </Layout>
  );
}
