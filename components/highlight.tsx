import Image from "next/image";
import codingPerson from "../public/codingPerson.svg";

export default function Highlight() {
  return (
    <div className="flex justify-content ">
      <div>
        {" "}
        <h2 className="text-xl font-bold">Engineering is my passion 🤝🏼</h2>
        <h3 className="mt-4">
          Developer with 2+ years of experience. Dedicated to make quality code
          over quantity.
        </h3>
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
