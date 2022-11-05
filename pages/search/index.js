import { useRouter } from "next/router";
import React from "react";
import { useEffect, useState } from "react";
import axios from "../../axios/axios";
import Layout from "../../components/Layout";
import toast from "react-hot-toast";
import RentCard from "../../components/RentCard";

export default function Search() {
  const router = useRouter();
  const { divisionId, districtId, upazila, notify } = router.query;

  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      if (divisionId && districtId && upazila) {
        const res = await axios.post(
          "post/byupazila",
          {
            upazila: upazila,
          },
          {
            withCreedentials: true,
          }
        );
        setData(res.data);
        if (notify) {
          toast.success("Search Completed", {
            id: notify,
          });
        }

        console.log(res.data);
      }
      if (divisionId && !districtId && !upazila) {
        const res = await axios.post(
          "post/bydivision",
          {
            division: divisionId,
          },
          {
            withCreedentials: true,
          }
        );
        setData(res.data);
        if (notify) {
          toast.success("Search Completed", {
            id: notify,
          });
        }
        console.log(res.data);
      }
      if (divisionId && districtId && !upazila) {
        const res = await axios.post(
          "post/bydistrict",
          {
            district: districtId,
          },
          {
            withCreedentials: true,
          }
        );
        setData(res.data);
        if (notify) {
          toast.success("Search Completed", {
            id: notify,
          });
        }

        console.log(res.data);
      }
    };
    fetchData();
  }, [router]);

  return (
    <Layout title="Search">
      <div className="flex flex-col  mx-auto">
        <div className="text-center my-10">
          <h3 className="text-xl font-bold">
            Searching Result of {upazila ? ` ${upazila}, ` : null}
            {divisionId ? ` ${divisionId}, ` : null}
            {districtId ? ` ${districtId} ` : null}
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mx-auto">
          {data ? (
            data.map((item, i) => <RentCard data={item} key={i} />)
          ) : (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-3xl font-bold p-10 rounded-full bg-gray-100 bg-opacity-50 text-gray-400">
              Opps!! No post Found
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
