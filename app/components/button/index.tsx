import React from 'react'

type Props = {
    text:string
    className?:string
}

const Button = ({text,className=""}: Props) => {
  return (
    <button className={`px-4 py-[0.375rem] bg-gray-900 text-gray-50 hover:text-gray-700 active:text-gray-800 ${className}`}>{text}</button>
  )
}

export default Button