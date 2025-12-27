import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Optimized Scroll Listener (Throttled logic)
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "Story" },
    { path: "/menu", label: "Menu" },
    { path: "/book-table", label: "Reserve" },
    { path: "/contact", label: "Talk" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 ${
          isScrolled ? "bg-[#1a2310] py-3 shadow-xl" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* LOGO - CSS Hover */}
            <Link
              to="/"
              className="relative group z-50 flex items-center gap-2 transform transition-transform duration-300 hover:scale-105 hover:-rotate-1"
            >
              <img
                src="/images/pizzas/logo.png"
                alt="Onni Pizza"
                width="48"
                height="48"
                className="h-12 w-auto object-contain drop-shadow-md"
              />
              <span className="font-rubyring text-3xl uppercase tracking-widest text-[#A1BC98] hidden sm:block">
                Onni
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="relative group py-2"
                  >
                    <span
                      className={`font-rubyring text-xl tracking-wide uppercase transition-colors duration-200 ${
                        isActive
                          ? "text-[#DE802B]"
                          : "text-[#A1BC98] group-hover:text-white"
                      }`}
                    >
                      {link.label}
                    </span>
                    {/* CSS Underline Animation */}
                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] bg-[#DE802B] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}

              {/* CTA Button - CSS Hover */}
              {location.pathname !== "/book-table" && (
                <Link to="/book-table">
                  <button className="ml-4 bg-[#DE802B] text-[#1a2310] px-6 py-2 font-rubyring uppercase text-lg transition-all duration-200 hover:bg-white hover:text-[#DE802B] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                    Order Now
                  </button>
                </Link>
              )}
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative z-50 p-2 text-[#A1BC98] hover:text-[#DE802B] transition-colors"
              aria-label="Toggle Menu"
            >
              <div className="w-8 flex flex-col gap-1.5 items-end">
                {/* Simple CSS transforms for hamburger */}
                <span
                  className={`w-8 h-0.5 bg-current block transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`w-6 h-0.5 bg-current block transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-4 h-0.5 bg-current block transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-2 w-8" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-10%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-10%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#1a2310] flex flex-col items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center space-y-6 relative z-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-5xl font-rubyring uppercase tracking-widest transition-colors ${
                    location.pathname === link.path
                      ? "text-[#DE802B]"
                      : "text-[#A1BC98]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
