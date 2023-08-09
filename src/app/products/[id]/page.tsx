import PriceTag from "@/components/PriceTag";
import { prisma } from "@/lib/db/prisma";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import React, { cache } from "react";
import AddToCartButton from "./AddToCartButton";
import { incrementProductQuantity } from "./actions";

interface ProductPageProps {
  params: {
    id: string;
  };
}

/* This is a dynamic page and we want to create the metadata dynamically. However,we cannot export the metadata as in the products or homepage but export an async function that returns the metadata object. Note that the name of the function needs to be generateMetadata, otherwise Next.js will not be able to find it or recognize it.

By default, we cannot share data between the actual page (ProductPage) and the metadata because we will need to fetch the products twice and that is wasteful. However, if we cache the product that we fetch using the cache function from react as utilized in the getProduct function, we can then share the product (via the product id) between the page and the metadata (as used in the generateMetadata function).
*/

const getProduct = cache(async (id: string) => {
  const product = await prisma.product.findUnique({
    where: { id },
  });
  if (!product) {
    notFound();
  }
  return product;
});
//

export async function generateMetadata({
  params: { id },
}: ProductPageProps): Promise<Metadata> {
  const product = await getProduct(id);

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      images: [
        {
          url: product.imageUrl,
        },
      ],
    },
  };
}
const ProductPage = async ({ params: { id } }: ProductPageProps) => {
  const product = await getProduct(id);

  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={500}
        height={500}
        className="rounded-lg"
        priority
      />
      <div>
        <h1 className="text-5xl"> {product.name} </h1>
        <PriceTag price={product.price} className="mt-4" />
        <p className="py-6"> {product.description} </p>
        <AddToCartButton
          productId={product.id}
          incrementProductQuantity={incrementProductQuantity}
        />
      </div>
    </div>
  );
};

export default ProductPage;
