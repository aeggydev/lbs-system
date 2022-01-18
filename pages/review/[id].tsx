import { useRouter } from "next/router";
import { data } from "../../data/reviews";
import Image from "next/image";

export default function Review() {
  const router = useRouter();
  const { id } = router.query;
  const review = data[Number(id)];

  return (
    <div
      className="bg-[#3D3D3D] text-white text-xl py-12 px-40 font-serif box-border"
    >
        <div style={{ gridTemplateColumns: "45fr 55fr", gridTemplateRows: "1fr auto auto" }} className="grid grid-cols-2 min-w-full">
      {review ? (
        <>
          <Image
            src={review.image}
            alt="Obrázek recenzenta"
            className="row-start-1 row-end-1 max-w-5"
          />
          <div className="text-center row-start-2 col-start-1">
            {review.title}
          </div>
          <div className="row-span-2 col-start-2 italic">“{review.textLong}”</div>
        </>
      ) : null}
      </div>
      <a href="/reviews" className="bold pb-12 fixed bottom-0">← Zpět.</a>
    </div>
  );
}
