import { Button } from "@/components/shared/Button";
import HeroProductCard from "@/components/shared/HeroProductCard";
import { prisma } from "@/lib/db/prisma";
import Link from "next/link";

export default async function TopPicksSection() {
  const allProducts = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });

  const topProducts = allProducts
    .slice(0, 3)
    .map((product) => <HeroProductCard key={product.id} product={product} />);

  return (
    <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
        <div className="flex justify-center items-center p-6 bg-gray-100 rounded sm:p-8">
          <div className="max-w-md mx-auto text-center lg:text-left ">
            <header>
              <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                Our Favorites
              </h2>
              <p className="mt-4 text-gray-500">
                A mouthwatering selection of handcrafted masterpieces that
                redefine the art of burger perfection.
              </p>
            </header>

            <Link href="/products">
              <Button label="View All" className="btn-primary mt-8" />
            </Link>
          </div>
        </div>
        <div className="col-start-2 lg:col-span-2 lg:py-8">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:col-span-2">
            {topProducts}
          </div>
        </div>
      </div>
    </div>
  );
}
