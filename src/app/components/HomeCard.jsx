"use client";
import Image from "next/image";
import { useState } from "react";


const HomeCard = () => {
  const [openModal, setOpenModal] = useState(false);

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
              <button
                onClick={() => setOpenModal(true)}
                className="btn bg-pink-900 text-white"
              >
                Read
              </button>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="card card-side bg-base-100 shadow-lg w-full">
          <figure>
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
              <button
                onClick={() => setOpenModal(true)}
                className="btn bg-pink-900 text-white"
              >
                Read
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* 🔥 Modal */}
      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-lg w-80 text-center">
            <h2 className="text-lg font-semibold mb-3">
              Please Login
            </h2>

            <p className="text-gray-500 mb-4">
              You need to login first to access this book.
            </p>

            <div className="">
              <a href="/login" className="btn btn-primary my-2 w-full">
                Go Login
              </a>
              <button
                onClick={() => setOpenModal(false)}
                className="btn w-full"
              >
                Close
              </button>

              
            </div>
          </div>
        </div>
      )}

     
    </div>
  );
};

export default HomeCard;