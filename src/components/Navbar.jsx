"use client";
import Image from "next/image";
import Link from "next/link";
import AllAnimals from "../app/AllAnimals/page"
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { userAc } from "better-auth/plugins/admin/access";

const Navbar = ()=>{
  const {data: session} =authClient.useSession();

  const pathname = usePathname();
  const isLoggedOut = pathname === "/LogOut";
  const user = session?.user;
  const showAuthButtons = !session;

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
          <Link rel="stylesheet" href="/Profile" className={activeClass("/ProfilePage")}>Profile</Link> 
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
          <Link rel="stylesheet" href="/ProfilePage" className={activeClass("/ProfilePage")}>Profile</Link> 
        </li>
       
    </ul>
  </div>

 <div className="navbar-end flex gap-2">
        {isLoggedOut ? (
         
          <>
            <Link href="/LogIn">
              <button className="btn btn-outline btn-success">Login</button>
            </Link>
            <Link href="/RegisterPage">
              <button className="btn bg-green-500 text-white border-none">Register</button>
            </Link>
          </>
        ) : (
          <div className="flex items-center gap-3">
             <h2 className="hidden md:block font-medium">{user?.name}</h2>
            <div className="avatar">
              <div className="w-10 rounded-full ring ring-green-500 ring-offset-base-100 ring-offset-2">
                <Image src={user?.image || "/female.png"} alt="User" width={40} height={40} />
              </div>
            </div>
            
            <button
              className="btn btn-sm lg:btn-md bg-red-500 hover:bg-red-600 text-white border-none"
              onClick={() => {
                localStorage.removeItem("user");
                window.location.href = "/LogOut";
              }}
            >
              LogOut
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;