import React from "react";

function Stats() {
  return (
    <div id="stats" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <p className="uppercase text-sm tracking-widest text-gray-600">
          LET&#39;S BUILD SOMETHING TOGETHER
        </p>
        <h1 className="py-4 text-gray-700">
          Hi, I&#39;m <span className="text-[#5651e5]"> Clint</span>
        </h1>
        <h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
        <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
          I’m focused on building responsive front-end web applications while
          learning back-end technologies.
        </p>
      </div>
    </div>
  );
}

export default Stats;
