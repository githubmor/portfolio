import Image from "next/image";
import IconButton from "../../components/icon-button";
import Tag from "../../components/tag";
import DirectIcon from "./direct-icon";
import w1 from "./w1.png";

function Role() {
  return (
    <div className="w-full flex flex-col bg-gray-100 rounded-xl shadow-2xl md:flex-row md:odd:flex-row-reverse">
      <div className="w-full flex justify-center items-center p-8 md:p-12 bg-gray-200 border border-gray-100 rounded-t-xl md:rounded-tr-none md:rounded-l-xl">
        <Image
          src={w1}
          className="shadow-lg rounded-xl w-full  object-cover"
          alt="w1"
        />
      </div>
      <div className="w-full flex flex-col items-center gap-6 p-8 md:p-12 rounded-l-xl">
        <span className="text-lg text-left w-full font-semibold text-gray-900">
          Portfolio
        </span>
        <span className=" text-gray-600">
          Built a personal portfolio with Next.js, TypeScript, Tailwind and DaisyUI, demonstrating expertise in modern web development and responsive design
        </span>
        <div className="w-full flex flex-wrap gap-2 even:flex-row-reverse">
          <Tag text="React" />
          <Tag text="Next.js" />
          <Tag text="TypeScript" />
          <Tag text="Tailwind" />
          <Tag text="Daisyui" />
          <Tag text="Figma" />
        </div>
        <div className="w-full flex gap-3">
          <IconButton href="https://morteza-darzi.liara.run/">
            <DirectIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Role;
