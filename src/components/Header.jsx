import Image from "next/image";
import HeaderItem from "./HeaderItem";

import {
  CheckBadgeIcon,
  RectangleStackIcon,
  BoltIcon,
  MagnifyingGlassIcon,
  UserIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

function Header(props) {
  return (
    <header className="flex flex-col sm:flex-row m-5 items-center sm:items-end justify-between h-auto">
      <div className="flex  flex-grow  justify-evenly max-w-2xl ">
        <HeaderItem title="Home" Icon={HomeIcon} />
        <HeaderItem title="Home" Icon={CheckBadgeIcon} />
        <HeaderItem title="Trending" Icon={BoltIcon} />
        <HeaderItem title="Collections" Icon={RectangleStackIcon} />
        <HeaderItem title="Search" Icon={MagnifyingGlassIcon} />
        <HeaderItem title="Account" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        alt="Hulu Logo"
        width={200}
        height={100}
      />
    </header>
  );
}

export default Header;
