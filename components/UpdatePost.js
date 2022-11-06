import { data } from "autoprefixer";
import { useRouter } from "next/router";
import React from "react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "../axios/axios";

export default function UpdatePost({ data }) {
  const address = require("@bangladeshi/bangladesh-address");
  const router = useRouter(null);
  const [title, setTitle] = useState(null);
  const [des, setDes] = useState(null);
  const [room, setRoom] = useState(null);
  const [fees, setFees] = useState(null);
  const [phone, setPhone] = useState(null);
  const [shortArea, setShortArea] = useState(null);
  const [division, setDivision] = useState([]);
  const [divisionId, setDivisionId] = useState(null);
  const [district, setDistrict] = useState([]);
  const [districtId, setDistrictId] = useState(null);
  const [upazilaId, setUpazilaId] = useState(null);
  const [area, setArea] = useState([]);
  const rounter = useRouter();
  const [edit, setEdit] = useState(null);
  const [files, setFiles] = useState(null);
  useEffect(() => {
    setTitle(data.title);
    setDes(data.description);
    setRoom(data.room);
    setFees(data.fees);
    setPhone(data.contact);
    setShortArea(data.area);
    setDivisionId(data.division);
    console.log(data);
  }, [data]);

  useEffect(() => {
    const division = address.allDivision();
    setDivision(division);

    console.log(division);
  }, []);
  useEffect(() => {
    const district = address.districtsOf(divisionId);
    setDistrict(district);

    console.log(district);
  }, [divisionId]);
  useEffect(() => {
    console.log(districtId);
    const area = address.upazilasOf(districtId);
    setArea(area);

    console.log(area);
  }, [districtId]);

  useEffect(() => {}, [districtId]);

  const handleFile = (e) => {
    const subFile = [];
    for (let i = 0; i < e.target.files.length; i++) {
      console.log(e.target.files[i]);
      subFile.push(e.target.files[i]);
    }
    setFiles(subFile);
  };

  const submitHandler = async () => {
    const { editpost } = rounter.query;
    const notify = toast.loading("Please wait...");
    if (
      !title ||
      !des ||
      !room ||
      !fees ||
      !phone ||
      !shortArea ||
      !districtId ||
      !divisionId ||
      !upazilaId
    ) {
      toast.error("Please fill all the fields", {
        id: notify,
      });
      console.log(
        title,
        des,
        room,
        fees,
        phone,
        shortArea,

        districtId,
        divisionId,
        upazilaId
      );
    } else {
      try {
        const res = await axios.get("/user/me", {
          withCredentials: true,
        });
        const id = res.data.id;
        if (!id) {
          toast.error("Please login first", {
            id: notify,
          });
        }
        if (id) {
          try {
            console.log(files);
            const formData = new FormData();
            formData.append("title", title);
            formData.append("description", des);
            formData.append("room", room);
            formData.append("fees", fees);
            formData.append("contact", phone);
            formData.append("area", shortArea);
            formData.append("district", districtId);
            formData.append("division", divisionId);
            formData.append("upazila", upazilaId);
            formData.append("user_id", id);
            if (files) {
              for (let i = 0; i < files.length; i++) {
                formData.append("image", files[i]);
              }
            }

            const res = await axios.put(`/post/update/${editpost}`, formData, {
              withCredentials: true,
            });
            console.log(res);
            if (res.status === 200) {
              toast.success("Successfully updated", {
                id: notify,
              });
              router.push(`/rent/${editpost}`);
            } else {
              toast.error("Something went wrong", {
                id: notify,
              });
            }
          } catch (error) {
            console.log(error);
            toast.error("Something went wrong", {
              id: notify,
            });
          }
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong", {
          id: notify,
        });
      }
    }
  };
  return (
    <section className="grid grid-cols-1 gap-0 lg:grid-cols-12">
      <div className="w-full col-span-1 p-4 mx-auto  lg:col-span-6 ">
        <h1 className=" mb-4 text-2xl font-bold  text-left ">
          Update your Post
        </h1>
        <form className="flex flex-col pb-1 space-y-4 justify-evenly">
          <label className="block">
            <span className="block mb-2 text font-medium ">Title</span>
            <input
              className="form-input border-2 rounded-full p-2 w-full px-8 border-opacity-50 border-emerald-800"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Write your title"
              inputMode="text"
              required
            />
          </label>
          <label className="block">
            <span className="block mb-2 text font-medium ">
              Short Description
            </span>
            <textarea
              className="form-input border-2 rounded-full p-2 w-full px-8 border-opacity-50 border-emerald-800 overflow-hidden"
              type="text"
              value={des}
              onChange={(e) => setDes(e.target.value)}
              placeholder="Write Short Description"
              inputMode="text"
              required
            />
          </label>
          <label className="block">
            <span className="block mb-2 text font-medium ">Room</span>
            <input
              className="form-input border-2 rounded-full p-2 w-full px-8 border-opacity-50 border-emerald-800"
              type="number"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              placeholder="Total Room"
              inputMode="text"
              required
            />
          </label>
          <label className="block">
            <span className="block mb-2 text font-medium ">Fees</span>
            <input
              className="form-input border-2 rounded-full p-2 w-full px-8 border-opacity-50 border-emerald-800"
              type="number"
              value={fees}
              onChange={(e) => setFees(e.target.value)}
              placeholder="Fees"
              inputMode="number"
              required
            />
          </label>
          <label className="block">
            <span className="block mb-2 text font-medium ">Phone Number</span>
            <input
              className="form-input border-2 rounded-full p-2 w-full px-8 border-opacity-50 border-emerald-800"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="enter your phone number"
              inputMode="text"
              required
            />
          </label>
        </form>
      </div>
      {/* second colum */}

      <div className="w-full col-span-1 p-2 lg:p-5 mx-auto mt-0 lg:col-span-6  lg:mt-12 flex flex-col ">
        <form className="pb-1 space-y-4">
          <label className="block">
            <span className="block mb-2 text font-medium ">Area Name</span>
            <input
              className="form-input border-2 rounded-full p-2 w-full px-8 border-opacity-50 border-emerald-800"
              type="text"
              value={shortArea}
              onChange={(e) => setShortArea(e.target.value)}
              placeholder="enter your area in short"
              inputMode="text"
              required
            />
          </label>
          <label className="block">
            <span className="block mb-2 text font-medium ">Division</span>
            <select
              className="form-input border-2 rounded-full p-2 w-full px-8 border-opacity-50 border-emerald-800 overflow-hidden"
              type="select"
              value={divisionId}
              onChange={(e) => setDivisionId(e.target.value)}
              placeholder="Write your name"
              inputMode="select"
              required=""
            >
              <option value="">Choose an option</option>
              {division.map((div, index) => (
                <option key={index} value={div}>
                  {div}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="block mb-2 text font-medium ">District</span>
            <select
              className="form-input border-2 rounded-full p-2 w-full px-8 border-opacity-50 border-emerald-800 overflow-hidden"
              type="text"
              onChange={(e) => setDistrictId(e.target.value)}
              placeholder="Write your name"
              inputMode="text"
              required
            >
              <option value="">Choose an option</option>
              {district.map((dis, index) => (
                <option key={index} value={dis}>
                  {dis}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="block mb-2 text font-medium ">Upazila</span>
            <select
              className="form-input border-2 rounded-full p-2 w-full px-8 border-opacity-50 border-emerald-800 overflow-hidden"
              type="text"
              onChange={(e) => setUpazilaId(e.target.value)}
              placeholder="Write your name"
              inputMode="text"
              required
            >
              <option value="">Choose an option</option>
              {area?.map((area, index) => (
                <option key={index} value={area.upazila}>
                  {area.upazila}
                </option>
              ))}
            </select>
          </label>
          <label className="block" onChange={handleFile}>
            <span className="block mb-2 text font-medium ">Image File</span>
            <input
              className="form-input border-2 rounded-full p-2 w-full px-8 border-opacity-50 border-emerald-800 bg-emerald-800 bg-opacity-10"
              type="file"
              required
              multiple
            />
          </label>
        </form>
      </div>
      <div className="flex items-center ml-0 lg:ml-5 w-full ">
        <button
          type="button"
          className="bg-emerald-800 bg-opacity-20 border border-emerald-800 text-emerald-800 w-full py-3 rounded-full  font-semibold hover:bg-emerald-700  hover:text-white uppercase mt-5"
          value="Login"
          onClick={submitHandler}
        >
          Update
        </button>
      </div>
    </section>
  );
}
