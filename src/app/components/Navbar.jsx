import Link from "next/link";
import NavLinks from "./NavLinks";
import ButtonToggle from './ButtonToggle'


const Navbar = () => {


    return (


       <div className=" container mx-auto  w-full">

         <div className=" navbar">
           
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><NavLinks href="/">Home</NavLinks></li>
                        <li><NavLinks href="/allBooks">All Books</NavLinks></li>
                        <li><NavLinks href="/profile ">Profile</NavLinks></li>
                    </ul>
                </div>
                <div className='text-2xl font-bold '>Ever<span className='text-3xl text-pink-900 font-light'>Books</span></div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLinks href="/">Home</NavLinks></li>
                    <li><NavLinks href="/allBooks">All Books</NavLinks></li>
                    <li><NavLinks href="/profile">Profile</NavLinks></li>
                </ul>
            </div>
            <div className="navbar-end">
                <ButtonToggle></ButtonToggle>
            </div>
        </div>
       </div>
    );
};

export default Navbar;