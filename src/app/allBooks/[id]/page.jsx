import { Star, StarIcon } from "lucide-react";
import Image from "next/image";


const BookDetails = async({params}) => {
    const {id} = await params;
    const res = await fetch("http://localhost:3000/data.json");
    const books = await res.json();
 const book = books.find(b => b.id == id)
    console.log(book);
    return (
        <div className=" items-center justify-center lg:flex gap-12 my-9 lg:p-0 md:p-0 p-2.5 lg:p-0  container mx-auto">
            <div className="text-center">
                <Image src={book.image_url} width={300} height={300}
                alt="book cover" className="p-2.5 rounded-2xl shadow-2xl"/>
            </div>
           <div>
             <small className=" lg:visible md:visible badge badge-secondary  ">
                
                {book.category}
    
            </small>
             <h2 className="mt-7 text-2xl font-bold">{book.title}</h2>
            <p>{book.author}</p>
            <p className="text-pink-900 text-xl font-bold">${book.price}</p>
            <small className="text-gray-400">Available: {book.available_quantity}</small>
            <p>{book.
            description}</p>
            <div className="flex justify-between my-6">
                <p className="flex gap-1  p-1 rounded-2xl bg-amber-300 "><StarIcon className="w-5 "></StarIcon>{book.rating}</p>

                <p className="border-b-1">{book.pages} Pages</p>
            </div>
           
           </div>
        </div>
    );
};

export default BookDetails;