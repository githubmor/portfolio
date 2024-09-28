import IconButton from "../../icon-button";
import FigmaIcon from "./figma-icon";
import GithubIcon from "./github-icon";
import LinkedinIcon from "./linkedin-icon";
import MarkerIcon from "../marker-icon";

function Desc() {
  return (
    <div className="flex flex-col gap-12 w-full">
      <div className="flex flex-col gap-2 w-full">
        <span className="text-4xl font-semibold text-gray-900 md:text-6xl md:font-bold">{`Hi, I'm Morteza 👋`}</span>
        <span className="text-base text-gray-600">
          {`I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.`}
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
      <div className="flex gap-1 text-gray-600">
        <IconButton>
          <GithubIcon />
        </IconButton>
        <IconButton>
          <LinkedinIcon />
        </IconButton>
        <IconButton>
          <FigmaIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Desc;
