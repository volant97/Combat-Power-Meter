import Link from "next/link";

function notFound() {
  return (
    <div className="flex flex-col justify-center items-center gap-3 h-full ">
      <p className="text-red-500 font-semibold text-xl">
        측정 구역을 벗어났습니다 o_o;;
      </p>
      <Link href={"/"} className="">
        돌아가기
      </Link>
    </div>
  );
}

export default notFound;
