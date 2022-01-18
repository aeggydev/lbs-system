import Image from "next/image";

import { Review, data } from "../data/reviews";

interface ReviewProps {
  review: Review
  index: number
}

function Review({ review, index }: ReviewProps) {
  return (
    <div className="text-white font-serif">
      <Image
        alt="Fotka recenzenta"
        src={review.image}
        width={2048}
        height={1365}
        className="rounded-md"
      />
      <div className="py-2">{review.title}</div>
      <div className="italic">“{review.text}”</div>
      <a href={`/review/${index}`}>CLICK me</a>
    </div>
  );
}

export default function Reviews() {
  return (
    <div className="bg-[#3D3D3D] min-h-[100vh]">
      <div className="text-center text-white text-3xl">Recenze</div>
      <div className="grid grid-cols-2 p-16 gap-8">
        {data.map((x, i) => (
          <Review review={x} key={i} index={i} />
        ))}
      </div>
    </div>
  );
}
