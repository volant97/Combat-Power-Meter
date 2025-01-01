import Link from "next/link";
import Logo from "../icons/Logo";
import ListIcon from "../icons/ListIcon";
import LoginOrMyCard from "./LoginOrMyCard";

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
      <LoginOrMyCard />
    </header>
  );
}
