"use client";
import Link from "next/link";

export default function MobileMenu({ open, onClose }) {
  return (
    <div
      className={`fixed inset-0 z-50 transform bg-white dark:bg-gray-900 transition-transform duration-300 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-bold">Menu</h2>
        <button
          onClick={onClose}
          className="p-2 rounded focus:outline-none focus:ring focus:ring-indigo-500"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav className="flex flex-col p-4 space-y-4">
        <Link href="/services/saas-product-development" onClick={onClose}>SaaS Dev</Link>
        <Link href="/services/software-acquisition" onClick={onClose}>Acquisition</Link>
        <Link href="/#approach" onClick={onClose}>Approach</Link>
        <Link href="/#values" onClick={onClose}>Values</Link>
        <Link href="/#contact" onClick={onClose}>Contact</Link>
        <Link href="/login" className="mt-4 inline-block border px-4 py-2 rounded" onClick={onClose}>Login</Link>
      </nav>
    </div>
  );
} 