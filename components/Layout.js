import Head from "next/head";
import React, { Children } from "react";
import Footer from "./Footer";
import Nav from "./Navbar";

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title ? title + " - Rent" : "RENT"}</title>
        <meta name="description" content="Home rental" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen flex flex-col">
        <Nav />

        <main className="container m-auto mt-4 px-4">{children}</main>
        <Footer />
      </div>
    </>
  );
}
