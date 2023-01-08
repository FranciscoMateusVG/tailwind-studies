import { type NextPage } from "next";
import Head from "next/head";

const BordersBorderRadius: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/tailwind-icon.png" />
      </Head>
      <main className="p-10">
        {/* Border Width & Colors */}
        <div className="m-3 w-96 border p-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
          nesciunt illum! Vero.
        </div>
        <div className="m-3 w-96 border-2 p-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
          nesciunt illum! Vero.
        </div>
        <div className="m-3 w-96 border-4 p-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
          nesciunt illum! Vero.
        </div>

        <div className="m-3 w-96 border-4 border-red-500 p-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
          nesciunt illum! Vero.
        </div>

        <div className="m-3 w-96 border-x-4 border-red-500 p-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
          nesciunt illum! Vero.
        </div>

        <div className="m-3 w-96 border-y-4 border-red-500 p-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
          nesciunt illum! Vero.
        </div>

        <div className="m-3 w-96 border-b-4 border-red-500 p-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
          nesciunt illum! Vero.
        </div>

        {/* Border Radius */}
        <div className="m-3 w-96 rounded border-4 border-yellow-500 p-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
          nesciunt illum! Vero.
        </div>

        <div className="m-3 w-96  rounded-b-lg border-4 border-yellow-500 p-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
          nesciunt illum! Vero.
        </div>

        <div className="m-3 w-96  rounded-t-full border-4 border-yellow-500 p-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
          nesciunt illum! Vero.
        </div>

        {/* Outline */}
        <button className="m-3 w-96  outline outline-4 outline-indigo-300">
          Click!
        </button>
      </main>
    </>
  );
};

export default BordersBorderRadius;
