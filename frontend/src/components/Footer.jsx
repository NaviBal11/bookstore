import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import ContactForm from "./ContactForm";

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
                <Link to="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/books" className="text-gray-400 hover:text-white">
                  All Books
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <Link to="/" className="text-gray-400 hover:text-white">
                <FaFacebookF />
              </Link>
              <Link to="/" className="text-gray-400 hover:text-white">
                <FaTwitter />
              </Link>
              <Link to="/" className="text-gray-400 hover:text-white">
                <FaInstagram />
              </Link>
              <Link
                to="https://www.linkedin.com/in/navdeep-kaur-webdeveloper/"
                target="_blank"
                className="text-gray-400 hover:text-white"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/4">
            <h3 className="text-xl font-semibold mb-2">Feedback to Owner</h3>
            <ContactForm />
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
