import React from "react";
import { heroImage } from "@/lib/constants";
import { Button } from "@/components/shared/Button";

export default function HeroSection() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-base-100">
        <div className="max-w-sm">
          <h1 className="mb-6 text-5xl font-bold">
            it&apos;s not just Food, it&apos; an experience.
          </h1>
          <p className="mb-6">
            Delicious and mouth-watering feast, made with love
          </p>
          <Button label="View Our Menu" className="btn-primary mt-5 btn-lg" />
        </div>
      </div>
    </div>
  );
}
