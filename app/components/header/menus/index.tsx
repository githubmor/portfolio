type Props = {
  className?: string;
};

function Menus({ className = "" }: Props) {
  return (
    <div
      className={`flex flex-col gap-4 border-b border-gray-100 p-4 ${className}`}
    >
      <span>About</span>
      <span>Work</span>
      <span>Testimonials</span>
      <span>Contact</span>
    </div>
  );
}

export default Menus;
