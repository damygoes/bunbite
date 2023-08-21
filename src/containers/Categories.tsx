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
    <div className="flex flex-col justify-between items-center gap-4 p-4 lg:flex-row lg:justify-center lg:items-start  border border-solid border-primary">
      <header className="w-full flex flex-col justify-center items-center shadow rounded p-4 gap-3 lg:items-start">
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
          Shop by Category
        </h2>
        <p className="max-w-md mx-auto text-sm  text-gray-500">
          Explore a variety of delicious burgers tailored to your cravings.
        </p>
      </header>

      <ul className="grid grid-cols-1 gap-4 p-10 mt-8 lg:grid-cols-3">
        <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <Link href="#" className="relative block group">
            <Image
              width={400}
              height={400}
              src={firstCategory.image}
              alt={firstCategory.name}
              className="object-cover w-full transition duration-500 aspect-square rounded-lg group-hover:opacity-90"
            />

            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
              <h3 className="text-xl font-bold text-base-100 uppercase">
                {firstCategory.name}
              </h3>
              <Button label="Explore" className="bg-accent my-4" />
            </div>
          </Link>
        </li>
        {remainingCategoriesGrid}
      </ul>
    </div>
  );
}
