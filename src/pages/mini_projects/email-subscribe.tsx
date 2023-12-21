import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const EmailSubscribe: NextPage = () => {
  return (
    <>
      <Head>
        <title>Email Subscribe</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/tailwind-icon.png" />
      </Head>
      <main className="">
        <div className="flex h-screen items-center justify-center bg-slate-600">
          <div className="mx-6 rounded-2xl bg-zinc-800 p-2">
            <div className="flex flex-col rounded-l-xl md:flex-row">
              <div className="relative h-56 space-y-0  md:w-44">
                <Image
                  src={"/emailSubscribe/image.jpg"}
                  fill
                  alt={"image"}
                  className=" transform rounded-xl duration-200 hover:scale-102 hover:rounded-xl md:rounded-l-xl md:rounded-r-none hover:md:scale-105"
                />
              </div>

              <div className="p-6 md:p-12">
                <h2 className="text-center font-serif text-xl font-medium text-white md:text-left">
                  Get diet and fitness tips in your inbox
                </h2>

                <p className="max-w-xd my-4 text-center text-xs leading-5 tracking-wide text-white md:text-left">
                  Eat better and exercise better. Sign up for the Diet&Fitness
                  newsletter.
                </p>

                <div className="mt-5 flex flex-col space-y-4 md:flex-row md:space-x-3 md:space-y-0">
                  <input
                    type="text"
                    placeholder="Enter your email address"
                    className="border-zin-600 border bg-zinc-800 p-2 px-4 text-center text-white placeholder:text-center placeholder:text-xs focus:outline-none md:text-left placeholder:md:text-left"
                  />
                  <button className="rounded-md bg-lime-500 px-5 py-3 text-xs font-bold text-zinc-800 duration-500 hover:bg-lime-700 hover:text-white">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default EmailSubscribe;
