import TopPicksSection from "@/containers/TopPicksSection";
import Categories from "@/containers/Categories";
import HeroSection from "@/containers/HeroSection";
export default function Home() {
  return (
    <section className="flex flex-col justify-between items-center gap-4 max-w-screen-2xl min-h-screen">
      <HeroSection />
      <TopPicksSection />
      <Categories />
    </section>
  );
}
