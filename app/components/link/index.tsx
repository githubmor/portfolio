import Link from "next/link";
import React from "react";

type Props = {
  className?: string;
  text: string;
  href: string;
  isMenu?: boolean;
};

function Links({ text, className = "", href, isMenu = false }: Props) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Link
      onClick={handleClick}
      href={href}
      className={`block text-base text-gray-600 hover:text-gray-900 ${
        !isMenu && "underline"
      } ${className}`}
    >
      {text}
    </Link>
  );
}

export default Links;
