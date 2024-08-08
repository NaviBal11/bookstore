import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
            <h2 className="text-2xl font-semibold mb-2">Company Name</h2>
            <p className="text-gray-400">
              Your company's slogan or a brief description goes here.
            </p>
          </div>
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/4">
            <h3 className="text-xl font-semibold mb-2">Subscribe</h3>
            <form>
              <input
                type="email"
                className="w-full p-2 mb-2 text-black"
                placeholder="Enter your email"
              />
              <button className="w-full bg-lime-600 hover:bg-lime-700 text-white p-2">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="text-center mt-10 text-gray-500">
          <p>&copy; 2024 Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
