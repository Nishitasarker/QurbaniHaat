"use client";
import { authClient } from "@/lib/auth-client";
import { Card,  Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

import 'animate.css';

export default function ProfilePage() {
  const { data: session } = authClient.useSession();

  if (!session) return <p>Loading...</p>;

  return (
    <Card className="p-6 max-w-md mx-auto my-10 shadow-lg bg-gray-50 animate__animated animate__fadeInDown">
      <h2 className="text-2xl font-bold text-center mb-4">My Profile</h2>
      <div className="flex flex-col items-center gap-4">
   <div className="relative w-24 h-24 rounded-full overflow-hidden ring-2 ring-green-500 ring-offset-2">
          <Image 
            src={session.user.image || "/female.png"} 
            alt="User Profile"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="text-center">
          <p className="text-xl font-semibold">{session.user.name}</p>
          <p className="text-gray-500">{session.user.email}</p>
        </div>
        
        
        <Link href="/ProfilePage/UpdatePage">
          <button className="btn btn-success">Update Information</button>
        </Link>
      </div>
    </Card>
  );
}