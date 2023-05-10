'use client'
import requests from "@/utilis/requests";
import { useRouter } from "next/navigation";

function Nav(props) {
   const router = useRouter()
  return (
    <nav className="relative">
      <div className="flex px-10 text-2xl whitespace-nowrap space-x-10 overflow-x-scroll scrollbar-hide sm:px-20 sm:space-x-20">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
          onClick={() => router.push(`/?genre=${key}`)}
            key={key}
            className="last:pr-24 cursor-poiner transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-gray-900 h-10 w-1/12"/>
    </nav>
  );
}

export default Nav;
