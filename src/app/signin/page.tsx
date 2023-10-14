'use client'
import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "../atoms/forms";
import { BiSolidLockAlt } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import useLogin from "../hooks/useLogin"; 
import 'react-toastify/dist/ReactToastify.css';
import { InputPassword } from "../../icons";


const formSchema = z.object({
  email: z.string({ required_error: "Email is required" }).email('Invalid email address'),
  password: z.string({ required_error: "Password is required" }).min(8, { message: 'Password must be at least 8 characters' }),
});

type FormSchemaType = z.infer<typeof formSchema>;


const SigninForm = () => {
  const { register, formState: { errors } } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const { handleLogin, loading, error } = useLogin();

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const loginData: FormSchemaType = {
      email: form.email.value,
      password: form.password.value,
    };

     await handleLogin(loginData);


  };
  return (
    <div className="flex w-full min-h-screen flex-col md:flex-row">
      <div className="bg-primary flex-1 flex justify-center items-center">
        <img src="/images/Amanyi-Logo.png" alt="logo" className="md:w-[400px] object-cover" />
      </div>
      <div className="flex-1 justify-center items-center flex">
        <form onSubmit={handleFormSubmit} className="w-full px-2 max-w-[500px]">
          <div>
            <h2 className="text-primary text-[20px] font-[800]">
              Sign In
            </h2>
          </div>

          {error && <p className="text-red-400">{error}</p>}

          <Input
            icon={<AiOutlineMail />}
            placeholder="Email"
            type="email"
            {...register("email")}
          />
          {errors?.email && <p className="text-red-400">{errors?.email?.message}</p>}

          <InputPassword
            icon={<BiSolidLockAlt />}
            placeholder="Password"
            type="password"
            {...register("password")}
          />
          {errors?.password && <p className="text-red-400">{errors?.password?.message}</p>}

          <button className="mt-8 bg-[#38D0F5] text-primary text-[15px] font-[700] h-[40px] px-6 w-full rounded-full" disabled={loading}>
            {loading ? "Loading..." : " Sign In"}
          </button>

          <p className="mt-4 text-sm flex gap-2">
            Don't have an account? <Link href="/signup" className="text-primary font-[800]">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SigninForm;
