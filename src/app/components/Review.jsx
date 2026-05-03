import { CircleUserRound } from "lucide-react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function ReviewSection() {
  return (
    <Marquee>
        <div className="grid md:grid-cols-4 grid-cols-4 gap-6 p-6 bg-yellow-200 my-16 ">

      {/* Card 1 */}
      <div className="bg-white shadow-md rounded-xl p-5 ">
        <div className="flex items-center gap-4 ">
           <CircleUserRound />
          <div>
            <h2 className="font-semibold">Ayesha Rahman</h2>
            <p className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐</p>
          </div>
        </div>
        <p className="mt-4 text-gray-600 text-sm">
          Amazing book collection! UI is very smooth and easy to use.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white shadow-md rounded-xl p-5 ">
        <div className="flex items-center gap-4">
           <CircleUserRound />
          <div>
            <h2 className="font-semibold">Tanvir Hasan</h2>
            <p className="text-yellow-500 text-sm">⭐⭐⭐⭐</p>
          </div>
        </div>
        <p className="mt-4 text-gray-600 text-sm">
          Loved the platform. Found all my favorite books here.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white shadow-md rounded-xl p-5 ">
        <div className="flex items-center gap-4">
          <CircleUserRound />
          <div>
            <h2 className="font-semibold">Nusrat Jahan</h2>
            <p className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐</p>
          </div>
        </div>
        <p className="mt-4 text-gray-600 text-sm">
          Very clean design and fast browsing experience.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-white shadow-md rounded-xl p-5 ">
        <div className="flex items-center gap-4">
         <CircleUserRound />
          <div>
            <h2 className="font-semibold">Rakib Ahmed</h2>
            <p className="text-yellow-500 text-sm">⭐⭐⭐⭐</p>
          </div>
        </div>
        <p className="mt-4 text-gray-600 text-sm">
          Good website but more categories would be better.
        </p>
      </div>

      

    </div>
    </Marquee>
  );
}