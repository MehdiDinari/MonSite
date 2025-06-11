import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="text-2xl font-bold text-primary">
              {portfolioData.personal.name}
            </div>
            <p className="text-muted-foreground text-sm">
              Computer Science Engineering Student passionate about creating innovative solutions.
            </p>
          </motion.div>

          {/* Center - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center space-y-4"
          >
            <h4 className="font-semibold">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {['About', 'Services', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.querySelector(`#${item.toLowerCase()}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right - Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center md:justify-end space-x-4"
          >
            <motion.a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-accent rounded-lg hover:bg-accent/80 transition-colors duration-200"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-accent rounded-lg hover:bg-accent/80 transition-colors duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={`mailto:${portfolioData.personal.email}`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-accent rounded-lg hover:bg-accent/80 transition-colors duration-200"
              aria-label="Email Contact"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 pt-8 border-t border-border"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>© {currentYear} {portfolioData.personal.name}. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-40"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;

