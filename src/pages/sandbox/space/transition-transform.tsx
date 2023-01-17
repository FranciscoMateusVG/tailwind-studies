import { type NextPage } from "next";
import Head from "next/head";

const Interactivity: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/tailwind-icon.png" />
      </Head>
      <main className="p-10">
        {/* Make a simple button */}
        <button className="rounded bg-blue-500 py-2 px-4 font-bold text-white transition-colors duration-1000 hover:bg-blue-700">
          Click me
        </button>

        {/* Make a button with transition and transform */}
        <button className="transform rounded bg-blue-500 py-2 px-4 font-bold text-white transition-colors duration-1000 hover:scale-110 hover:bg-blue-700">
          Click me
        </button>
      </main>
    </>
  );
};

export default Interactivity;
