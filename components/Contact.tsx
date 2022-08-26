import React from "react";

function FrontPage() {
  return (
    <div id="front" className="w-full mb-96 h-auto text-center">
      <main className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-start items-center flex-col">
        <h1 className="py-16 uppercase tracking-widest text-gray-700">
          För ytterligare frågor kan du kontakta mig via något av nedanstående
          medel
        </h1>
        <p>Email: ericj4@kth.se</p>
        <p>
          Linkedin: <a>https://www.linkedin.com/in/ericwj/</a>
        </p>
      </main>
    </div>
  );
}

export default FrontPage;
