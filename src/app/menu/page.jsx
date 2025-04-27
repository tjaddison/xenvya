"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function MobileMenuPage() {
  const router = useRouter();
  
  return (
    <div className="fixed inset-0 bg-black z-[9999] p-8 text-white">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Menu</h2>
        <button 
          onClick={() => router.back()}
          className="p-2 bg-white text-black rounded-full"
        >
          Close
        </button>
      </div>
      
      <nav className="flex flex-col space-y-6 text-xl">
        <Link href="/services/saas-product-development">SaaS Development</Link>
        <Link href="/services/software-acquisition">Software Acquisition</Link>
        <Link href="/#approach">Our Approach</Link>
        <Link href="/#values">Values</Link>
        <Link href="/#contact">Contact Us</Link>
        <Link href="/login" className="mt-4 inline-block border px-4 py-2 rounded">Login</Link>
      </nav>
    </div>
  );
} 