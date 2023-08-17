import { Product } from "@prisma/client";
import Link from "next/link";
import React from "react";
import PriceTag from "./PriceTag";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  // if product is less than 7 days old, show "new" badge
  const isNew =
    Date.now() - new Date(product.createdAt).getTime() <
    1000 * 60 * 60 * 24 * 7;

  return (
    <Link
      href={`/products/${product.id}`}
      className="card w-full bg-base-100 hover:shadow-xl transition-shadow"
    >
      <figure>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={800}
          height={400}
          className="h-48 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        {isNew && <div className="badge badge-secondary"> NEW </div>}
        <p>{product.description}</p>
        <div className="flex justify-between">
          <PriceTag price={product.price} className="mt-3" />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
