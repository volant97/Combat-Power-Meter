import Link from "next/link";
import Logo from "../icons/Logo";
import ListIcon from "../icons/ListIcon";
import UserIcon from "../icons/UserIcon";

export default function Header() {
  return (
    <header className="sticky top-0 flex justify-center items-center w-full h-[9dvh] px-5 shadow-headerShadow">
      <Link
        href={"/"}
        className="absolute left-0 flex items-center h-[8dvh] aspect-square pl-5"
      >
        <ListIcon />
      </Link>
      <Link
        href={"/"}
        className="flex justify-center items-center w-32 h-[8dvh]"
      >
        <Logo />
      </Link>
      <Link
        href={"/my/1"}
        className="absolute right-0 flex justify-end items-center h-[8dvh] aspect-square pr-5"
      >
        <UserIcon />
      </Link>
    </header>
  );
}
