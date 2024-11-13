import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
};

function Tech({ icon, title }: Props) {
  return (
    <div className="w-min h-full flex flex-col gap-2  text-center">
      {icon}
      {title}
    </div>
  );
}

export default Tech;
