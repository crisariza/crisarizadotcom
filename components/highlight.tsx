import Image from "next/image";
import codingPerson from "../public/codingPerson.svg";

export default function Highlight() {
  return (
    <div className="flex justify-content ">
      <div>
        {" "}
        <h2 className="text-xl font-bold">Engineering is my passion 🤝🏼</h2>
        <h3 className="mt-4">
          Experienced developer with 3 years in creating innovative projects.
          Promoted once in the first 18 months as a developer. Eager to
          contribute to exceptional businesses by crafting outstanding software
          products. Committed to prioritizing code quality over quantity. Worked
          in 5+ projects in the past years.
        </h3>
      </div>
      <div className="m-auto sm:w-1/2">
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
