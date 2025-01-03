import Link from "next/link";
import Logo from "../icons/Logo";
import LoginOrMyProfile from "./LoginOrMyCard";
import ListAndDropdown from "./ListAndDropdown";

export default function Header() {
  return (
    <header className="sticky top-0 flex justify-center items-center w-full h-[9dvh] px-5 shadow-headerShadow">
      <ListAndDropdown />
      <Link
        href={"/"}
        className="flex justify-center items-center w-32 h-[8dvh]"
      >
        <Logo />
      </Link>
      <LoginOrMyProfile />
    </header>
  );
}
