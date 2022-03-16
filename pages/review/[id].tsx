import { useRouter } from "next/router";
import { data } from "../../data/reviews";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { TransparentContext } from "../../components/layout";

export default function Review() {
  const transparency = useContext(TransparentContext)
  transparency.setValue(false)

  const router = useRouter();
  const { id } = router.query;
  const review = data[Number(id)];

  const imageClone = { ...review?.image };
  imageClone.src = "/" + imageClone.src;

  return (
    <div className="bg-[#3D3D3D] text-white text-xl py-12 px-8 md:px-40">
      <div
        style={{
          gridTemplateColumns: "57fr 43fr",
          gridTemplateRows: "1fr auto auto",
        }}
        className="md:grid grid-cols-2 min-w-full gap-8"
      >
        {review ? (
          <>
            <Image
              src={imageClone}
              alt="Obrázek recenzenta"
              placeholder="blur"
              className="row-start-1 row-end-1 max-w-5 rounded-md"
            />
            <div className="text-center row-start-2 col-start-1">
              {review.title}
            </div>
            <div className="row-span-2 col-start-2 italic pt-3 md:text-lg">
              “{review.textLong}”
            </div>
          </>
        ) : null}
      </div>
      <div className="font-bold md:pb-12 pt-3 pl-2 md:absolute md:bottom-0 text-xl">
        <Link href="/reviews">← Zpět.</Link>
      </div>
    </div>
  );
}
