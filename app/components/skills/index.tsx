import Tag from "../tag";
import Tech from "./tech";
import { techs } from "./utils";

function Skills() {
  return (
    <div className="w-full h-min flex flex-col px-4 py-16 md:px-20 md:py-24 justify-center items-center bg-gray">
      <div className="w-full flex flex-col gap-6 md:gap-12 md:px-8">
        <div className="flex flex-col gap-4">
          <div className="w-full flex justify-center items-center">
            <Tag text="Skills" />
          </div>
          <div className="flex flex-col">
            <span className="text-center w-full text-lg">
              The skills, tools and technologies I am really good at:
            </span>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="grid grid-cols-3 md:grid-cols-5 justify-items-center gap-4 md:gap-12">
            {techs.map((tech) => (
              <Tech key={tech.title} icon={tech.icon} title={tech.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
