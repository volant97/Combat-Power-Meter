import Link from "next/link";

export default function HomePage() {
  const testArray = new Array(10).fill(0).map((_, i) => 1 + i);

  return (
    <div>
      <div className="flex flex-col gap-6">
        <p className="text-pointc">전투력 측정기 </p>
        <p className="text-pointc font-Freesentation">전투력 측정기 </p>
        <div className="flex flex-wrap -mx-2">
          {testArray.map((v, i) => (
            <div key={i} className="w-1/2 h-full p-2">
              <Link href={`/user/${i}`}>
                <div className="flex flex-col gap-2 size-full p-3 bg-bgc2 rounded-md border-2 border-pointc hover:cursor-pointer">
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
