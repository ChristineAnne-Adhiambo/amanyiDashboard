"use client";
import * as React from "react";


import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { Input } from "../app/atoms/forms";


export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon: React.ReactNode;
}
const InputPassword = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, icon, ...props }, ref) => {
        const [inputType, setInputType] = React.useState(type);       
         return (
            <div className="relative">
                <Input icon={icon} {...props} type={inputType} ref={ref} />                
                <div onClick={() => setInputType(prev => prev === "password" ? "text" : "password")} className="absolute right-3 top-1/2 cursor-pointer -translate-y-1/2">                  
                  {
                        inputType === "password" ?
                            <p className="-mt-2 h-2 ml-3 "><AiFillEyeInvisible /></p>:
                             <p className="-mt-2 h-2 ml-3 "><AiFillEye /></p>                 
                                }
                </div>
            </div>
        );
    }
);
InputPassword.displayName = "Input";export { InputPassword };