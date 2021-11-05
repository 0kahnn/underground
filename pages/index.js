import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import MobileLayout from "../Components/MobileLayout";
import PcLayout from "../Components/PcLayout";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Underground </title>

        <meta
          content="Underground | Underground description"
          name="description"
        />
        <meta content="Underground" property="og:title" />
        <meta
          content="Underground | Underground description"
          property="og:description"
        />
        <meta property="og:image" content="/assets/images/meta-image.png" />
        <meta property="twitter:title" content="Underground" />
        <meta
          content="Underground | Underground description"
          property="twitter:description"
        />
        <meta
          content="/assets/images/meta-image.png"
          property="twitter:image"
        />
        <meta property="og:type" content="website" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta property="og:image:width" content={300} />
        <meta property="og:image:height" content={300} />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container-fluid p-0 ">
        <PcLayout />
        {/* Mobile version */}
        {/* <MobileLayout /> */}
      </div>
    </div>
  );
};
export default Home;
