import Tag from "../tag";
import Comment from "./comment";

function Testimonials() {
  return (
    <div className="w-full flex flex-col justify-center items-center px-4 md:px-20 py-16 md:py-24 bg-gray-50">
      <div className="w-full flex flex-col justify-center items-center gap-6 md:gap-12 md:px-8">
        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex flex-col justify-center items-center">
            <Tag text="Testimonials" />
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <span className="text-lg w-full text-center text-gray-600">
              Nice things people have said about me:
            </span>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid md:grid-cols-2 xl:grid-cols-3  gap-6 md:gap-12 rounded-xl">
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
