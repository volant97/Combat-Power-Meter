interface Props {
  text: string;
  index: number;
  selectedBtn: number;
}

export default function SortBtn({ text, index, selectedBtn }: Props) {
  return (
    <button
      className={`w-auto h-8 px-1 text-xs border-2 rounded-md ${
        selectedBtn === index ? "border-pointc" : "border-gray-500"
      }`}
    >
      {text}
    </button>
  );
}
