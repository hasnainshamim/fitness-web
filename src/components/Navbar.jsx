import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, BarChart2, Dumbbell, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  return (
    <nav className="bg-background border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Dumbbell className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
                FitLife
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </Link>
            <Link to="/workouts" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Workouts
            </Link>
            <Link to="/progress" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Progress
            </Link>
            <Link to="/profile" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Profile
            </Link>
            <Button variant="default" className="ml-4">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Avatar className="mr-4">
              <AvatarFallback className="bg-primary text-primary-foreground">
                U
              </AvatarFallback>
            </Avatar>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-y-0 right-0 w-64 bg-background shadow-lg z-50"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="pt-20 pb-3 space-y-1 px-4">
              <Link
                to="/"
                className="flex items-center text-foreground hover:bg-primary/10 hover:text-primary px-3 py-4 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                <Home className="mr-3 h-5 w-5" />
                Home
              </Link>
              <Link
                to="/workouts"
                className="flex items-center text-foreground hover:bg-primary/10 hover:text-primary px-3 py-4 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                <Dumbbell className="mr-3 h-5 w-5" />
                Workouts
              </Link>
              <Link
                to="/progress"
                className="flex items-center text-foreground hover:bg-primary/10 hover:text-primary px-3 py-4 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                <BarChart2 className="mr-3 h-5 w-5" />
                Progress
              </Link>
              <Link
                to="/profile"
                className="flex items-center text-foreground hover:bg-primary/10 hover:text-primary px-3 py-4 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                <User className="mr-3 h-5 w-5" />
                Profile
              </Link>
              <div className="pt-4">
                <Button className="w-full">Get Started</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;