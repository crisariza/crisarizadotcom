import Image from "next/image";
import profilePic from "../public/profilePic.png";

export default function Contact() {
  return (
    <div className="sm:flex sm:justify-content">
      <div className="w-2/5 m-auto">
        <Image
          src={profilePic}
          alt="Profile Picture"
          className="rounded-full m-auto"
          priority={true}
        />
      </div>

      <div className="sm:ml-4">
        <h1 className="text-xl font-bold">
          {" "}
          Looking forward to create new complex software engineering projects.
        </h1>
        <p className="border-l-4 border-neutral-500 pl-4 mt-4">
          {" "}
          Thrilled to use programming skills to help an amazing company create a
          fantastic product. Excited about business, startups, crypto and
          cutting-edge tech.
        </p>
        <div className="flex justify-content mt-4 mb-4">
          {" "}
          <div className="mr-4">
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
          <div className="flex items-center justify-center mr-4 underline">
            <a
              href="https://linkedin.com/in/crisariza"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-300"
            >
              Linkedin
            </a>{" "}
          </div>
          <div className="flex items-center justify-center mr-4 underline">
            <a
              href="https://github.com/crisariza"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-300"
            >
              Github
            </a>
          </div>
          <div className="flex items-center justify-center underline">
            mecrisariza@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
}
