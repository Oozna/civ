import React from "react";
import dynamic from "next/dynamic";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

function Chart(data) {
  return (
    <div>
      <Plot
        data={getTraces(data)}
        layout={{
          width: 1200,
          height: 700,
          legend: {
            orientation: "h",
          },
          title: "Examinerade Studenter per Lärosäte",
        }}
      />
    </div>
  );
}
function getTraces(data) {
  //Get first value from each element in array
  let traces = [];
  let years = [];

  let lines = {
    KTH: { y: [] },
    CTH: { y: [] },
    LTH: { y: [] },
    LIU: { y: [] },
    MIUN: { y: [] },
    UMU: { y: [] },
    LTU: { y: [] },
    MDU: { y: [] },
    OBU: { y: [] },
    UU: { y: [] },
    HIH: { y: [] },
    BTH: { y: [] },
    KU: { y: [] },
    SLU: { y: [] },
    LIN: { y: [] },
    HIG: { y: [] },
    JKP: { y: [] },
  };
  data.res.forEach((element) => {
    switch (element.key[0]) {
      case "018":
        lines.CTH.y.push(element.values[0]);
        break;
      case "156":
        lines.BTH.y.push(element.values[0]);
        break;
      case "006":
        lines.HIG.y.push(element.values[0]);
        break;
      case "023":
        lines.HIH.y.push(element.values[0]);
        break;
      case "019":
        lines.KU.y.push(element.values[0]);
        break;
      case "012":
        lines.KTH.y.push(element.values[0]);
        break;
      case "015":
        lines.LIU.y.push(element.values[0]);
        break;
      case "199":
        lines.LIN.y.push(element.values[0]);
        break;
      case "002":
        lines.LTU.y.push(element.values[0]);
        break;
      case "022":
        lines.LTH.y.push(element.values[0]);
        break;
      case "175":
        lines.MIUN.y.push(element.values[0]);
        break;
      case "008":
        lines.MDU.y.push(element.values[0]);
        break;
      case "016":
        lines.JKP.y.push(element.values[0]);
        break;
      case "066":
        lines.SLU.y.push(element.values[0]);
        break;
      case "001":
        lines.UMU.y.push(element.values[0]);
        break;
      case "005":
        lines.UU.y.push(element.values[0]);
        break;
      case "009":
        lines.OBU.y.push(element.values[0]);
      default:
        break;
    }
    if (!years.includes(element.key[2])) {
      years.push(element.key[2]);
    }
  });

  for (const [key, value] of Object.entries(lines)) {
    traces.push({
      type: "scatter",
      mode: "lines",
      x: years,
      y: value.y,
      name: key,
    });
  }
  return traces;
}
export default Chart;
