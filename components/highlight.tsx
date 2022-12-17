import Image from "next/image";
import codingPerson from "../public/codingPerson.svg";

export default function Highlight() {
  return (
    <div className="flex justify-content ">
      <div>
        {" "}
        <h1 className="text-xl font-bold">Engineering is my passion 🤝🏼</h1>
        <p className="mt-4">
          Developer with 2+ years of experience. Dedicated to make quality code
          over quantity.
        </p>
      </div>
      <div className="m-auto sm:w-2/6">
        <Image
          src={codingPerson}
          alt="Coding Person"
          priority={true}
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
        />
      </div>
    </div>
  );
}
