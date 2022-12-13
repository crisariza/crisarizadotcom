import Image from "next/image";

export default function Contact() {
  return (
    <div className="flex justify-content">
      <div className="w-2/5 m-auto">
        <Image
          src="/me.png"
          alt="Cristian Ariza face"
          width={150}
          height={50}
          className="rounded-full m-auto"
        />
      </div>

      <div className="ml-4">
        <h1 className="text-xl font-bold">
          {" "}
          Looking forward to create new complex software engineering projects.
        </h1>
        <p className="border-l-4 border-gray-500 pl-4 mt-4">
          {" "}
          Thrilled to use programming skills to help an amazing company create a
          fantastic product. Excited about business, startups, crypto and
          cutting-edge tech.
        </p>
        <div className="mb-4">
          <div className="flex justify-content mt-4">
            <div className="mr-4">
              <a
                href="https://crisariza.com/Cristian-Ariza_Resume_Front-End-Developer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-purple-600 rounded-lg"
              >
                {" "}
                Get my resume
              </a>
            </div>
            <div className="flex justify-content pr-4 underline">
              <a
                href="https://linkedin.com/in/crisariza"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>{" "}
            </div>
            <div className="flex justify-content  underline">
              <a
                href="https://github.com/crisariza"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
