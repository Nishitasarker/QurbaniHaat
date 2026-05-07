import React from 'react';
import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import Link from 'next/link';

const DetailsPage = async ({ params }) => {
    const { id } = await params;

    
    const filePath = path.join(process.cwd(), 'public', 'data.json');
    const fileData = fs.readFileSync(filePath, 'utf-8');
    const animals = JSON.parse(fileData);

   
    const animal = animals.find(p => p.id == id);

   
    if (!animal) {
        return <div className="text-center py-20 text-2xl font-bold">Animal Not Found!</div>;
    }  return (
        <div className='grid grid-cols-1 sm:grid-cols-2 bg-lime-100'>

            <div className=" mx-auto p-6 px-10 bg-lime-100 w-full">
                        <h1 className="text-4xl font-bold text-center mb-4">Animal Details</h1>
                     <div className="px-10">
              
                      <div key={animal.id} className="card bg-base-100 shadow-xl border-gray-400 w-full">
                        <figure className='relative w-full aspect-square'>
                          <Image
                            src={animal.image}
                            fill 
                            alt={animal.name} 
                            className="h-48 w-full object-cover" 
                          />
                        </figure>
                         <h1 className="card-title font-bold text-3xl">{animal.name}</h1>
                {/* card-details */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 ' >
                            <div >
                         <p  ><span className=" font-bold text-lg">Price:</span> {animal.price} BDT</p>
                          <p ><span className=" font-bold text-lg">Weight:</span> {animal.weight}Kg</p>
                          <p ><span className="font-bold text-lg">Age:</span> {animal.age}Years</p>
                          </div>
                        <div  >
                            <p ><span className="font-bold text-lg">Breed: </span> {animal.breed}  </p>
                          <p ><span className="font-bold text-lg">Location:</span> {animal.location}</p>
                          <p ><span className="font-bold text-lg  ">Category:</span> {animal.category}</p>

                              
                           </div>
                        </div>
               
                {/* card-description */}
                        <div className='mb-4'>
                    <h1 className='font-bold text-xl'>Description</h1>
                        <p>{animal.description}</p>

                        </div>
                   </div>
                   
                  </div>
                </div>

                <div>

                </div>
            
        </div>
    );
};

export default DetailsPage;