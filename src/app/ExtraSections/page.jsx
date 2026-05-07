"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { MdOutlineBalance } from "react-icons/md";
import { GiTooth } from "react-icons/gi";
import { MdBlock } from "react-icons/md";
import { HiOutlineHeart } from "react-icons/hi";


const ExtraSection = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedIds = [1, 2, 5];
        const filteredBreeds = data.filter(animal => selectedIds.includes(animal.id));
        setBreeds(filteredBreeds);
      });
  }, []);
    
    return (
        <div className='bg-lime-100 pb-6 grid grid-cols-1 md:grid-cols-2 gap-2 px-2 md:px-10 py-2'>
   
   {/* left side */}
    <div>
     <h2 className="text-3xl font-bold text-center mb-10 text-success">Top Recommended Breeds</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {breeds.map((animal) => (
            <div key={animal.id} className="card bg-white shadow-xl overflow-hidden border-b-4 border-lime-500">
              <figure className="relative w-full aspect-square">
                <Image
                  src={animal.image}
                  fill 
                  alt={animal.name} 
                  className="w-full h-full object-cover" 
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-xl">{animal.breed}</h3>
                <p className="text-sm font-semibold text-lime-700">
                  {animal.id === 1 && "The King of Beef"}
                  {animal.id === 5 && "The Giant Breed"}
                  {animal.id === 2 && "Domestic Pride"}
                </p>
                <p className="text-gray-600 text-sm mt-2">{animal.description.slice(0, 80)}...</p>
                <div className="card-actions justify-start ">
                  <div className="badge badge-outline p-2">Weight: {animal.weight}kg</div>
                  <div className="badge badge-outline p-2">Age: {animal.age}yrs</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>


{/* right-side */}
      <div>
<h2 className="text-3xl font-bold text-center mb-10 text-success">Essential  Qurbani Tips</h2>
<div className='grid grid-cols-1 md:grid-cols-2 gap-3  py-5 '>

 <div className="card card-side bg-base-100 shadow-sm">
<div className='flex items-center justify-center'><MdOutlineBalance className='h-15 w-15 bg-lime-200 rounded-full p-2
 ' /></div>
  <div className="card-body">
    <h2 className="card-title font-bold">Check Animal Health</h2>
    <p>Look for active movement,bright eye, and clear nasal passages.</p>
   
  </div>
</div>

 <div className="card card-side bg-base-100 shadow-sm">
<div className='flex items-center justify-center'>
    <GiTooth className='h-15 w-15 bg-lime-200 rounded-full p-2 '/>
    </div> 
  <div className="card-body">
    <h2 className="card-title font-bold">Verify Minimum Age</h2>
    <p>Ensure the animal meets the required age and check for permanent teeth</p>
  
  </div>
</div>


 <div className="card card-side bg-base-100 shadow-sm">
 <div className='flex items-center justify-center'>
<MdBlock  className='h-15 w-15 bg-lime-200 rounded-full p-2' />
</div>
  <div className="card-body">
    <h2 className="card-title font-bold">Avoid Wounded Animals</h2>
    <p>Check for any injuries,broken homs, or open wounds before purchase.</p>
    
  </div>
</div>


 <div className="card card-side bg-base-100 shadow-sm">
  <div className='flex items-center justify-center'>
   <HiOutlineHeart  className='h-15 w-15 bg-lime-200 rounded-full p-2' />
  </div>
  <div className="card-body">
    <h2 className="card-title font-bold">Proper Care Post-Buy</h2>
    <p>Provide adequate rest and water to reduce transport stress before Qurbani.</p>
   
  </div>
</div>
        </div>

        </div>  
        </div>
    );
};

export default ExtraSection;