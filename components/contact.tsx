import Image from "next/image";
import profilePic from "../public/profilePic.png";

export default function Contact() {
  return (
    <div className="sm:flex sm:justify-content">
      <div className="w-2/6 sm:w-2/5 mb-5 m-auto sm:m-auto">
        <Image
          src={profilePic}
          alt="Profile Picture"
          className="rounded-full"
          priority={true}
        />
      </div>

      <div className="sm:ml-5">
        <h2 className="text-xl font-bold">
          {" "}
          Looking forward to create new complex software engineering projects.
        </h2>
        <p className="border-l-4 border-neutral-500 pl-5 mt-5">
          {" "}
          Thrilled to use programming skills to help an amazing company create a
          fantastic product. Excited about business, startups, crypto and
          cutting-edge tech.
        </p>
        <div className="flex flex-wrap justify-space-between mb-5">
          {" "}
          <div className="mr-5 mt-5">
            {" "}
            <a
              href="https://crisariza.com/Cristian-Ariza_Resume_Front-End-Developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="p-2 bg-purple-600 rounded-lg hover:bg-purple-800">
                Resume
              </button>{" "}
            </a>{" "}
          </div>
          <div className="flex items-center justify-center mr-5 mt-5 underline">
            <a
              href="https://linkedin.com/in/crisariza"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-300"
            >
              Linkedin
            </a>{" "}
          </div>
          <div className="flex items-center justify-center mr-5 mt-5 underline">
            <a
              href="https://github.com/crisariza"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-300"
            >
              Github
            </a>
          </div>
          <div className="flex items-center justify-center mt-5 underline">
            mecrisariza@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
}
