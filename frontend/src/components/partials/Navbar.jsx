import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed top-0 z-50 w-full glass-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl sm:text-3xl font-bold text-color-primary">
              The Matrix World
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-4 items-center">
            <Link
              to="/"
              className="glass-dark rounded-md px-3 py-2 text-sm font-medium text-color-primary hover:text-white"
            >
              Home
            </Link>
            {/* Add more links here if needed */}
          </nav>

          {/* Mobile Navigation */}
          <nav className="md:hidden flex gap-2 items-center">
            <Link
              to="/"
              className="glass-dark rounded-md px-3 py-2 text-sm font-medium text-color-primary hover:text-white"
            >
              Home
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
