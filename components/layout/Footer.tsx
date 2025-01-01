import Link from "next/link";
import HomeIcon from "../icons/HomeIcon";
import Test from "../Test";

export default function Footer() {
  return (
    <footer className="sticky bottom-0 flex justify-center items-center h-[9dvh] p-2 shadow-footerShadow">
      <Link
        href={"/"}
        className="flex justify-center items-center h-[8dvh] aspect-square"
      >
        <HomeIcon />
      </Link>
      <Test />
    </footer>
  );
}
