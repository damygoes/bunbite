import FormSubmitButton from "@/components/FormSubmitButton";
import { prisma } from "@/lib/db/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata = {
  title: "Add Product - Bunbite",
  description: "Add product to your store",
};

async function addProduct(formData: FormData) {
  "use server";

  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/add-product");
  }

  const name = formData.get("productName")?.toString();
  const description = formData.get("productDescription")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const price = Number(formData.get("productPrice") || 0);

  if (!name || !description || !imageUrl || !price) {
    throw new Error("Missing required fields");
  }

  await prisma.product.create({
    data: {
      name,
      description,
      imageUrl,
      price,
    },
  });

  redirect("/");
}

const AddProduct = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/add-product");
  }

  return (
    <div>
      <h1 className="text-lg mb-3 font-bold">Add Product</h1>
      <form action={addProduct}>
        <input
          required
          name="productName"
          placeholder="Product Name"
          type="text"
          className="mb-3 w-full input input-bordered"
        />
        <textarea
          required
          name="productDescription"
          placeholder="Product Description"
          className="textarea textarea-bordered mb-3 w-full"
        />
        <input
          required
          name="imageUrl"
          placeholder="Product Image URL"
          type="url"
          className="mb-3 w-full input input-bordered"
        />
        <input
          required
          name="productPrice"
          placeholder="Product Price"
          type="number"
          className="mb-3 w-full input input-bordered"
        />
        <FormSubmitButton className="btn-block">Add Product</FormSubmitButton>
      </form>
    </div>
  );
};

export default AddProduct;
