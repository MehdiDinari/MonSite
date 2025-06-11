import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Moon, Sun, Sparkles } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import { useTheme } from '../hooks/useTheme';
import { portfolioData } from '../data/portfolio';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navItems = [
    { name: 'About', href: '#about', icon: '👨‍💻' },
    { name: 'Services', href: '#services', icon: '⚡' },
    { name: 'Experience', href: '#experience', icon: '🚀' },
    { name: 'Projects', href: '#projects', icon: '💼' },
    { name: 'Contact', href: '#contact', icon: '📧' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX }}
      />
      
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b border-border/50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo with Animation */}
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#" className="text-2xl font-bold gradient-text flex items-center gap-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <HiSparkles className="text-blue-500" />
                </motion.div>
                MD
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="relative text-foreground hover:text-primary transition-colors duration-200 font-medium group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-lg">{item.icon}</span>
                    {item.name}
                  </span>
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"
                    whileHover={{ width: "100%" }}
                  />
                </motion.button>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.button
                onClick={() => scrollToSection('#contact')}
                className="btn-gradient text-primary-foreground px-4 py-2 rounded-lg font-medium glow-effect"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  <Sparkles size={16} />
                  Get In Touch
                </span>
              </motion.button>
              
              <motion.a
                href="/cv.pdf"
                download
                className="border border-border px-4 py-2 rounded-lg hover:bg-accent transition-all duration-200 font-medium flex items-center gap-2 shimmer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload size={16} />
                Download CV
              </motion.a>

              <div className="flex items-center space-x-2">
                {[
                  { icon: FaGithub, href: portfolioData.personal.github, label: "GitHub" },
                  { icon: FaLinkedin, href: portfolioData.personal.linkedin, label: "LinkedIn" },
                  { icon: FaEnvelope, href: `mailto:${portfolioData.personal.email}`, label: "Email" }
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-accent transition-all duration-200 glow-effect"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>

              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-accent transition-all duration-200 pulse-glow"
                aria-label="Toggle theme"
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </motion.div>
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-accent transition-colors duration-200"
                aria-label="Toggle theme"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-accent transition-colors duration-200"
                aria-label="Toggle menu"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: isMenuOpen ? 1 : 0, 
              height: isMenuOpen ? "auto" : 0 
            }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 glass-morphism border-t border-border/50 mt-2 rounded-lg">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors duration-200"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-lg">{item.icon}</span>
                    {item.name}
                  </span>
                </motion.button>
              ))}
              <div className="pt-4 space-y-2">
                <motion.button
                  onClick={() => scrollToSection('#contact')}
                  className="w-full btn-gradient text-primary-foreground px-4 py-2 rounded-lg font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get In Touch
                </motion.button>
                <motion.a
                  href="/cv.pdf"
                  download
                  className="w-full border border-border px-4 py-2 rounded-lg hover:bg-accent transition-colors duration-200 font-medium flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaDownload size={16} />
                  Download CV
                </motion.a>
                <div className="flex justify-center space-x-4 pt-2">
                  {[
                    { icon: FaGithub, href: portfolioData.personal.github, label: "GitHub" },
                    { icon: FaLinkedin, href: portfolioData.personal.linkedin, label: "LinkedIn" },
                    { icon: FaEnvelope, href: `mailto:${portfolioData.personal.email}`, label: "Email" }
                  ].map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-accent transition-colors duration-200"
                      aria-label={social.label}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.header>
    </>
  );
};

export default Header;

