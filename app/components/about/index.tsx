import Tag from "../tag";
import Image from "next/image";

function About() {
  return (
    <div className="w-full h-min bg-gray-50 px-4 md:px-20 py-16 md:py-24">
      <div className="flex flex-col gap-6 md:gap-12 md:px-8">
        <div className="w-full h-min">
          <div className="flex justify-center items-center">
            <Tag text="About me" />
          </div>
        </div>
        <div className="w-full h-min flex flex-col md:flex md:flex-row gap-12 ">
          <div className="relative w-full md:w-1/2 pb-5 flex justify-center md:justify-start items-center">
            <div className="absolute top-0 bg-gray-200 border-gray-50 border-8 md:-translate-x-6 translate-y-5 md:translate-y-7 w-[20rem] md:w-[25rem] md:h-[30rem] h-[22.5rem]" />
            <Image
              width={280}
              height={360}
              className="top-0 z-10 border-gray-50 border-8 md:w-[25rem] md:h-[30rem]"
              src="/Pic2.png"
              alt="pic"
            />
          </div>
          <div className="flex flex-col gap-6  md:w-1/2">
            <span className="text-gray-900 text-2xl font-semibold">
              Curious about me? Here you have it:
            </span>
            <div className="flex flex-col gap-4">
              <span className="text-gray-600 text-base">
                {`I'm a passionate, self-proclaimed designer who specializes
                    in full stack development (React.js & Node.js). I am very
                    enthusiastic about bringing the technical and visual aspects
                    of digital products to life. User experience, pixel perfect
                    design, and writing clear, readable, highly performant code
                    matters to me.`}
              </span>
              <span className="text-gray-600 text-base">
                {`I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.`}
              </span>
              <span className="text-gray-600 text-base">
                {`I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.`}
              </span>
              <span className="text-gray-600 text-base">
                {`When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
