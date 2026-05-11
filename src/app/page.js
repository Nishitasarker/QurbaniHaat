"use client"

import Link from "next/link"
import FeatureData from "../app/FeatureData/page.jsx"
import ExtraSection from "../app/ExtraSections/page.jsx"
import { usePathname} from "next/navigation";


export default function Home() {
  const pathname = usePathname();
   const activeClass = (path) => 
    pathname === path 
      ? "text-green-500 font-bold "
      : "text-black";
  return (
    <div >
      <div
  className="hero h-[400px]"
  style={{
    backgroundImage:
      "url(/background-image.png)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 font-semibold">FIND YOUR PERFECT QURBANI ANIMAL </h1>
      <p className="mb-5 font-bold text-3xl text-white">
        Healthy.Sourced Locally. <br/>
        Delivered to Your Doorstep.</p>
        <Link  href="/AllAnimals" className={activeClass("/AllAnimals")}>
        <button className="btn">Browse All Animals</button></Link>  
       
      
    </div>
  </div>
</div>

<FeatureData/>
<ExtraSection/>
    </div>
  );
}
