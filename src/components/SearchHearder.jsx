import Image from "next/image";
import Link from "next/link";
import SearchBox from "./SearchBox";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchHeaderOption from "./SearchHeaderOption";

export default function SearchHearder() {
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center justify-between">
        <Link href={"/"}>
          <Image
            src="/google-img.png"
            alt="google logo"
            width={120}
            height={40}
            priority
            style={{ width: "auto", height: "auto" }}
          />
        </Link>
        <div className="flex-1">
          <SearchBox />
        </div>
        <div className="hidden md:inline-flex space-x-2">
          <RiSettings3Line className="bg-transparent hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer" />
          <TbGridDots className="bg-transparent hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer" />
        </div>
        <button className="bg-blue-500 text-white px-6 py-2 font-medium hover:brightness-105 hover:shadow-md transition-shadow ml-2">
          Sign In
        </button>
      </div>
      <SearchHeaderOption />
    </header>
  );
}
