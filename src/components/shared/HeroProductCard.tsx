"use client";

import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { formatPrice } from "@/lib/priceFormatter";

interface HeroProductCardProps {
  product: Product;
}

export default function HeroProductCard({ product }: HeroProductCardProps) {
  return (
    <div className="block overflow-hidden group rounded-md">
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={400}
        height={400}
        className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
      />
      <Link
        href={`/products/${product.id}`}
        className="relative pt-3 bg-white cursor-pointer"
      >
        <h3 className="text-xs mt-4 text-gray-700 group-hover:underline group-hover:underline-offset-4">
          {product.name}
        </h3>
        <p className="mt-2">
          <span className="sr-only"> Price: </span>
          <span className="tracking-wider text-gray-900">
            {formatPrice(product.price)}
          </span>
        </p>
      </Link>
    </div>
  );
}
