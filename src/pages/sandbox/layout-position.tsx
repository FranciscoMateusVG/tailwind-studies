import { type NextPage } from "next";
import Head from "next/head";

const LayoutPosition: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-10">
        {/* Positioning */}
        <div className="relative mb-5 h-36 w-64 bg-red-200 ">
          <div className="absolute bottom-0 right-0 flex h-24 w-24 flex-col justify-center bg-red-500">
            <p className="p-1 text-center">Absolute Child</p>
          </div>
        </div>

        {/* Top left corner */}
        <div className="relative mb-5 flex h-32 w-32 bg-yellow-200">
          <div className="absolute left-0 top-0 flex  h-20  w-20 flex-col justify-center bg-yellow-500">
            <p className="p-1 text-center">Absolute Child</p>
          </div>
        </div>

        {/* Bottom right corner */}
        <div className="relative mb-5 h-32 w-32 bg-green-200">
          <div className="absolute right-0 bottom-0 flex h-20 w-20  flex-col justify-center  bg-green-500">
            <p className="h-auto p-1 text-center">Absolute Child</p>
          </div>
        </div>

        {/* Span Top Edge */}
        <div className="relative mb-5 h-32 w-32 bg-cyan-200">
          <div className="absolute inset-x-0 top-0 flex h-16  flex-col justify-center  bg-cyan-500">
            <p className="h-auto p-1 text-center">Absolute Child</p>
          </div>
        </div>
        {/* Span Left Edge */}
        <div className="relative mb-5 h-32 w-32 bg-slate-200">
          <div className="absolute  inset-y-0  left-0 flex w-20  flex-col justify-center  bg-slate-500">
            <p className="h-auto p-1 text-center">Absolute Child</p>
          </div>
        </div>
        {/* Span All Edges */}
        <div className="relative mb-5 h-32 w-32 bg-emerald-200">
          <div className="absolute inset-x-0 inset-y-0 flex flex-col justify-center bg-emerald-500">
            <p className="h-auto p-1 text-center">Absolute Child</p>
          </div>
        </div>
        {/* Display Classes */}
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          <span className="inline font-bold"> This is inline </span>
          repellendus provident
          <span className="inline-block font-bold">This is inline block</span>
          dolorum unde molestiae
          <span className="block font-bold">This is block</span> veritatis
          aliquam, incidunt ex consequatur distinctio!
          <span className="hidden">This is HIDDDEN!</span>
        </div>

        {/* Z-Index */}
        <div className="relative h-36">
          <div className="absolute left-10 z-40 h-24 w-24 bg-blue-400">1</div>
          <div className="absolute left-20 h-24 w-24 bg-blue-500">2</div>
          <div className="absolute left-40 z-10 h-24 w-24 bg-blue-600">3</div>
          <div className="absolute left-60 z-20 h-24 w-24 bg-blue-700">4</div>
          <div className="absolute left-80 z-30 h-24 w-24 bg-blue-800">5</div>
        </div>
      </main>
    </>
  );
};

export default LayoutPosition;