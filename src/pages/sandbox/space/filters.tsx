import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Filters: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/tailwind-icon.png" />
      </Head>
      <main className="p-10">
        {/* Blur */}
        <div className="flex">
          <Image
            className="m-2"
            width={500}
            height={500}
            src="/img1.jpg"
            alt="Random Image"
          />
          <Image
            className="m-2 blur-sm"
            width={500}
            height={500}
            src="/img1.jpg"
            alt="Random Image"
          />
        </div>

        {/* Brightness */}
        <div className="flex max-w-sm">
          <Image
            className="m-2 brightness-100"
            width={500}
            height={500}
            src="/img2.jpg"
            alt="Random Image"
          />
          <Image
            className="m-2 brightness-50"
            width={500}
            height={500}
            src="/img2.jpg"
            alt="Random Image"
          />
          <Image
            className="m-2 brightness-75"
            width={500}
            height={500}
            src="/img2.jpg"
            alt="Random Image"
          />
          <Image
            className="m-2 brightness-0"
            width={500}
            height={500}
            src="/img2.jpg"
            alt="Random Image"
          />
        </div>
        {/* Contrast */}

        <div className="flex max-w-sm">
          <Image
            className="m-2 contrast-0"
            width={500}
            height={500}
            src="/img3.jpg"
            alt="Random Image"
          />
          <Image
            className="m-2 contrast-50"
            width={500}
            height={500}
            src="/img3.jpg"
            alt="Random Image"
          />
          <Image
            className="m-2 contrast-75"
            width={500}
            height={500}
            src="/img3.jpg"
            alt="Random Image"
          />
          <Image
            className="m-2 contrast-100"
            width={500}
            height={500}
            src="/img3.jpg"
            alt="Random Image"
          />
        </div>

        {/* Grayscale */}
        <div className="flex">
          <Image
            className="m-2"
            width={500}
            height={500}
            src="/img4.jpg"
            alt="Random Image"
          />
          <Image
            className="m-2 grayscale"
            width={500}
            height={500}
            src="/img4.jpg"
            alt="Random Image"
          />
        </div>
        {/* Invert */}
        <div className="flex">
          <Image
            className="m-2 "
            width={500}
            height={500}
            src="/img5.jpg"
            alt="Random Image"
          />
          <Image
            className="m-2 invert"
            width={500}
            height={500}
            src="/img5.jpg"
            alt="Random Image"
          />
        </div>

        {/* Sepia */}
        <div className="flex">
          <Image
            className="m-2 "
            width={500}
            height={500}
            src="/img6.jpg"
            alt="Random Image"
          />
          <Image
            className="m-2 sepia"
            width={500}
            height={500}
            src="/img6.jpg"
            alt="Random Image"
          />
        </div>

        {/* Hue Rotate */}
        <div className="flex max-w-sm">
          <Image
            className="m-2 "
            width={500}
            height={500}
            src="/img7.jpg"
            alt="Random Image"
          />
          <Image
            className="m-2 hue-rotate-15"
            width={500}
            height={500}
            src="/img7.jpg"
            alt="Random Image"
          />
          <Image
            className="m-2 hue-rotate-30"
            width={500}
            height={500}
            src="/img7.jpg"
            alt="Random Image"
          />
          <Image
            className="m-2 hue-rotate-60"
            width={500}
            height={500}
            src="/img7.jpg"
            alt="Random Image"
          />
        </div>
      </main>
    </>
  );
};

export default Filters;
