import Link from "next/link";

interface Props {
  text: string;
  linkText: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DropdownList({ text, linkText, setIsOpen }: Props) {
  const linkOnClickHandler = () => {
    setIsOpen(false);
  };

  return (
    <Link
      href={`/${linkText}`}
      className="p-2 text-bgc1 text-center rounded-md bg-maintextc hover:bg-pointc transition-all"
      onClick={linkOnClickHandler}
    >
      {text}
    </Link>
  );
}