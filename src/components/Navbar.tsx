import { FC } from 'react';

const Navbar: FC = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/us-flag.svg" alt="US Flag" className="h-6 w-6 mr-2" />
            <span className="text-gray-800">English</span>
          </div>

          {/* Center Navigation Links */}
          <div className="flex-1 flex justify-center items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              About Us
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Menu
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Merchandise
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Bakery & Pastries
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Contact
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Cart
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Checkout
            </a>
          </div>

          {/* Right Buttons */}
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900 px-4 py-2">
              Rewards
            </a>
            <a href="#" className="text-gray-900 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md text-white">
              Order
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
