import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./Button";

type ProductCategoryProps = {
  id: number;
  name: string;
  image: string;
};
type ProductCategoryCardProps = {
  category: ProductCategoryProps;
};

export default function ProductCategoryCard({
  category,
}: ProductCategoryCardProps) {
  return (
    <Link href="/google" className="relative block group">
      <Image
        width={400}
        height={400}
        src={category.image}
        alt={category.name}
        className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
      />

      <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
        <h3 className="text-xl font-bold text-info uppercase">
          {category.name}
        </h3>

        <Button label="Buy Now" className="bg-accent my-4" />
      </div>
    </Link>
  );
}
