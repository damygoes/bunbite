"use client";

import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  className?: string;
  handleClick?: () => void;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, label, handleClick, ...props }, ref) => {
    return (
      <button
        className={`btn ${className}`}
        ref={ref}
        {...props}
        onClick={handleClick}
      >
        {label}
      </button>
    );
  },
);
Button.displayName = "Button";

export { Button };
