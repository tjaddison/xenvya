"use client";
import Link from "next/link";
import { useState } from "react";

interface DropdownProps {
  name: string;
  title: string;
  items: Array<{
    href: string;
    label: string;
  }>;
  isMobile?: boolean;
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  const toggleDropdown = (name: string): void => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const DropdownMenu = ({ name, title, items, isMobile = false }: DropdownProps) => {
    const dropdownId = isMobile ? `mobile${name}` : name;
    
    return (
      <div className={isMobile ? "" : "relative group hover:text-indigo-600 dark:hover:text-indigo-400"}>
        <button 
          onClick={() => toggleDropdown(dropdownId)}
          className={isMobile 
            ? "flex items-center justify-between w-full text-lg font-medium text-gray-700 dark:text-white"
            : "flex items-center text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400"
          }
        >
          {title}
          <svg 
            className={`${isMobile ? 'w-5 h-5' : 'ml-1 w-4 h-4'} transition-transform ${activeDropdown === dropdownId ? 'rotate-180' : ''}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {/* For desktop: Show dropdown on hover using CSS */}
        {!isMobile ? (
          <div 
            className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 z-50 
            opacity-0 invisible group-hover:opacity-100 group-hover:visible 
            transition-all duration-200 ease-in-out"
          >
            {items.map((item, index) => (
              <Link key={index} href={item.href} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                {item.label}
              </Link>
            ))}
          </div>
        ) : activeDropdown === dropdownId && (
          <div className="mt-2 pl-4 space-y-2">
            {items.map((item, index) => (
              <Link 
                key={index}
                href={item.href} 
                className={isMobile
                  ? "block py-2 text-gray-600 dark:text-gray-300"
                  : "block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                }
                onClick={() => isMobile && setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  // Define solution items based on page.tsx menu
  const solutionsItems = [
    { href: "/services/saas-product-development", label: "SaaS Product Development" },
    { href: "/services/software-acquisition", label: "Software Acquisition" }
  ];
  
  return (
    <>
      {/* Header with menu matching page.tsx */}
      <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 shadow-sm w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <svg width="32" height="32" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
              <path d="M60 10L110 40V80L60 110L10 80V40L60 10Z" fill="url(#paint0_linear)" />
              <path d="M60 10L110 40V80L60 110L10 80V40L60 10Z" stroke="currentColor" strokeWidth="2" />
              <path d="M37 55L60 65L83 55" stroke="white" strokeWidth="4" strokeLinecap="round" />
              <path d="M60 65V90" stroke="white" strokeWidth="4" strokeLinecap="round" />
              <defs>
                <linearGradient id="paint0_linear" x1="60" y1="10" x2="60" y2="110" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4F46E5" />
                  <stop offset="1" stopColor="#9333EA" />
                </linearGradient>
              </defs>
            </svg>
            <h1 className="text-xl font-bold">XENVYA</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Solutions dropdown menu */}
            <DropdownMenu name="Solutions" title="Solutions" items={solutionsItems} />
            
            {/* Regular links matching page.tsx */}
            <Link href="/#approach" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400">
              Our Approach
            </Link>
            
            <Link href="/#values" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400">
              Values
            </Link>
            
            <Link href="/#contact" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400">
              Contact Us
            </Link>
          </nav>

          {/* Right Side - Auth & CTA */}
          <div className="hidden md:flex items-center">
            <Link 
              href="/login" 
              className="hidden md:inline-flex items-center justify-center px-6 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 transition-colors"
            >
              Log In
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Full screen mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 overflow-y-auto">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center mb-6">
              <Link href="/" className="flex items-center">
                <svg width="32" height="32" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <path d="M60 10L110 40V80L60 110L10 80V40L60 10Z" fill="url(#paint0_linear)" />
                  <path d="M60 10L110 40V80L60 110L10 80V40L60 10Z" stroke="currentColor" strokeWidth="2" />
                  <path d="M37 55L60 65L83 55" stroke="white" strokeWidth="4" strokeLinecap="round" />
                  <path d="M60 65V90" stroke="white" strokeWidth="4" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="paint0_linear" x1="60" y1="10" x2="60" y2="110" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#4F46E5" />
                      <stop offset="1" stopColor="#9333EA" />
                    </linearGradient>
                  </defs>
                </svg>
                <h1 className="text-xl font-bold">XENVYA</h1>
              </Link>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-md text-gray-700 dark:text-gray-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="mt-8 space-y-6">
              {/* Mobile menu matching desktop menu */}
              <DropdownMenu name="Solutions" title="Solutions" items={solutionsItems} isMobile={true} />
              <Link href="/#approach" className="block text-lg font-medium text-gray-700 dark:text-white" onClick={() => setMobileMenuOpen(false)}>
                Our Approach
              </Link>
              
              <Link href="/#values" className="block text-lg font-medium text-gray-700 dark:text-white" onClick={() => setMobileMenuOpen(false)}>
                Values
              </Link>
              
              <Link href="/#contact" className="block text-lg font-medium text-gray-700 dark:text-white" onClick={() => setMobileMenuOpen(false)}>
                Contact Us
              </Link>
            </nav>

            <div className="mt-10">
              <Link 
                href="/login" 
                className="block w-full py-3 text-center bg-indigo-600 rounded-md text-white font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 