"use client";

import { useState } from "react";
import NavLinks from "./NavLinks";
import ButtonToggle from './ButtonToggle'
import { UserRound } from "lucide-react";
import AllBooksPage from "../allBooks/page";
import { authClient } from "@/lib/auth-client";
import SignUpForm from "./SigninForm";


const Navbar = () => {
  // const { data: session } = authClient.useSession();
  // console.log(user, 'user');

  // const user = session?.user;

  const [openModal, setOpenModal] = useState(false);



  return (


    <div className="w-full sticky top-0 z-50 bg-white shadow-sm">

      <div className="container mx-auto navbar bg-transparent">

        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><NavLinks href="/">Home</NavLinks></li>
              <li onClick={(e) => {
                e.preventDefault();
                setOpenModal(true);
              }}
                className="cursor-pointer" ><NavLinks href="/allBooks">All Books</NavLinks></li>
              <li><NavLinks href="/profile ">Profile</NavLinks></li>
            </ul>
          </div>
          <div className='text-2xl font-bold '>Ever<span className='text-3xl text-pink-900 font-light'>Books</span></div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><NavLinks href="/">Home</NavLinks></li>
            <li onClick={() => setOpenModal(true)}><NavLinks href="/allBooks">All Books</NavLinks></li>
            <li><NavLinks href="/profile">Profile <UserRound></UserRound> </NavLinks></li>

          </ul>
        </div>
        <div className="navbar-end">

          <ButtonToggle></ButtonToggle>
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



            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Navbar;