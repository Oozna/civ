import type { NextPage } from "next";
import Head from "next/head";
import Explore from "../components/Explore";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="relative h-screen overflow-auto">
      <Head>
        <title>Plugga Civiligenjör</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <Header />
      <Explore />
    </div>
  );
};

export default Home;
