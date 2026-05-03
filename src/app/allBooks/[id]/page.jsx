
"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const BookDetails = () => {
  const { id } = useParams(); 

  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(data => {
        const found = data.find(b => b.id == id);
        setBook(found);
      });
  }, [id]);

  if (!book) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <span className="loading loading-spinner"></span>
      </div>
    );
  }

  return (
    <div className="items-center justify-center lg:flex gap-12 my-9 p-2.5 container mx-auto">
      
      <div className="text-center">
        <Image
          src={book.image_url}
          width={300}
          height={300}
          alt="book cover"
          className="p-2.5 rounded-2xl shadow-2xl"
        />
      </div>

      <div>
        <small className="badge badge-secondary">
          {book.category}
        </small>

        <h2 className="mt-7 text-2xl font-bold">{book.title}</h2>
        <p>{book.author}</p>

        <p className="text-pink-900 text-xl font-bold">
          ${book.price}
        </p>

        <small className="text-gray-400">
          Available: {book.available_quantity}
        </small>

        <p>{book.description}</p>

        <div className="flex justify-between my-6">
          <p className="flex gap-1 p-1 rounded-2xl bg-amber-300">
            <Star className="w-5" />
            {book.rating}
          </p>

          <p className="border-b-1">
            {book.pages} Pages
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;