import SortBtnContainer from "@/components/home/SortBtnContainer";
import Link from "next/link";

export default function HomePage() {
  const testArray = new Array(10).fill(0).map((_, i) => 1 + i);

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="flex items-end gap-2">
          <h1 className="text-pointc text-2xl font-bold">[LOVe]</h1>
          <h2 className="text-pointc text-xl font-bold">LOVE IS WAR</h2>
        </div>
        <SortBtnContainer />
        <ul className="flex flex-wrap -mx-2">
          {testArray.map((v, i) => (
            <li key={i} className="w-1/2 h-full p-2">
              <Link href={`/user/${i}`}>
                <div className="flex flex-col gap-2 size-full p-3 bg-bgc2 rounded-md border-2 border-pointc hover:cursor-pointer shadow-md shadow-orange-500/40">
                  <div className="flex justify-center items-center w-full aspect-square rounded-md !bg-white text-black">
                    사진
                  </div>
                  <div className="flex items-center gap-2 h-7 px-2 [&_*]:bg-pointc bg-pointc rounded-md [&_*]:text-bgc1">
                    <div className="flex">
                      <p>LV</p>
                      <p>27</p>
                    </div>
                    <div className="flex w-full">볼란트</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex justify-between gap-2 px-2 [&_*]:bg-bgc2 bg-bgc2">
                      <p className="">T</p>
                      <p className="">34,311,240</p>
                    </div>
                    <div className="flex justify-between gap-2 px-2 [&_*]:bg-bgc2 bg-bgc2">
                      <p className="">G1</p>
                      <div className="flex gap-1">
                        <p>11.5</p>
                        <p>M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
