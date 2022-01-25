import { useRouter } from "next/router";
import { data } from "../../data/reviews";
import Image from "next/image";
import Link from "next/link";

export default function Review() {
  const router = useRouter();
  const { id } = router.query;
  const review = data[Number(id)];

  return (
    <div
      className="bg-[#3D3D3D] text-white text-xl py-12 px-40 font-serif"
    >
        <div style={{ gridTemplateColumns: "57fr 43fr", gridTemplateRows: "1fr auto auto" }} className="grid grid-cols-2 min-w-full gap-8">
      {review ? (
        <>
          <Image
            src={review.image}
            alt="Obrázek recenzenta"
            className="row-start-1 row-end-1 max-w-5 rounded-md"
          />
          <div className="text-center row-start-2 col-start-1">
            {review.title}
          </div>
          <div className="row-span-2 col-start-2 italic">“{review.textLong}”</div>
        </>
      ) : null}
      </div>
      <span className="font-bold pb-12 absolute bottom-0 text-xl"><Link href="/reviews">← Zpět.</Link></span>
    </div>
  );
}
