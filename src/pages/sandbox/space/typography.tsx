import { type NextPage } from "next";
import Head from "next/head";

const Typography: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/tailwind-icon.png" />
      </Head>

      <main className="p-10">
        {/* Font Family */}
        <div className="font-sans">Tailwind is awesome</div>
        <div className="font-serif">Tailwind is awesome</div>
        <div className="font-mono">Tailwind is awesome</div>
        {/* Font Size */}
        <div className="text-xs">Tailwind is awesome</div>
        <div className="text-sm">Tailwind is awesome</div>
        <div className="text-base">Tailwind is awesome</div>
        <div className="text-lg">Tailwind is awesome</div>
        <div className="text-xl">Tailwind is awesome</div>
        <div className="text-2xl">Tailwind is awesome</div>
        {/* Font Weight */}
        <div className="font-thin">Tailwind is awesome</div>
        <div className="font-extralight">Tailwind is awesome</div>
        <div className="font-light">Tailwind is awesome</div>
        <div className="font-normal">Tailwind is awesome</div>
        <div className="font-medium">Tailwind is awesome</div>
        <div className="font-semibold">Tailwind is awesome</div>
        <div className="font-bold">Tailwind is awesome</div>
        {/* Letter spacing */}
        <div className="tracking-tighter">Tailwind is awesome</div>
        <div className="tracking-tight">Tailwind is awesome</div>
        <div className="tracking-normal">Tailwind is awesome</div>
        <div className="tracking-wide">Tailwind is awesome</div>
        <div className="tracking-wider">Tailwind is awesome</div>
        {/* Text Alignement */}
        <div className="text-left">Tailwind is awesome</div>
        <div className="text-center">Tailwind is awesome</div>
        <div className="text-right">Tailwind is awesome</div>
        {/* Text Decoration */}
        <div className="underline">Tailwind is awesome</div>
        <div className="line-through">Tailwind is awesome</div>
        <div className="no-underline">Tailwind is awesome</div>
        {/* Decoration Style */}

        <div className="underline decoration-dotted">Tailwind is awesome</div>
        <div className="underline decoration-dashed">Tailwind is awesome</div>
        <div className="underline decoration-solid">Tailwind is awesome</div>
        <div className="underline decoration-double">Tailwind is awesome</div>
        <div className="decoration-none underline">Tailwind is awesome</div>

        {/* Decoration Offset */}
        <div className="underline decoration-4 underline-offset-4">
          Tailwind is awesome
        </div>
        {/* Text Transform */}
        <div className="uppercase">Tailwind is awesome</div>
        <div className="lowercase">Tailwind is awesome</div>
        <div className="capitalize">Tailwind is awesome</div>
      </main>
    </>
  );
};

export default Typography;
