import Image from "next/image";

function Work() {
  return (
    <div className="w-full flex flex-col p-8 bg-gray-100 shadow-md rounded-xl">
      <div className="w-full flex flex-col gap-4">
        <div id="column" className="w-full flex flex-col gap-3">
          <Image src="upwork.svg" alt="logo-co" width={102} height={28} />
        </div>
        <div className="flex gap-6">
          <span className="text-gray-700">Nov 2021 - Present</span>
        </div>
        <div className="w-full flex flex-col gap-4">
          <span className="text-lg text-gray-900 font-semibold">
            Sr. Frontend Developer
          </span>
          <div className="list-disc w-full flex flex-col gap-1 ">
            <li className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
            <li className="text-gray-600">
              Ut pretium arcu et massa semper, id fringilla leo semper.
            </li>
            <li className="text-gray-600">Sed quis justo ac magna.</li>
            <li className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
