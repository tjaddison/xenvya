'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('This is a demo website - authentication would work in a real implementation.');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="p-4 sm:p-6 flex flex-wrap justify-between items-center">
        <Link href="/" className="flex items-center">
          <svg width="32" height="32" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 sm:w-10 sm:h-10">
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
          <h1 className="text-xl sm:text-2xl font-bold">XENVYA</h1>
        </Link>
        
        <nav className="hidden md:block">
          <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
            Back to Home
          </Link>
        </nav>
      </header>

      <div className="flex-1 flex items-center justify-center p-4 sm:p-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden w-full max-w-md">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h2>
            
            <div className="mb-6">
              <div className="flex justify-center space-x-4">
                <button 
                  onClick={() => setIsLogin(true)} 
                  className={`px-4 py-2 font-medium ${isLogin ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500'}`}
                >
                  Login
                </button>
                <button 
                  onClick={() => setIsLogin(false)} 
                  className={`px-4 py-2 font-medium ${!isLogin ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500'}`}
                >
                  Register
                </button>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800"
                    placeholder="Jane Smith"
                  />
                </div>
              )}
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <div className="flex justify-between">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Password
                  </label>
                  {isLogin && (
                    <a href="#" className="text-xs text-purple-600 hover:text-purple-800">
                      Forgot password?
                    </a>
                  )}
                </div>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800"
                  placeholder="••••••••"
                />
              </div>
              
              {!isLogin && (
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800"
                    placeholder="••••••••"
                  />
                </div>
              )}
              
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors"
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </button>
              
              <div className="relative flex items-center justify-center mt-6">
                <div className="border-t border-gray-300 dark:border-gray-700 absolute w-full"></div>
                <div className="bg-white dark:bg-gray-800 px-4 text-sm text-gray-500 relative">OR</div>
              </div>
              
              <div className="grid grid-cols-1 gap-3 mt-6">
                <button
                  type="button"
                  className="w-full border border-gray-300 dark:border-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors flex items-center justify-center"
                >
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.79 15.71 17.57V20.34H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4"/>
                    <path d="M12 23C14.97 23 17.46 22.02 19.28 20.34L15.71 17.57C14.73 18.22 13.48 18.62 12 18.62C9.24 18.62 6.89 16.79 6.01 14.25H2.34V17.13C4.16 20.58 7.8 23 12 23Z" fill="#34A853"/>
                    <path d="M6.01 14.25C5.77 13.58 5.64 12.85 5.64 12.11C5.64 11.36 5.77 10.64 6.01 9.96V7.09H2.34C1.5 8.58 1 10.29 1 12.11C1 13.93 1.5 15.64 2.34 17.13L6.01 14.25Z" fill="#FBBC05"/>
                    <path d="M12 5.57C13.62 5.57 15.08 6.14 16.24 7.24L19.36 4.12C17.46 2.36 14.97 1.29 12 1.29C7.8 1.29 4.16 3.71 2.34 7.16L6.01 10.04C6.89 7.5 9.24 5.57 12 5.57Z" fill="#EA4335"/>
                  </svg>
                  Continue with Google
                </button>
                <button
                  type="button"
                  className="w-full border border-gray-300 dark:border-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors flex items-center justify-center"
                >
                  <svg className="h-5 w-5 mr-2 text-blue-600" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3Z"/>
                    <path d="M16.5 8.25C16.5 8.84674 16.0467 9.3 15.45 9.3C14.8533 9.3 14.4 8.84674 14.4 8.25C14.4 7.65326 14.8533 7.2 15.45 7.2C16.0467 7.2 16.5 7.65326 16.5 8.25Z" fill="white"/>
                    <path d="M12 13.5001C10.3431 13.5001 9 12.157 9 10.5001C9 8.8432 10.3431 7.5 12 7.5C13.6569 7.5 15 8.8432 15 10.5001C15 12.157 13.6569 13.5001 12 13.5001Z" fill="white"/>
                    <path d="M18 16.5C18 16.5 16.5 18 12 18C7.5 18 6 16.5 6 16.5V15C6 15 7.5 13.5 12 13.5C16.5 13.5 18 15 18 15V16.5Z" fill="white"/>
                  </svg>
                  Continue with LinkedIn
                </button>
                <button
                  type="button"
                  className="w-full border border-gray-300 dark:border-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors flex items-center justify-center"
                >
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10V10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.19 14.41 4.53 14.42 3.89 14.28C4.16 15.14 4.69 15.9 5.41 16.45C6.13 17.01 7.01 17.32 7.92 17.33C6.24 18.65 4.09 19.39 1.88 19.38C1.55 19.38 1.22 19.36 0.88 19.31C3.06 20.71 5.65 21.47 8.26 21.47C16 21.47 20.28 15.06 20.28 9.5C20.28 9.31 20.28 9.12 20.27 8.94C21.1 8.31 21.85 7.53 22.46 6Z"/>
                  </svg>
                  Continue with X (Twitter)
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 px-4 text-center text-gray-500 text-sm">
        <p>© 2025 Xenvya Consulting LLC. All rights reserved.</p>
      </footer>
    </div>
  );
}