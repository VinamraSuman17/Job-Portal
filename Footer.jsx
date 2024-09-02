import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center px-4">
        
        {/* About Us Section */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">About Us</h3>
          <p className="text-sm">
            We connect job seekers with their dream jobs and companies with their ideal candidates.
            Whether you're looking for your next career move or trying to find the best talent, we're here to help.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-yellow-400 transition-colors duration-300">About Us</a></li>
            <li><a href="/jobs" className="hover:text-yellow-400 transition-colors duration-300">Browse Jobs</a></li>
            <li><a href="/contact" className="hover:text-yellow-400 transition-colors duration-300">Contact Us</a></li>
            <li><a href="/terms" className="hover:text-yellow-400 transition-colors duration-300">Terms of Service</a></li>
            <li><a href="/privacy" className="hover:text-yellow-400 transition-colors duration-300">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">Contact Us</h3>
          <p className="text-sm">Email: <a href="mailto:support@joblisting.com" className="text-yellow-400 hover:underline">support@joblisting.com</a></p>
          <p className="text-sm">Phone: +1 (800) 123-4567</p>
          <p className="text-sm">Address: 123 Job Street, Employment City, Jobland</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 pt-4">
        <p className="text-center text-sm">&copy; {new Date().getFullYear()} Job Listing. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
