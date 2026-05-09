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
    return (
         <Card className="border mx-auto w-125 py-10 mt-5 mb-5">
            <ToastContainer position="top-right" autoClose={3000} />
              <h1 className="text-center text-2xl font-bold">Log In</h1>
          <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>

                <TextField
                  isRequired
                  name="email"
                  type="email"
                  validate={(value) => {
                    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                      return "Please enter a valid email address";
                    }
        
                    return null;
                  }}
                >
                  <Label>Email</Label>
                  <Input placeholder="john@example.com" />
                  <FieldError />
                </TextField>
        
                <TextField
                  isRequired
                  minLength={8}
                  name="password"
                  type="password"
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
                  <Input placeholder="Enter your password" />
                  <Description>
                    Must be at least 8 characters with 1 uppercase and 1 number
                  </Description>
                  <FieldError />
                </TextField>
        
                <div >
                  <Button type="submit">
                    <Check />
                   LogIn
                  </Button>
                  
                </div>

         <div>
        <p>Don't have an account?{" "}
     <Link href="/RegisterPage" className="text-red-500  cursor-pointer">
          Registration here</Link> </p>
          </div>
              </Form>
            </Card>
    );
};

export default LogInPage;