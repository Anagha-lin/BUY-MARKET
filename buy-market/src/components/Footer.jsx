import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-blue-800 text-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About BUY-MARKET</h3>
            <p className="text-sm">Your source for quality products like cassava flakes, maize, locust beans, yam flour, plantains, millet, onions, and palm oil.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm">
              <li><Link to="/products" className="hover:text-orange-400">Our Products</Link></li>
              <li><Link to="/about-us" className="hover:text-orange-400">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-orange-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">BUY-MARKET HEADQUARTERS</p>
            <p className="text-sm">Phone: (+234) 07060704682</p>
            <p className="text-sm">Email: BUY-MARKET@gmail.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-600 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} BUY-MARKET. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

