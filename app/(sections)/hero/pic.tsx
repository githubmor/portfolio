import Image from "next/image";
import pic from "./Pic.jpg";

function Pic() {
  return (
    <div className="relative w-full flex justify-center">
      <div className="p-2 bg-gray-200 border-gray rounded-full h-fit"><Image
        className="top-0 z-10 border-gray border-8 md:w-[20rem] md:h-[20rem] rounded-full"
        src={pic}
        alt="pic"
      /></div>
    </div>
  );
}

export default Pic;
