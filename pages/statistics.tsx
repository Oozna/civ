import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Stats from "../components/Stats";

const Home: NextPage = () => {
  return (
    <div className="relative h-screen bg-gradient-to-b lg:h-[140vh] flex flex-col">
      <Head>
        <title>Plugga Civiligenjör</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Stats />
    </div>
  );
};

export default Home;
