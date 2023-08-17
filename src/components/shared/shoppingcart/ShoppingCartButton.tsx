"use client";

import { ShoppingCart } from "@/lib/db/cart";
import { formatPrice } from "@/lib/priceFormatter";
import Link from "next/link";
import React from "react";

interface ShoppingCartButtonProps {
  cart: ShoppingCart | null;
}

export default function ShoppingCartButton({ cart }: ShoppingCartButtonProps) {
  // For DaisyUI dropdowns, we have to handle the closing of the dropdown ourselves. We can do this by calling the blur method on the active element. This will remove the focus from the element and close the dropdown.
  const closeDropDown = () => {
    const element = document.activeElement as HTMLElement;
    if (element) {
      element.blur();
    }
  };
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
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
          <span className="badge badge-sm indicator-item">
            {cart?.size || 0}
          </span>
        </div>
      </label>
      <div
        tabIndex={0}
        className="card dropdown-content card-compact mt-3 w-52 bg-base-100 shadow z-30"
      >
        <div className="card-body">
          <span className="text-lg font-bold"> {cart?.size || 0} Items </span>
          <span className="text-info">
            Subtotal: {formatPrice(cart?.subtotal || 0)}
          </span>
          <div className="card-actions">
            <Link
              href="/cart"
              className="btn btn-primary btn-block"
              onClick={closeDropDown}
            >
              View Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
