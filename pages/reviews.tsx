import Image from "next/image";
import Link from "next/link"
import { useContext } from "react";
import { TransparentContext } from "../components/layout";

import { Review, data } from "../data/reviews";

interface ReviewProps {
  review: Review;
  index: number;
}

function Review({ review, index }: ReviewProps) {
  const url = `/review/${index}`;

  const Img = (
    <Image
      alt="Fotka recenzenta"
      src={review.image}
      width={2048}
      height={1365}
      placeholder="blur"
      className={`rounded-md transition-all ${review.textLong ? "hover:scale-110 cursor-pointer" : ""}`}
    />
  );

  return (
    <div className="text-white">
      {review.textLong ? <Link href={url}>{Img}</Link> : Img}
      <div className="py-2 text-xl">{review.title}</div>
      <div className="italic">“{review.text}”</div>
      {review.textLong ? (
        <span className="font-bold pl-4 pt-2 block text-sm md:text-lg">
          <Link href={url}>
          Přečíst více. →
          </Link>
        </span>
      ) : null}
    </div>
  );
}

export default function Reviews() {
  const transparency = useContext(TransparentContext)
  transparency.setValue(false)

  return (
    <div className="bg-[#3D3D3D] min-h-screen py-6">
      <div className="text-center text-white text-3xl font-medium">Recenze</div>
      <div className="flex flex-col md:grid md:grid-cols-2 py-10 px-14 md:px-40 gap-8">
        {data.map((x, i) => (
          <Review review={x} key={i} index={i} />
        ))}
      </div>
    </div>
  );
}
