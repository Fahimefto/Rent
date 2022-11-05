import React from "react";
import Layout from "../../../../components/Layout";
import UpdatePost from "../../../../components/UpdatePost";
import axios from "../../../../axios/axios";

export default function EditPost({ data }) {
  return (
    <Layout>
      <UpdatePost data={data} />
    </Layout>
  );
}
export const getServerSideProps = async (ctx) => {
  const id = ctx.query.editpost;
  console.log(id);
  const res = await axios.get(`post/${id}`);
  const data = await res.data[0];

  console.log(data);
  return {
    props: { data: data },
  };
};
