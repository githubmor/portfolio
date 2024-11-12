import Image from "next/image";

type Props = {
  duration: string;
  title: string;
  expriences: string[];
};

function Position({ duration, expriences, title }: Props) {
  return (
    <div className="w-full flex flex-col p-8 bg-gray-100 shadow-md rounded-xl">
      <div className="w-full flex flex-col gap-4 md:flex-row md:gap-12">
        <div className="flex flex-col gap-3 ">
          <Image src="/psd-logo.png" alt="logo-co" width={102} height={28} />
        </div>
        <div className=" flex gap-6 md:order-3 md:flex-col md:h-7 ">
          <span className="text-gray-700 whitespace-nowrap ">{duration}</span>
        </div>
        <div className="w-full flex-1 flex flex-col gap-4 md:order-2">
          <span className="text-lg text-gray-900 font-semibold">{title}</span>
          <div className="list-disc w-full flex flex-col gap-1 ">
            {expriences.map((it) => (
              <li key={it} className="text-gray-600">
                {it}
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Position;
