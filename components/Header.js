import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import Headeritem from "./Headeritem";

function Header() {

  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between
    items-center h-auto">
        <div className="flex flex-grow justify-evenly max-w-2xl">
          <Headeritem title="HOME" Icon={HomeIcon} />
          <Headeritem title="TRENDING" Icon={LightningBoltIcon} />
          <Headeritem title="VERIFIED" Icon={BadgeCheckIcon} />
          <Headeritem title="COLLECTIONS" Icon={CollectionIcon} />
          <Headeritem title="SEARCH" Icon={SearchIcon} />
          <Headeritem title="ACCOUNT" Icon={UserIcon} />
        </div>
        <Image 
            className="object-contain"
            src="https://cdn.kibrispdr.org/data/753/nobar-png-46.png"
            width={300}
            height={100}
            alt="nobar"
        />
    </header>
  )
}

export default Header;