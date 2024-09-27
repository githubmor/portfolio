import Link from 'next/link'
import React from 'react'

type Props = {
  className?: string;
  text: string;
  href: string;
  isMenu?:boolean
};

function Links({text,className="",href,isMenu=false}: Props) {
  return (
    <Link href={href} className={`block text-base text-gray-600 hover:text-gray-900 ${!isMenu&&"underline"} ${className}`} >{text}</Link>
  )
}

export default Links