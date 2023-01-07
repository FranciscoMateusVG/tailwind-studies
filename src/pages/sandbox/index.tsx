import { type NextPage } from "next";
import Head from "next/head";
import { SandBoxLinkList } from "../../components/utils/SandBoxLinkList";

const SandBox: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tailwind Sandbox</title>
        <meta name="description" content="Tailwind Sandbox" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-10">
        <div className="flex flex-col space-y-4">{renderSandBoxLinks()}</div>
      </main>
    </>
  );
};

const renderSandBoxLinks = () =>
  sandBoxLinks.map(({ url, description, title }, index) => (
    <SandBoxLinkList
      key={index}
      link={url}
      description={description}
      title={title}
    />
  ));

const sandBoxLinks = [
  {
    url: "/sandbox/utility-first",
    title: "Utility First",
    description:
      "Just the basics - Everything you need to know to set up your database and authentication.",
  },
  {
    url: "/sandbox/container-and-spacing",
    title: "Container & Spacing",
    description:
      "Just the basics - Everything you need to know to set up your database and authentication.",
  },
  {
    url: "/sandbox/colors",
    title: "Colors",
    description:
      "Just the basics - Everything you need to know to set up your database and authentication.",
  },
  {
    url: "/sandbox/typography",
    title: "Typography",
    description:
      "Just the basics - Everything you need to know to set up your database and authentication.",
  },
];

export default SandBox;
