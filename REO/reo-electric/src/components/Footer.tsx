'use client';

import React from 'react';

interface FooterProps {
  locale: string;
}

const Footer: React.FC<FooterProps> = ({ locale }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
            <h3 className="text-xl font-bold mb-4">REO Electric</h3>
            <p className="text-gray-300">
              Providing sustainable and reliable electricity solutions for homes and businesses.
            </p>
          </div>
          <div className="col-md-3 mb-4 mb-md-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="list-unstyled">
              <li className="mb-2"><a href={`/${locale}`} className="text-gray-300 hover:text-white">Home</a></li>
              <li className="mb-2"><a href={`/${locale}/about`} className="text-gray-300 hover:text-white">About Us</a></li>
              <li className="mb-2"><a href={`/${locale}/blog`} className="text-gray-300 hover:text-white">Blog</a></li>
              <li className="mb-2"><a href={`/${locale}/contact`} className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <address className="text-gray-300 not-italic">
              <p className="mb-2">123 Energy Street</p>
              <p className="mb-2">Power City, PC 12345</p>
              <p className="mb-2">Email: info@reoelectric.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400">
          <p>© {currentYear} REO Electric Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;