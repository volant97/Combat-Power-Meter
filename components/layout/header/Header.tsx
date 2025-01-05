import Logo from "@/components/icons/Logo";
import ListAndDropdown from "./dropdown/ListAndDropdown";
import Link from "next/link";
import LoginOrMyCard from "./LoginOrMyCard";

export default function Header() {
  return (
    <header className="sticky top-0 flex justify-center items-center w-full h-[9dvh] px-5 bg-bgc1 shadow-headerShadow">
      <ListAndDropdown />
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
