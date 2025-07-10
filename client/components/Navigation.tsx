import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Certifications", href: "#certifications", id: "certifications" },
    { name: "Resume", href: "#resume", id: "resume" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map((item) =>
        document.querySelector(item.href),
      );
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section instanceof HTMLElement && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    console.log('scrollToSection called with:', href);
    const element = document.querySelector(href);
    setIsMenuOpen(false); // Close menu first
    setTimeout(() => {
      if (element) {
        console.log('Element found for', href, element);
        // Dynamically get navbar height for offset
        const navbar = document.querySelector('nav');
        const yOffset = navbar ? -navbar.offsetHeight : -96;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      } else {
        console.warn('No element found for', href);
      }
    }, 250); // Wait for menu to close/animate
  };

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const mobileItemVariants = {
    closed: { x: -20, opacity: 0 },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gray-900/90 backdrop-blur-xl shadow-2xl" // removed border-b
          : "bg-transparent"
      }`}
    >
      {/* Animated background glow */}
      {scrolled && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5"
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center h-24 justify-between w-full">
          {/* Logo */}
          <motion.div
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              filter: "drop-shadow(0 0 10px rgba(96, 165, 250, 0.5))",
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 cursor-pointer group lg:text-4xl text-3xl font-extrabold flex-shrink-0"
            onClick={() => scrollToSection("#home")}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-10 h-10 text-blue-400" />
            </motion.div>
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Portfolio
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:flex items-center space-x-4 flex-grow justify-end"
          >
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                whileHover={{
                  scale: 1.1,
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-6 py-3 rounded-full text-xl font-bold transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg"
                    : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Mobile/Tablet Navigation */}
          <div className="flex lg:hidden items-center space-x-4">
            <motion.div
              variants={itemVariants}
              className="hidden md:flex items-center space-x-1"
            >
              {navItems.slice(0, 3).map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-white bg-gradient-to-r from-blue-500 to-purple-600"
                      : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(59, 130, 246, 0.1)",
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-3 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 text-white transition-all duration-300"
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden bg-gray-900/95 backdrop-blur-xl rounded-2xl mt-2 overflow-hidden"
            >
              <div className="p-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    variants={mobileItemVariants}
                    whileHover={{
                      scale: 1.02,
                      x: 5,
                      backgroundColor: "rgba(59, 130, 246, 0.1)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollToSection(item.href)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                      activeSection === item.id
                        ? "text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{item.name}</span>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: activeSection === item.id ? 1 : 0 }}
                        className="w-2 h-2 bg-white rounded-full"
                      />
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
