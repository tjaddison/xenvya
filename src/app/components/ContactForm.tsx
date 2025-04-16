'use client';

import { FormEvent } from 'react';

export default function ContactForm() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Thank you for your interest! This is a demo website - your message would be sent in a real implementation.');
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
          placeholder="Jane Smith"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
          placeholder="jane@company.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Tell us about your project
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
          placeholder="I'm looking for a solution that helps with..."
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-foreground text-background py-3 px-6 rounded-md hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium transition-colors flex items-center justify-center cursor-pointer"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
          <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Let's Work Together
      </button>
    </form>
  );
}