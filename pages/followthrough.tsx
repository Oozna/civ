import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Chart from "../components/Chart";

const defaultEndpoint =
  "https://api.scb.se/OV0104/v1/doris/sv/ssd/START/UF/UF0205/ExaLasarOversikt";

const Home: NextPage = (res: Object) => {
  return (
    <div className="relative h-screen bg-gradient-to-b lg:h-[140vh] flex flex-col">
      <Head>
        <title>Plugga Civiligenjör</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex-1 flex flex-col justify-center items-center">
        {Chart(res)}
      </main>
    </div>
  );
};

export async function getServerSideProps() {
  const ret = await fetch(defaultEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: `{
      "query": [
        {
          "code": "Hogskola",
          "selection": {
            "filter": "item",
            "values": [
              "156",
              "018",
              "006",
              "023",
              "019",
              "012",
              "015",
              "199",
              "002",
              "022",
              "175",
              "008",
              "016",
              "066",
              "001",
              "005",
              "009"
            ]
          }
        },
        {
          "code": "Examen",
          "selection": {
            "filter": "item",
            "values": ["YCING"]
          }
        },
      ],
      "response": {
        "format": "json"
      }
    }
    `,
  });
  const data = await ret.json();
  return {
    props: {
      res: data.data,
    },
  };
}

export default Home;
