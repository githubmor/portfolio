import Section from "@/app/components/section";
import Tag from "../../components/tag";
import Links from "../hero/desc/links";
import Email from "./email";
import Phone from "./phone";

function ContactMe() {
  return (
    <Section id="contact-me">
      <div className="w-full flex flex-col justify-center items-center gap-6 md:gap-12 md:px-8">
        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex flex-col justify-center items-center">
            <Tag text="Get in touch" />
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <span className="text-xl text-gray-600">
              {` What’s next? Feel free to reach out to me if you're looking for a
              developer, have a query, or simply want to connect.`}
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:gap-4">
          <Email />
          <Phone />
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-2 ">
            <span className="text-gray-600 ">
              You may also find me on these platforms!
            </span>
            <div className="w-full flex flex-col justify-center items-center gap-4">
              <Links />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default ContactMe;
