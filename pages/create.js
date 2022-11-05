import React from "react";
import Layout from "../components/Layout";
import { useState } from "react";
import CreateRent from "../components/CreateRent";

export default function create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {};

  return (
    <Layout title="Create">
      <CreateRent />
    </Layout>
  );
}
