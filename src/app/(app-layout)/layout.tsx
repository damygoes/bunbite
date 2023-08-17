import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="p-4 max-w-7xl m-auto min-w-[300px] overflow-x-hidden">
        {children}
      </div>
      <Footer />
    </>
  );
}
