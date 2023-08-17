"use client";

import { useState, useTransition } from "react";

interface AddToCartButtonProps {
  productId: string;
  // eslint-disable-next-line no-unused-vars
  incrementProductQuantity: (productId: string) => Promise<void>;
}

const AddToCartButton = ({
  productId,
  incrementProductQuantity,
}: AddToCartButtonProps) => {
  const [isPending, startTransition] = useTransition(); // this is important because we are calling a server component (AddToCartButton) from a client component (ProductPage). We need to use useTransition to handle errors that may arise from the server component (AddToCartButton) and prevent the client component (ProductPage) from crashing.
  const [success, setSuccess] = useState(false);
  return (
    <div className="relative flex items-center gap-2">
      <button
        className="btn btn-primary"
        onClick={() => {
          setSuccess(false);
          startTransition(async () => {
            await incrementProductQuantity(productId);
            setSuccess(true);
          });
        }}
      >
        Add to Cart
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-shopping-cart"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
          <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
          <path d="M17 17h-11v-14h-2"></path>
          <path d="M6 5l14 1l-1 7h-13"></path>
        </svg>
      </button>
      {isPending && <span className="loading loading-spinner loading-md" />}
      {!isPending && success && (
        <div className="text-success ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Item added to cart!</span>
        </div>
      )}
    </div>
  );
};

export default AddToCartButton;
