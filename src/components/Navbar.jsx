"use client";
import Image from "next/image";
import Link from "next/link";
import AllAnimals from "../app/AllAnimals/page"
import { usePathname } from "next/navigation";

const Navbar = ()=>{
  const pathname = usePathname();
  const isLoggedOut = pathname === "/LogOutPage";

  const activeClass = (path) => 
    pathname === path 
      ? "text-green-500 font-bold "
      : "text-black";

    return(
        <div className="navbar bg-base-100 shadow-sm px-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2  shadow">
        <li className="font-semibold text-xl">
          <Link rel="stylesheet" href="/" className={activeClass("/")}>Home</Link>
          </li>

        <li className="font-semibold text-xl">
          <Link rel="stylesheet" href="/AllAnimals" className={activeClass("/AllAnimals")}>All Animals</Link>  
        </li>

        <li className="font-semibold text-xl">
          <Link rel="stylesheet" href="/Profile" className={activeClass("/Profile")}>Profile</Link> 
        </li>
           </ul>
    </div>

    <div className="flex gap-1 items-center justify-center ">
     <Image
          src="/goatpro.png"  
          className="p-1 rounded-full "      
          alt="QurbaniHaat Logo"
          width={50}               
          height={50}             
          priority                 
        />
        <p className="font-semibold text-2xl ">Qurbani<span className="text-green-500">Haat</span></p>
          </div>
   
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       <li className="font-semibold text-lg">
         <Link rel="stylesheet" href="/" className={activeClass("/")}>Home</Link> 
       </li>


        <li className="font-semibold text-lg">
          <Link rel="stylesheet" href="/AllAnimals" className={activeClass("/AllAnimals")}>All Animals</Link>  
        </li>

        <li className="font-semibold text-xl">
          <Link rel="stylesheet" href="/Profile" className={activeClass("/Profile")}>Profile</Link> 
        </li>
       
    </ul>
  </div>

 <div className="navbar-end flex gap-2">
        {isLoggedOut ? (
          /* লগআউট পেইজে থাকলে এই বাটনগুলো দেখাবে */
          <>
            <Link href="/Login">
              <button className="btn btn-outline btn-success">Login</button>
            </Link>
            <Link href="/Register">
              <button className="btn bg-green-500 text-white border-none">Register</button>
            </Link>
          </>
        ) : (
          /* অন্য সব পেইজে প্রোফাইল পিকচার এবং লগআউট বাটন দেখাবে */
          <>
            <div className="avatar">
              <div className="w-12 rounded-full ring ring-green-500 ring-offset-base-100 ring-offset-2">
                <Image src="/female.png" alt="User" width={60} height={60} />
              </div>
            </div>
            <Link href="/LogOutPage">
              <button className="btn bg-red-500 text-white border-none">LogOut</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;