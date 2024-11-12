import CopyRightIcon from "./copy-right-icon";

function Footer() {
  return (
    <footer className="w-full flex flex-col justify-center items-center py-6 md:px-20 bg-gray-50">
      <div className="w-full flex flex-col justify-center items-center md:px-8 md:gap-16">
        <div className="flex justify-center items-center gap-2  text-gray-600 ">
          <CopyRightIcon />
          <span className="text-sm ">
            2024 | Designed and coded with ❤️️ by Morteza Darzi
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
