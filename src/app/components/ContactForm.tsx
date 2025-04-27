'use client';

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
    validateField(name, formData[name as keyof typeof formData]);
  };

  const validateField = (name: string, value: string) => {
    let errorMessage = "";
    
    switch (name) {
      case "name":
        if (!value.trim()) {
          errorMessage = "Please enter your name";
        } else if (value.trim().length < 2) {
          errorMessage = "Name should be at least 2 characters";
        }
        break;
      case "email":
        if (!value.trim()) {
          errorMessage = "Please enter your email address";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          errorMessage = "Please enter a valid email address";
        }
        break;
      case "message":
        if (!value.trim()) {
          errorMessage = "Please tell us about your project";
        } else if (value.trim().length < 10) {
          errorMessage = "Message should be at least 10 characters";
        }
        break;
    }
    
    setErrors(prev => ({ ...prev, [name]: errorMessage }));
    return !errorMessage;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate all fields before submission
    const nameValid = validateField("name", formData.name);
    const emailValid = validateField("email", formData.email);
    const messageValid = validateField("message", formData.message);
    
    // Set all fields as touched
    setTouched({ name: true, email: true, message: true });
    
    if (!nameValid || !emailValid || !messageValid) {
      return;
    }
    
    setFormStatus('submitting');
    
    try {
      // Send form data to AWS DynamoDB via API route
      const response = await fetch('/api/save-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString()
        })
      });
      
      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormStatus('error');
        console.error('Failed to save contact data');
      }
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <AnimatePresence>
        {formStatus === 'success' && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-md p-4 mb-6"
          >
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 dark:text-green-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-green-700 dark:text-green-300 font-medium">Thank you for reaching out! We&rsquo;ve received your message and will get back to you soon.</p>
            </div>
            <button 
              type="button" 
              onClick={() => setFormStatus('idle')}
              className="mt-3 text-sm text-green-600 dark:text-green-400 hover:underline"
            >
              Send another message
            </button>
          </motion.div>
        )}
        {formStatus === 'error' && (
          <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-md p-4 mb-6 text-red-700 dark:text-red-300">Something went wrong. Please try again or contact us directly at hello@xenvya.com</div>
        )}
      </AnimatePresence>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full px-4 py-2 border ${errors.name && touched.name ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-700'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800`}
          placeholder="Jane Smith"
          required
        />
        {errors.name && touched.name && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full px-4 py-2 border ${errors.email && touched.email ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-700'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800`}
          placeholder="jane@company.com"
          required
        />
        {errors.email && touched.email && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full px-4 py-2 border ${errors.message && touched.message ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-700'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800`}
          placeholder="I'm looking for a solution that helps with..."
          required
        ></textarea>
        {errors.message && touched.message && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>}
      </div>
      <button
        type="submit"
        disabled={formStatus === 'submitting' || formStatus === 'success'}
        className="w-full bg-foreground text-background py-3 px-6 rounded-md hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium transition-colors flex items-center justify-center cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {formStatus === 'submitting' ? 'Sending...' : (<><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
          <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Let&rsquo;s Work Together</>)}
      </button>
    </form>
  );
}