import Head from "next/head";
import Title from "../components/title";
import Contact from "../components/contact";
import Highlight from "../components/highlight";
import Skills from "../components/skills";
import Experience from "../components/experience";

const Divider = () => {
  return <div className="border-t border-neutral-500 h-2 mt-5 mb-5"></div>;
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cristian Ariza - Full Stack Developer, Software Engineer</title>
        <meta
          name="description"
          content="I'm Cristian Ariza. A Full Stack Developer, Software Engineer based in Buenos Aires."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-screen-md m-auto p-4 sm:p-0">
        <Title></Title>
        <Divider></Divider>
        <Contact></Contact>
        <Divider></Divider>
        <Highlight></Highlight>
        <Divider></Divider>
        <Skills></Skills>
        <Divider></Divider>
        <Experience></Experience>
      </main>
    </div>
  );
}
