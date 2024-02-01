import Navbar from "@/components/Navbar";
import Products from "@/components/Products";

export default function Home() {
  return (
    <main className="p-10 flex flex-col gap-10">
      <Navbar />
      <Products />
    </main>
  );
}
