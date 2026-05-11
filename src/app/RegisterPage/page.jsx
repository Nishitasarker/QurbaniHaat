"use client";
import { useRouter } from "next/navigation"; 
import { useState } from "react";
import Link from "next/link";
import { authClient } from "../../lib/auth-client";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";


export default function RegisterPage() {
 const handleGoogleLogin= async ()=>{
   const res=await authClient.signIn.social({
    provider:"google",
    callbackURL: "/"
   });
   console.log(res,"res");
 }
  const router = useRouter()
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const {data,error} = await authClient.signUp.email({
      name,
      image,
      email,
      password,
      autoSignIn: false,
    },{
      onSuccess: async () => { 
                await authClient.signOut();
        toast.success("Registration successful! Now please Log In.");

        setTimeout(() => {
            router.push('/LogIn'); 
        }, 2000);
      },
      onError: (ctx) => {
        
        toast.error(ctx.error.message || "Registration failed!");
      }
    });
  };
  return (
    <Card className="bg-gray-50 shadow-xl mx-auto w-125 py-10 mt-5 mb-5">
      <ToastContainer position="top-right" autoClose={3000} />
      <h1 className="text-center text-2xl font-bold">Registration</h1>

      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
        <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Enter your name" className="w-full"/>
          <FieldError />
        </TextField>

        <TextField isRequired name="image" type="text">
          <Label>Photo URL</Label>
          <Input placeholder="Photo URL" className="w-full min-w-full" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          name="email"
          type="email"
          autoComplete="off"
          className="w-full"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com"  autoComplete="off" className="w-full min-w-full"/>
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          autoComplete="new-password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" autoComplete="new-password"
          className="w-full min-w-full"/>
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div >
          <button className="btn btn-block text-white bg-green-500 " type="submit">
             Registration
          </button>
        </div>

         <div className="mx-auto">
                <p>Already have an account?{" "}
            <Link href="/LogIn" className="text-red-500  cursor-pointer">
              Log in here
            </Link>
          </p>
        </div>
        <div className="relative flex items-center py-5">
    <div className="flex-grow border-t border-gray-500"></div>
    <span className="flex-shrink mx-4 text-gray-500 font-medium text-sm">OR</span>
    <div className="flex-grow border-t border-gray-500"></div>
</div>
        <div>
         
          <button
          type="button" className="btn btn-block bg-white text-black
          border-2 border-green-400 " onClick={handleGoogleLogin}>
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g>
    <path d="m0 0H512V512H0" fill="#fff"></path>
    <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
        </div>
      </Form>
    </Card>
  );
}