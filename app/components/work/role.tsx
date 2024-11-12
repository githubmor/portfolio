import Image from "next/image";
import IconButton from "../icon-button";
import Tag from "../tag";
import DirectIcon from "./direct-icon";

function Role() {
  return (
    <div className="w-full flex flex-col bg-gray-100 rounded-xl shadow-2xl md:flex-row md:odd:flex-row-reverse">
      <div className="w-full flex justify-center items-center p-8 md:p-12 bg-gray-200 border border-gray-100 rounded-t-xl md:rounded-tr-none md:rounded-l-xl">
        <Image
          src="/w1.png"
          className="shadow-lg rounded-xl w-full h-full object-cover"
          alt="w1"
          width={496}
          height={402}
        />
      </div>
      <div className="w-full flex flex-col items-center gap-6 p-8 md:p-12 rounded-l-xl">
        <span className="text-lg text-left w-full font-semibold text-gray-900">
          Fiskil
        </span>
        <span className=" text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
          urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae.
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
          <IconButton>
            <DirectIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Role;
