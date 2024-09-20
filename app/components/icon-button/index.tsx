'use client'
import { MouseEvent, ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick?: (e?: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void;
  className?:string
};

function IconButton({ children,onClick, className="" }: Props) {
  return (
    <div
    onClick={onClick}
      role="button"
      className={`p-[0.375rem] w-min h-min hover:bg-gray-100 text-gray-600 rounded-lg active:bg-gray-200 ${className}`}
    >
      {children}
    </div>
  );
}

export default IconButton;
