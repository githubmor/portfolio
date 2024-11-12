import Tag from "../tag";
import Position from "./position";

function Experience() {
  return (
    <div className="w-full flex justify-center items-center px-4 md:px-20 py-16 md:py-24 bg-gray-50 ">
      <div className="w-full flex flex-col justify-center items-center gap-6 md:gap-12 md:px-8">
        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex justify-center items-center">
            <Tag text="Experience" />
          </div>
          <div className="w-full flex justify-center items-center">
            <span className="text-lg text-gray-600">
              Here is a quick summary of my most recent experiences:
            </span>
          </div>
        </div>
        <Position
          title="Web Team Lead"
          duration="Mar 2024 - Present"
          expriences={[
            "Managed a web team consisting of 2 front-end developers, 1 back-end developer, and a designer",
            "Developed symmetric and asymmetric encryption methods in JavaScript for front-end and C# for back-end",
            "Designed a handshake protocol to enhance security between front-end and back-end communications",
            "Implemented Single Sign-In for the EMR project, integrating MVC and React projects",
            "Managed the development of 4 front-end applications using React and back-end with .Net 8, in collaboration with the web team",
          ]}
        />
        <Position
          title="Team Supervisor - Full Stack Developer"
          duration="Jul 2023 - Apr 2024"
          expriences={[
            "Developed 3 new front-end applications using React and back-end with .Net 8",
            "Created a back-end based on .Net 8 using minimal API, Swagger, and JWT tokens for authentication",
            "Managed version control for projects on a private GitHub repository and facilitated team coding",
            "Developed the experimental LearnAI project for integration with ChatGPT and creating automated prompts",
          ]}
        />
        <Position
          title="Frontend Developer React.js"
          duration="Dec 2021 - Sep 2023"
          expriences={[
            "Built and developed 3 web applications using React and .Net",
            "Created a monorepo for React component projects using Lerna",
            "Implemented an npm private registry using Verdaccio on the company server",
            "Developed an Adapter project to facilitate the integration and use of the company's legacy DLLs",
          ]}
        />
      </div>
    </div>
  );
}

export default Experience;
