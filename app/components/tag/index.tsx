type Props = {
  text: string;
};

function Tag({ text }: Props) {
  return (
    <div className="bg-gray-200 px-5 py-1 rounded-xl flex justify-center items-center text-gray-600 text-sm font-medium">
      {text}
    </div>
  );
}

export default Tag;
