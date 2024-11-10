type Props = {
  text: string;
};

function Tag({ text }: Props) {
  return (
    <div className="w-min bg-gray-200 px-5 py-1 rounded-xl flex justify-center items-center text-gray-600 text-sm whitespace-nowrap font-medium">
      {text}
    </div>
  );
}

export default Tag;
