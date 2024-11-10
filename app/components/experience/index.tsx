import Tag from "../tag";
import Work from "./work";

function Experience() {
  return (
    <div className="w-full flex justify-center items-center px-4 md:px-20 py-16 md:py-24 bg-gray-50 ">
      <div className="w-full flex flex-col justify-center items-center gap-6 md:gap-12 md:px-8">
        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex justify-center items-center">
            <Tag text="Experience" />
          </div>
          <div className="w-full flex justify-center items-center">
            <span className="text-lg text-gray-600">
              Here is a quick summary of my most recent experiences:
            </span>
          </div>
        </div>
        <Work />
        <Work />
        <Work />
        <Work />
      </div>
    </div>
  );
}

export default Experience;
