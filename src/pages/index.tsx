import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/tailwind-icon.png" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <Link
          className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
          href="/sandbox"
          target="_blank"
        >
          <h3 className="text-2xl font-bold">SandBox</h3>
          <div className="text-lg">
            Just the basics - Everything you need to know to set up your
            database and authentication.
          </div>
        </Link>
      </main>
    </>
  );
};

export default Home;
