import Tag from "../../components/tag";
import Image from "next/image";
import pic2 from "./Pic2.png";
import Section from "@/app/components/section";

function About() {
  return (
    <Section id="about" darker>
      <div className="flex flex-col gap-6 md:gap-12 md:px-8">
        <div className="w-full h-min">
          <div className="flex justify-center items-center">
            <Tag text="About me" />
          </div>
        </div>
        <div className="w-full h-min flex flex-col md:flex md:flex-row gap-12 ">
          <div className="relative w-full md:w-1/2 pb-5 flex justify-center md:justify-start items-center">
            <Image
              className="top-0 z-10 border-gray-50 border-8 md:w-[25rem] md:h-[25rem]"
              src={pic2}
              alt="pic"
            />
          </div>
          <div className="flex flex-col gap-6  md:w-1/2">
            <span className="text-gray-900 text-2xl font-semibold">
              Curious about me? Here you have it:
            </span>
            <div className="flex flex-col gap-4">
              <span className="text-gray-600 text-base">
                {`I'm a Front-End Developer and Web Team Lead with over three years of hands-on experience building and maintaining web applications. My main toolkit includes JavaScript, TypeScript, React, and Next.js, but I've also spent time on the backend using .NET Core with C#. I love getting into the code, making sure it's clean, scalable, and maintainable. Following Clean Architecture principles is something I take seriously to keep projects solid and organized.`}
              </span>
              <span className="text-gray-600 text-base">
                {`I’m always excited to explore new technologies and figure out ways to solve complex problems. Whether it’s learning a new framework or diving into an unfamiliar project, I enjoy the challenge and the growth that comes with it. I believe in staying adaptable and continuously learning to keep up with the ever-evolving tech landscape.`}
              </span>
              <span className="text-gray-600 text-base">
                {`Collaboration is something I’m truly passionate about. I love working with other developers, bouncing ideas off each other, and figuring out the best solutions as a team. I’m always looking for opportunities to connect with like-minded individuals, join teams, and contribute to exciting projects.`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default About;
