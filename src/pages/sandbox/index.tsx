import { type NextPage } from "next";
import Head from "next/head";
import { SandBoxLinkList } from "../../components/utils/SandBoxLinkList";
import { sandBoxLinks } from "../../constants/sandboxLinks.constants";

const SandBox: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tailwind Sandbox</title>
        <meta name="description" content="Tailwind Sandbox" />
        <link rel="icon" href="/tailwind-icon.png" />
      </Head>
      <main className="p-10">
        <div className="flex w-screen flex-wrap gap-5">
          {renderSandBoxLinks()}
        </div>
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

export default SandBox;
