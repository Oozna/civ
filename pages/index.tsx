import type { NextPage } from "next";
import Head from "next/head";
import FrontPage from "../components/FrontPage";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="relative h-screen overflow-auto">
      <Head>
        <title>Plugga Civiligenjör</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <FrontPage />
    </div>
  );
};

export default Home;
