import Image from "next/image";
import React from "react";
import { productCategories } from "@/lib/constants";
import ProductCategoryCard from "@/components/shared/ProductCategoryCard";
import Link from "next/link";
import { Button } from "@/components/shared/Button";

export default function Categories() {
  const firstCategory = productCategories[0];
  const remainingCategories = productCategories.slice(1);

  const remainingCategoriesGrid = remainingCategories.map((category) => (
    <ProductCategoryCard key={category.id} category={category} />
  ));

  return (
    <div className="max-w-screen-xl px-4 py-8 my-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
      <header className="text-center">
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
          Shop by Category
        </h2>

        <p className="max-w-md mx-auto mt-4 text-gray-500">
          Explore a variety of delicious burgers tailored to your cravings.
        </p>
      </header>

      <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
        {remainingCategoriesGrid}
        <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <Link href="#" className="relative block group">
            <Image
              width={400}
              height={400}
              src={firstCategory.image}
              alt={firstCategory.name}
              className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
            />

            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
              <h3 className="text-xl font-bold text-white uppercase">
                {firstCategory.name}
              </h3>
              <Button label="Buy Now" className="bg-accent my-4" />
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
