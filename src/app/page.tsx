"use client";

import Image from "next/image";
export default function Home() {
  return (
    <div className="flex flex-col justify-between items-start gap-4 w-screen">
      <div className="flex justify-between items-center h-screen w-full p-8 border border-solid border-secondary">
        <div className="flex flex-col justify-center items-start p-12 gap-2 w-[45%] h-full flex-grow text-left border border-solid border-primary">
          <h1 className="text-7xl flex-wrap tracking-wide font-normal mb-8">
            it&apos;s not just
            <br />
            Food, it&apos;s an
            <br />
            <span className="font-bold">experience.</span>
          </h1>
          <p className="text-md font-light">
            Delicious and mouth-watering feast, made with love
          </p>
          <button className="btn btn-square btn-primary btn-wide rounded-full mt-12">
            View Menu
          </button>
        </div>
        <div className="flex justify-center items-center h-full w-1/2 border border-solid border-primary">
          <Image
            src="https://images.unsplash.com/photo-1596662977545-485cfa84f149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt="burger"
            height={400}
            width={400}
          />
        </div>
      </div>
      <div>Top Picks Carousel</div>
      <div>Restaurant Menu</div>
    </div>
  );
}
