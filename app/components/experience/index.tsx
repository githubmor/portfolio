import Tag from "../tag";
import Work from "./work";

function Experience() {
  return (
    <div className="w-full flex justify-center items-center px-4 py-16 bg-gray-50">
      <div className="w-full flex flex-col justify-center items-center gap-6">
        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex justify-center items-center">
            <Tag text="Experience" />
          </div>
          <div className="w-full flex justify-center items-center">
            <span className="text-lg text-gray-600">
              Here is a quick summary of my most recent experiences:
            </span>
          </div>
          <Work />
          <Work />
          <Work />
          <Work />
        </div>
      </div>
    </div>
  );
}

export default Experience;
