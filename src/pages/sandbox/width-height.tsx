import { type NextPage } from "next";
import Head from "next/head";

const WidthHeight: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-10">
        {/* Width */}
        <div className="w-4 bg-black text-white">Hello</div>
        <div className="w-48 bg-black text-white">Hello</div>
        <div className="w-96 bg-black text-white">Hello</div>

        {/* Percentages */}
        <div className="w-1/4 bg-green-500 text-white">Hello</div>
        <div className="w-1/3 bg-green-600 text-white">Hello</div>
        <div className="w-1/2 bg-green-700 text-white">Hello</div>

        {/* Width of the view port */}
        <div className="w-screen bg-blue-800 text-white">Hello</div>
        <div className="w-full bg-blue-900 text-white">Hello</div>

        {/* Arbitrary Width */}
        <div className="w-[300px] bg-red-600 text-white">Hello</div>

        {/* Mas width */}
        <div className="max-w-sm bg-yellow-700 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas facilis,
          non reiciendis iste labore totam quis consequatur eveniet nesciunt,
          architecto, corrupti eius alias esse? Quod qui facilis in libero
          numquam!
        </div>

        {/* Height */}
        <div className="flex h-64 items-end">
          <div className="h-24 w-20 bg-orange-800">1</div>
          <div className="h-auto w-20 bg-orange-600">2</div>
          <div className="min-h-full w-20 bg-orange-500">3</div>
          <div className="h-full w-20 bg-orange-400">4</div>
        </div>
      </main>
    </>
  );
};

export default WidthHeight;