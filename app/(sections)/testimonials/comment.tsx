import Image from "next/image";
import user from "./user.svg";

function Comment() {
  return (
    <div className="w-full h-full flex flex-col items-center gap-6 p-8 md:p-12 rounded-xl bg-gray-100 shadow-2xl">
      <div className="w-16 h-16 flex justify-center items-center  bg-[#9CA3AF] rounded-full">
        <Image src={user} alt="user" />
      </div>
      <span className="text-gray-600">
        “Job well done! I am really impressed. He is very very good at what he
        does:) I would recommend Sagar and will rehire in the future for
        Frontend development.”
      </span>
      <div className="w-full flex flex-col justify-center items-center gap-1">
        <span className="font-semibold text-gray-900 text-lg">John Doe</span>
        <span className="text-sm text-gray-600">Founder - xyz.com</span>
      </div>
    </div>
  );
}

export default Comment;
