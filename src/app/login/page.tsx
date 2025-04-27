'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [isLogin] = useState(true);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Incorrect username or password. Please try again or contact our support team if you continue to experience difficulty.');
  };

  // const toggleForm = () => {
  //   setIsLogin(!isLogin);
  // };

  return (
    <div className="min-h-screen flex flex-col">

      <div className="flex-1 flex items-center justify-center p-4 sm:p-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden w-full max-w-md">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h2>
            

            
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


              <div className="mt-4 text-center text-sm">
                <Link href="/" className="text-purple-600 hover:underline">Back to home</Link>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
}