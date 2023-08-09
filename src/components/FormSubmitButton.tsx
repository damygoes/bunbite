"use client";

import React, { ComponentProps } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

interface FormSubmitButton extends ComponentProps<"button"> {
  children: React.ReactNode;
  className?: string;
}

const FormSubmitButton = ({
  children,
  className,
  ...props
}: FormSubmitButton) => {
  const { pending } = useFormStatus();

  return (
    <button
      {...props}
      type="submit"
      className={`btn btn-primary ${className}`}
      disabled={pending}
    >
      {pending && <span className="loading loading-bars loading-md" />}
      {children}
    </button>
  );
};

export default FormSubmitButton;
