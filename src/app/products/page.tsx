import ProductCard from "@/components/ProductCard";
import { prisma } from "@/lib/db/prisma";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Products = async () => {
  const allProducts = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });

  const remainingProducts = allProducts
    .slice(1)
    .map((product) => <ProductCard key={product.id} product={product} />);

  return (
    <div>
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
      <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {remainingProducts}
      </div>
    </div>
  );
};

export default Products;
