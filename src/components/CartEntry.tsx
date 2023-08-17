"use client";
import React from "react";
import { CartItemWithProduct } from "@/lib/db/cart";
import { formatPrice } from "@/lib/priceFormatter";
import Image from "next/image";
import Link from "next/link";
import { useTransition } from "react";

interface CartEntryProps {
  cartItem: CartItemWithProduct;
  // eslint-disable-next-line no-unused-vars
  setProductQuantity: (productId: string, quantity: number) => Promise<void>;
  // eslint-disable-next-line no-unused-vars
  removeProductFromCart: (productId: string) => Promise<void>;
}

export default function CartEntry({
  cartItem: { product, quantity },
  setProductQuantity,
  removeProductFromCart,
}: CartEntryProps) {
  const [isPending, startTransition] = useTransition();

  const quantityOptions: React.JSX.Element[] = [];
  for (let i = 1; i <= 20; i++) {
    quantityOptions.push(
      <option value={i} key={i}>
        {i}
      </option>,
    );
  }

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={200}
          height={200}
          className="rounded-lg"
        />
        <div>
          <Link href={`/products/${product.id}`} className="font-bold">
            {product.name}
          </Link>
          <div>Price: {formatPrice(product.price)}</div>
          <div className="my-1 flex items-center gap-2">
            Quantity:
            <select
              className="select-bordered select w-full max-w-[80px]"
              defaultValue={quantity}
              onChange={(e) => {
                const newQuantity = parseInt(e.currentTarget.value);
                startTransition(async () => {
                  await setProductQuantity(product.id, newQuantity);
                });
              }}
            >
              {quantityOptions}
            </select>
            <button
              className="btn btn-sm btn-error"
              onClick={() => {
                startTransition(async () => {
                  await removeProductFromCart(product.id);
                });
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              Remove
            </button>
          </div>
          <div className="flex items-center gap-3">
            Total: {formatPrice(product.price * quantity)}
            {isPending && (
              <span className="loading loading-spinner loading-sm" />
            )}
          </div>
        </div>
      </div>
      <div className="divider" />
    </div>
  );
}
