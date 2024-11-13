import Image from "next/image";
import pic from "./Pic.png";

function Pic() {
  return (
    <div className="relative w-full pb-5 flex justify-center items-center">
      <div className="absolute top-0 bg-gray-200 border-gray border-8 md:translate-x-8 translate-y-5 md:translate-y-7  w-[17.5rem] md:h-[20rem] h-[17.5rem]" />
      <Image
        className="top-0 z-10 border-gray border-8 md:w-[17.5rem] md:h-[20rem]"
        src={pic}
        alt="pic"
      />
    </div>
  );
}

export default Pic;
