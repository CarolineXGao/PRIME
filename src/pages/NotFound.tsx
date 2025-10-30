import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <section className="py-16 bg-gray-50 min-h-[60vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-24 h-24 bg-[#2D6AA3] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="text-4xl font-bold text-[#2D6AA3]">404</span>
          </div>
          
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Page Not Found
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Sorry, we couldn't find the page you're looking for. The page may have been moved, 
            deleted, or the URL might be incorrect.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-[#2D6AA3] hover:bg-[#1e4d73] text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              <Home className="w-5 h-5 mr-2" />
              Go to Homepage
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="border-2 border-[#2D6AA3] text-[#2D6AA3] hover:bg-[#2D6AA3] hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </div>
          
          <div className="mt-12 p-6 bg-white rounded-xl border-2 border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Looking for something specific?
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <Link to="/about" className="text-[#2D6AA3] hover:text-[#1e4d73] font-medium">
                About PRIME
              </Link>
              <Link to="/team" className="text-[#2D6AA3] hover:text-[#1e4d73] font-medium">
                Our Team
              </Link>
              <Link to="/resources" className="text-[#2D6AA3] hover:text-[#1e4d73] font-medium">
                Resources
              </Link>
              <Link to="/contact" className="text-[#2D6AA3] hover:text-[#1e4d73] font-medium">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;