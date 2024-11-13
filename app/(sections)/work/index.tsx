import Tag from "../../components/tag";
import Role from "./role";

function Work() {
  return (
    <div className="w-full flex flex-col justify-center items-center px-4 md:px-20 py-16 md:py-24 bg-gray ">
      <div className="w-full flex flex-col justify-center items-center gap-6 md:gap-12 md:px-8">
        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex flex-col justify-center items-center">
            <Tag text="Work" />
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <span className="text-lg text-gray-600">
              Some of the noteworthy projects I have built:
            </span>
          </div>
        </div>
        <Role />
        <Role />
        <Role />
      </div>
    </div>
  );
}

export default Work;
