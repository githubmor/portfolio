import MarkerIcon from "../marker-icon";
import Links from "./links";

function Desc() {
  return (
    <div className="flex flex-col gap-12 w-full">
      <div className="flex flex-col gap-2 w-full">
        <span className="text-4xl font-semibold text-gray-900 md:text-6xl md:font-bold">{`Hi, I'm Morteza 👋`}</span>
        <span className="text-base text-gray-600">
          {`I'm a Front-End Developer and Web Team Lead with over 3 years of experience in building web apps. I specialize in JavaScript, TypeScript, React, and Next.js, with additional skills in .NET Core for backend development. I'm passionate about writing clean, scalable code and collaborating with teams to solve complex challenges.`}
        </span>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex gap-2 text-gray-600">
          <MarkerIcon />
          <span className="text-base">Babol, Iran</span>
        </div>
        <div className="flex gap-2 text-gray-600">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="8" y="8" width="8" height="8" rx="4" fill="#10B981" />
          </svg>
          <span className="text-base">Available for new projects</span>
        </div>
      </div>
      <Links />
    </div>
  );
}

export default Desc;
