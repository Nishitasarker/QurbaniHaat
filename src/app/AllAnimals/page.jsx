"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';


const FeatureData = () => {
    const [animals, setAnimals] = useState([]);

  useEffect(() => {
    
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
             setAnimals(data);
      });
  }, []);


    return (
        <div className=" mx-auto p-6 px-10 bg-lime-100">
            <h2 className="text-3xl font-bold text-center mb-8">All Animals</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {animals.map((animal) => (
          <div key={animal.id} className="card bg-base-100 shadow-xl border-gray-400 w-full">
            <figure className='relative w-full aspect-square'>
              <Image
                src={animal.image}
                fill 
                alt={animal.name} 
                className="h-48 w-full object-cover" 
              />
            </figure>
            <div className="card-body font-bold">
              <h1 className="card-title font-bold">{animal.name}</h1>
              <p className='text-gray-700'>Type: {animal.type}</p>
              <p className='text-gray-700'>Weight: {animal.weight}</p>
              <p className='text-gray-700'>Age: {animal.age}</p>
              <p className='text-gray-700'>Price: ${animal.price}</p>
              <div className="card-actions ">
              <Link href={`/AllAnimals/${animal.id}`}>
                <button className="btn btn-block text-white bg-green-400 rounded-full w-full">View Details</button>

              </Link>        
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureData;