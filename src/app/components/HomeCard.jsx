import Image from "next/image";

const HomeCard = () => {
  return (
    <div className="w-full">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto my-10 px-4">

        {/* CARD 1 */}
        <div className="card card-side bg-base-100 shadow-lg w-full">

          <figure>
            <Image
              src="https://i.ibb.co/XZDrhYYQ/download-1.jpg"
              width={200}
              height={200}
              alt="book"
              className="object-cover w-full h-full"
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title">New Book is released!</h2>
            <p className="text-gray-400">
              Click the button to Read on EverBooks.
            </p>

            <div className="card-actions justify-end">
              <button className="btn bg-pink-900 text-white">
                Read
              </button>
            </div>
          </div>

        </div>

        {/* CARD .....2*/}
        <div className="card card-side bg-base-100 shadow-lg w-full">

          <figure className="">
            <Image
              src="https://i.ibb.co/mVm4pfTj/shopping-1.webp"
              width={200}
              height={200}
              alt="book"
              className="object-cover"
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title">New Book is released!</h2>
            <p className="text-gray-400">
              Click the button to Read on EverBooks.
            </p>

            <div className="card-actions justify-end">
              <button className="btn bg-pink-900 text-white">
                Read
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default HomeCard;