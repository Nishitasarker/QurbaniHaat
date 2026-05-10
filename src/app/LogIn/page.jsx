"use client";
import React from 'react';
import Link from "next/link";
import { Check } from "@gravity-ui/icons";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { authClient } from '@/lib/auth-client';


const LogInPage = () => {
    const router = useRouter();

     const onSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const {data,error}=await authClient.signIn.email({
        email,
        password,
        callbackURL: '/'
   }, {
    onSuccess: () => {
      toast.success("Login successful! ");
      router.push('/');
    },
    onError: (ctx) => {
      
      if (ctx.error.status === 401 || ctx.error.code === "USER_NOT_FOUND") {
        toast.error("Login failed. No account found with this email. Please register first.");
      } else {
      
        toast.error(ctx.error.message || "An error occurred during login. Please try again.");
      }
    }
  });
};
const handleGoogleLogin = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/", 
        }, {
            onSuccess: () => {
                toast.success("Logged in with Google!");
            },
            onError: (ctx) => {
                toast.error(ctx.error.message || "Google login failed!");
            }
        });
    };
    return (
         <Card className="bg-gray-50 shadow-xl mx-auto w-125 pb-10 mt-5 mb-5">
            <ToastContainer position="top-right" autoClose={3000} />
              <h1 className="text-center text-2xl font-bold">Log In</h1>
          <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>

                <TextField
                  isRequired
                  name="email"
                  type="email"
                  autoComplete="off"
                  validate={(value) => {
                    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                      return "Please enter a valid email address";
                    }
        
                    return null;
                  }}
                >
                  <Label>Email</Label>
                  <Input placeholder="john@example.com" autoComplete="off"  className="w-full min-w-full"/>
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
             Log In
          </button>
        </div>


         <div className="mx-auto">
        <p>Don't have an account?{" "}
     <Link href="/RegisterPage" className="text-red-500  cursor-pointer">
          Registration here</Link> </p>
          </div>

           <div className="relative flex items-center py-5">
    <div className="flex-grow border-t border-gray-500"></div>
    <span className="flex-shrink mx-4 text-gray-500 font-medium text-sm">OR</span>
    <div className="flex-grow border-t border-gray-500"></div>
</div>
        
         
          <button
          type="button" className="btn btn-block bg-white text-black
          border-2 border-green-400 " onClick={handleGoogleLogin}>
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g>
    <path d="m0 0H512V512H0" fill="#fff"></path>
    <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
       
              </Form>
            </Card>
    );
};

export default LogInPage;