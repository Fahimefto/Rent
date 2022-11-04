import "../styles/globals.css";
import { useState } from "react";
import Router from "next/router";
import HashLoader from "react-spinners/HashLoader";
import { Toaster } from "react-hot-toast";

const override = {
  position: "absolute",
  color: "#01cffc",
  left: "50%",
  top: "40%",
  width: "100vw",
  height: "100vh",
  backRoundColor: "white",
  transform: "translate(-50%, -50%)",
  zIndex: "100",
};

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", () => {
    console.log("Router changing");
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", () => {
    console.log("finised changing");
    setLoading(false);
  });
  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
      {loading && (
        <HashLoader
          color="#006747"
          loading={loading}
          cssOverride={override}
          size={80}
        />
      )}

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
