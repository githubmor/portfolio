import Section from "@/app/components/section";
import Desc from "./desc";
import Pic from "./pic";

function Hero() {
  return (
    <Section id="hero">
      <div className="flex flex-col gap-12 w-full md:flex md:flex-row-reverse px-8">
        <Pic />
        <Desc />
      </div>
    </Section>
  );
}

export default Hero;
