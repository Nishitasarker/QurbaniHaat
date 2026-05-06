"use client";
import Image from "next/image";
import Link from "next/link";

const Navbar = ()=>{
    return(
        <div className="navbar bg-base-100 shadow-sm px-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2  shadow">
        <li className="font-semibold text-xl"><a>Home</a></li>
        <li className="font-semibold text-xl">
          <a>All Animals</a>
          
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
       <li className="font-semibold text-lg"><a>Home</a></li>
        <li className="font-semibold text-lg">
          <a>All Animals</a>
          
        </li>
       
    </ul>
  </div>

  <div className=" navbar-end flex gap-1">
    <div className="avatar">
  <div className="w-24 rounded-full">
     <Image
          src="/female.png"  
          className="p-1 rounded-full "      
          alt="QurbaniHaat Logo"
          width={60}               
          height={60}             
          priority                 
        />
    </div>
</div>
  <div >
    <a className="btn bg-red-500 text-white ">LogOut</a>
  </div>
</div>
</div>
    )
}

export default Navbar;