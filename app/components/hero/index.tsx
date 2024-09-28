import Desc from "./desc";
import Pic from "./pic";

function Hero() {
  return (
    <div className="px-4 py-16 md:px-20 md:py-24">
      <div className="flex flex-col gap-12 w-full md:flex md:flex-row-reverse px-8">
        <Pic />
        <Desc />
      </div>
    </div>
  );
}

export default Hero;
