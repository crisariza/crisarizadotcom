export default function Experience() {
  return (
    <div>
      <h2 className="text-xl font-bold text-center mb-2">
        Knowing skills that matter{" "}
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="border border-neutral-500 bg-neutral-800 shadow-md hover:shadow-lg rounded-xl w-64 m-2 sm:m-3 p-4 text-left space-y-4">
          <h3 className="text-lg sm:text-xl text-purple-400 font-bold">
            Front End
          </h3>
          <h3 className="sm:text-lg text-neutral-100">
            React - Redux - NextJS - JavaScript - CSS - HTML - TailwindCSS
          </h3>
        </div>{" "}
        <div className="border border-neutral-500 bg-neutral-800 shadow-md hover:shadow-lg rounded-xl w-64 m-2 sm:m-3 p-4 text-left space-y-4">
          <h2 className="text-lg sm:text-xl text-purple-400 font-bold">
            Back End
          </h2>
          <h3 className="sm:text-lg text-neutral-100">
            Python - Git - Node - Express - PostgreSQL - MongoDB - Sequelize
          </h3>
        </div>{" "}
      </div>
    </div>
  );
}
