import Image from "next/image";

export default function Highlight() {
  return (
    <div className="flex justify-content ">
      <div>
        {" "}
        <h1 className="text-xl font-bold">Engineering is my passion 🤝🏼</h1>
        <p>
          Developer with 2+ years of experience. Dedicated to make quality code
          over quantity.
        </p>
      </div>
      <div className="w-auto lg:w-2/6">
        <Image
          src="/draw.png"
          alt="Person coding"
          width={300}
          height={150}
          className="p-2"
        />
      </div>
    </div>
  );
}
