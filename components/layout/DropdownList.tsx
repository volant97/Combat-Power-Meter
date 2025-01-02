import Link from "next/link";

interface Props {
  text: string;
  link: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DropdownList({ text, link, setIsOpen }: Props) {
  const linkOnClickHandler = () => {
    setIsOpen(false);
  };

  return (
    <Link
      href={`/${link}`}
      className="p-2 text-bgc1 text-center rounded-md bg-maintextc hover:bg-pointc transition-all"
      onClick={linkOnClickHandler}
    >
      {text}
    </Link>
  );
}
