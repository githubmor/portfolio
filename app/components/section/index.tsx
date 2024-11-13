import { PropsWithChildren } from "react";

type Props = {
  className?: string;
  darker?: boolean;
  id: string;
};

function Section({
  className = "",
  children,
  darker = false,
  id,
}: PropsWithChildren<Props>) {
  return (
    <div
      id={id}
      className={`w-full flex flex-col justify-center items-center h-min ${
        darker ? "bg-gray-50" : "bg-gray"
      }  px-4 md:px-20 py-16 md:py-24 ${className}`}
    >
      {children}
    </div>
  );
}

export default Section;
