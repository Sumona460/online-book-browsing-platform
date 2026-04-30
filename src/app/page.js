import Image from "next/image";
import image from '@/assets/banner-2.png'
import Footer from "./components/footer";


export default function Home() {
  return (
    <div className="lg:grid lg:grid-cols-2 text-center lg:text-left container mx-auto min-h-screen bg-gray-50 rounded-xl gap-40">
      <div className=" space-y-3 justify-center items-center p-15 py-30">

        <h2 className="text-3xl font-bold text-pink-900 ">All Your Favorite <br /> <span className="text-7xl font-medium">Books</span> Are Here!</h2>
        <p>Dive into books that shape your world.
        </p>
        
        <p>“A book is a dream you hold in your hands.”
          Discover stories that stay with you forever.</p>
        <button className="btn bg-pink-900 text-white ">Get Started</button>

      </div>

      <div className="lg:mx-0 mx-16">
        <Image src={image} width="350" height="350" alt="book image " className=" lg:p-0" />
      </div>
    </div>



  );
};
