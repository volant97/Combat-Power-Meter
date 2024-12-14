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
        <div className="flex gap-3">
          <button className="w-auto h-8 px-2 text-sm border-2 border-pointc rounded-md">
            최신 순
          </button>
          <button className="w-auto h-8 px-2 text-sm border-2 border-gray-600 rounded-md">
            전투력 순
          </button>
          <button className="w-auto h-8 px-2 text-sm border-2 border-gray-600 rounded-md">
            레벨 순
          </button>
          <button className="w-auto h-8 px-2 text-sm border-2 border-gray-600 rounded-md">
            성장률 순
          </button>
          <button className="w-auto h-8 px-2 text-sm border-2 border-gray-600 rounded-md">
            이름 순
          </button>
        </div>
        <div className="flex flex-wrap -mx-2">
          {testArray.map((v, i) => (
            <div key={i} className="w-1/2 h-full p-2">
              <Link href={`/user/${i}`}>
                <div className="flex flex-col gap-2 size-full p-3 bg-bgc2 rounded-md border-2 border-pointc hover:cursor-pointer shadow-md shadow-orange-500/40">
                  <div className="w-full aspect-square rounded-md !bg-white text-black">
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
                    <div className="flex gap-2 px-2 [&_*]:bg-bgc2 bg-bgc2">
                      <p className="">A</p>
                      <p className="">34,311,240</p>
                    </div>
                    <div className="flex gap-2 px-2 [&_*]:bg-bgc2 bg-bgc2">
                      <p className="">F</p>
                      <div className="flex">
                        <p>11.5</p>
                        <p>M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
