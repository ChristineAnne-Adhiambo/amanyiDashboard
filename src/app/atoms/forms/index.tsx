import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon: React.ReactNode;
}
const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, icon, ...props }, ref) => {
        return (
            <div className="mt-5 flex gap-2 py-2 px-4 border rounded-full border-[#242199] placeholder:text-[#000] placeholder:opacity-100">
                {icon}
                <input
                    className="outline-none focus:border-none flex-1"
                    ref={ref}
                    {...props}
                />
            </div>
        );
    }
);
Input.displayName = "Input";export { Input };