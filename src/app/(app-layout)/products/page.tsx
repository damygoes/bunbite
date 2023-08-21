import ProductCard from "@/components/ProductCard";
import Pagination from "@/components/shared/Pagination";
import { prisma } from "@/lib/db/prisma";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductsProps {
  searchParams: { page: string };
}

const Products = async ({ searchParams: { page = "1" } }: ProductsProps) => {
  const currentPage = parseInt(page);
  const pageSize = 9;
  const heroItemCount = 1;
  const totalItemCount = await prisma.product.count();
  const totalPages = Math.ceil((totalItemCount - heroItemCount) / pageSize);

  const allProducts = await prisma.product.findMany({
    orderBy: { id: "desc" },
    skip:
      (currentPage - 1) * pageSize + (currentPage === 1 ? 0 : heroItemCount),
    take: pageSize + (currentPage === 1 ? heroItemCount : 0),
  });

  const getRemainingProducts = () => {
    let remainingProducts;
    currentPage === 1
      ? (remainingProducts = allProducts.slice(1))
      : (remainingProducts = allProducts);
    return remainingProducts.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));
  };

  const remainingProducts = getRemainingProducts();

  return (
    <div className="flex flex-col items-center">
      {currentPage === 1 && (
        <div className="hero rounded-xl bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <Image
              src={allProducts[0].imageUrl}
              alt={allProducts[0].name}
              width={400}
              height={800}
              className="w-full max-w-sm rounded-lg shadow-2xl"
              priority
            />
            <div>
              <h1 className="text-5xl font-bold"> {allProducts[0].name} </h1>
              <p className="py-6"> {allProducts[0].description} </p>
              <Link
                href={`/products/${allProducts[0].id}`}
                className="btn btn-primary"
              >
                View Product
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {remainingProducts}
      </div>
      {totalPages > 1 && (
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      )}
    </div>
  );
};

export default Products;
