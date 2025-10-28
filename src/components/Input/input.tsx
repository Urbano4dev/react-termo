import React, { forwardRef, InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(({ ...props }, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      type="text"
      className="w-20 h-20 uppercase text-4xl font-bold bg-box rounded-xl flex items-center justify-center text-center outline-0 caret-transparent"
      maxLength={1}
    />
  );
});

export default Input;
