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
                <div onClick={() => setInputType(prev => prev === "password" ? "text" : "password")} className=" top-1/2 cursor-pointer -translate-y-1/2">

                    <div className="flex items-center">
                        <input type="text" className="mr-40" />
                        <div className="relative" style={{ top: "-30px" }}>
                            {inputType === "password" ? (
                                <p><AiFillEyeInvisible /></p>
                            ) : (
                                <p><AiFillEye /></p>
                            )}
                        </div>
                    </div>






                </div>
            </div>
        );
    }
);
InputPassword.displayName = "Input"; export { InputPassword };