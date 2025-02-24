import Image from "next/image";
import Navbar from "./_components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="hero bg-[#0c0c0c]">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-0 h-[800px] items-center p-0">
          <div className="pl-40">
            <h1 className="text-white text-4xl font-bold pr-10 leading-[45px]">Save Big on Optimum Plans Bundle Fiber Internet + Mobile Starting from $45/Month</h1>
            <p className="text-white text-sm pt-2">Experience 8 Gig Fiber Internet that’s 4x faster than Verizon and 60% faster than Frontier.</p>
          </div>
          <div className="">
            <img src="/hero.webp" alt="hero" />
          </div>
        </div>
      </section>
    </>
  );
}
