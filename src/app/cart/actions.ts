"use server";

import { createCart, getCart } from "@/lib/db/cart";
import { prisma } from "@/lib/db/prisma";
import { revalidatePath } from "next/cache";

export async function setProductQuantity(productId: string, quantity: number) {
  const cart = (await getCart()) ?? (await createCart());

  const itemInCart = cart.items.find((item) => item.productId === productId);
  if (itemInCart) {
    await prisma.cartItem.update({
      where: { id: itemInCart.id },
      data: { quantity },
    });
  } else {
    await prisma.cartItem.create({
      data: {
        cartId: cart.id,
        productId,
        quantity,
      },
    });
  }
  revalidatePath("/cart");
}

export async function removeProductFromCart(productId: string) {
  const cart = (await getCart()) ?? (await createCart());
  const itemInCart = cart.items.find((item) => item.productId === productId);

  if (itemInCart) {
    await prisma.cartItem.delete({
      where: { id: itemInCart.id },
    });
  }

  revalidatePath("/cart");
}
