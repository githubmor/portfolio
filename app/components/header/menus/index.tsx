import Links from "../../link";

type Props = {
  className?: string;
};

function Menus({ className = "" }: Props) {
  return (
    <div
      className={`flex flex-col md:flex md:flex-row gap-4 md:gap-6 border-b border-gray-100 md:border-0 p-4 md:p-0 ${className}`}
    >
      <Links text="About" isMenu href="/about" />
      <Links text="Work" isMenu href="/work" />
      <Links text="Testimonials" isMenu href="/testi" />
      <Links text="Contact" isMenu href="/contact" />
    </div>
  );
}

export default Menus;
