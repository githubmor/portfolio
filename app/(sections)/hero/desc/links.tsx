import IconButton from "@/app/components/icon-button";
// import FigmaIcon from "./figma-icon";
import GithubIcon from "./github-icon";
import LinkedinIcon from "./linkedin-icon";

function Links() {
  return (
    <div className="flex gap-1 text-gray-600">
      <IconButton href="https://github.com/githubmor">
        <GithubIcon />
      </IconButton>
      <IconButton href="http://www.linkedin.com/in/morteza-darzi">
        <LinkedinIcon />
      </IconButton>
      {/* <IconButton href="">
        <FigmaIcon />
      </IconButton> */}
    </div>
  );
}

export default Links;
