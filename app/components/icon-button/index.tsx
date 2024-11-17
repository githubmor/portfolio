"use client";
import Link from "next/link";
import { MouseEvent, ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick?: (e?: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => void;
  className?: string;
  href?: string;
};

function IconButton({ children, href, className = "", onClick }: Props) {
  return (
    <Link
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
      href={href ?? "#"}
      target={href && "_blank"}
      role="button"
      className={`p-[0.375rem] w-min h-min hover:bg-gray-100 text-gray-600 rounded-lg active:bg-gray-200 ${className}`}
    >
      {children}
    </Link>
  );
}

export default IconButton;
