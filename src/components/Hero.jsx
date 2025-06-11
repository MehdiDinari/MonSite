import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaMapMarkerAlt, FaPhone, FaCode, FaRocket } from 'react-icons/fa';
import { HiSparkles, HiLightningBolt } from 'react-icons/hi';
import { SiPython, SiReact, SiJavascript } from 'react-icons/si';
import { portfolioData } from '../data/portfolio';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = portfolioData.personal.name;
  const controls = useAnimation();

  // Typewriter effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  // Floating particles animation
  const particleVariants = {
    animate: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      rotate: [0, 180, 360],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Floating icons data
  const floatingIcons = [
    { Icon: SiPython, color: "text-yellow-500", delay: 0 },
    { Icon: SiReact, color: "text-blue-500", delay: 1 },
    { Icon: SiJavascript, color: "text-yellow-400", delay: 2 },
    { Icon: FaCode, color: "text-green-500", delay: 3 },
    { Icon: FaRocket, color: "text-purple-500", delay: 4 },
    { Icon: HiLightningBolt, color: "text-orange-500", delay: 5 }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 particle-bg relative overflow-hidden">
      {/* Floating Background Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.color} opacity-10`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          variants={particleVariants}
          animate="animate"
          transition={{ delay: item.delay }}
        >
          <item.Icon size={40} />
        </motion.div>
      ))}

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-3"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <HiSparkles className="text-3xl text-blue-500" />
                </motion.div>
                <span className="text-lg text-muted-foreground font-medium">Welcome to my portfolio</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold"
              >
                Hi, I'm{' '}
                <span className="gradient-text relative">
                  {displayText}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="inline-block w-1 h-12 bg-blue-500 ml-1"
                  />
                </span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="space-y-3"
              >
                <h2 className="text-xl sm:text-2xl text-muted-foreground font-medium flex items-center gap-3">
                  <FaCode className="text-blue-500" />
                  {portfolioData.personal.title}
                </h2>
                
                <motion.p
                  className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  {portfolioData.personal.subtitle}
                </motion.p>
              </motion.div>
            </div>

            {/* Enhanced Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {[
                { icon: FaMapMarkerAlt, text: portfolioData.personal.location, color: "text-red-500" },
                { icon: FaPhone, text: portfolioData.personal.phone, color: "text-green-500" },
                { icon: FaEnvelope, text: portfolioData.personal.email, color: "text-blue-500" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg glass-morphism hover:glow-effect transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <item.icon className={`${item.color} text-lg`} />
                  <span className="text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                onClick={() => scrollToSection('#contact')}
                className="btn-gradient text-primary-foreground px-8 py-4 rounded-xl font-medium text-lg shadow-2xl relative overflow-hidden group"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <HiSparkles className="text-xl" />
                  Get In Touch
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                />
              </motion.button>
              
              <motion.a
                href="/cv.pdf"
                download
                className="border-2 border-border px-8 py-4 rounded-xl font-medium text-lg flex items-center justify-center gap-3 glass-morphism hover:glow-effect transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="group-hover:text-blue-500 transition-colors duration-300"
                >
                  <FaDownload className="text-xl" />
                </motion.div>
                Download CV
              </motion.a>
            </motion.div>

            {/* Enhanced Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex items-center space-x-6"
            >
              <span className="text-muted-foreground font-medium">Follow me:</span>
              <div className="flex space-x-4">
                {[
                  { icon: FaGithub, href: portfolioData.personal.github, label: "GitHub", color: "hover:text-gray-600" },
                  { icon: FaLinkedin, href: portfolioData.personal.linkedin, label: "LinkedIn", color: "hover:text-blue-600" },
                  { icon: FaEnvelope, href: `mailto:${portfolioData.personal.email}`, label: "Email", color: "hover:text-red-500" }
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-xl glass-morphism ${social.color} transition-all duration-300 glow-effect group`}
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -5, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.6 + index * 0.1, type: "spring" }}
                  >
                    <social.icon className="text-2xl group-hover:scale-110 transition-transform duration-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Enhanced Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Animated Background Rings */}
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #667eea, #764ba2, #f093fb, #f5576c, #4facfe, #00f2fe, #667eea)',
                  padding: '4px'
                }}
              >
                <div className="w-full h-full rounded-full bg-background"></div>
              </motion.div>

              {/* Secondary Ring */}
              <motion.div
                animate={{ 
                  rotate: [360, 0],
                  scale: [1.1, 1, 1.1]
                }}
                transition={{ 
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-2 rounded-full border-2 border-purple-500/30"
              />
              
              {/* Profile Image Container */}
              <motion.div
                className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden glass-morphism"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Gradient Background */}
                <div className="w-full h-full gradient-animated flex items-center justify-center">
                  <motion.span 
                    className="text-8xl font-bold text-white/90"
                    animate={{ 
                      textShadow: [
                        "0 0 20px rgba(255,255,255,0.5)",
                        "0 0 40px rgba(59,130,246,0.8)",
                        "0 0 20px rgba(255,255,255,0.5)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {portfolioData.personal.name.split(' ').map(n => n[0]).join('')}
                  </motion.span>
                </div>

                {/* Floating Tech Icons around the image */}
                {floatingIcons.slice(0, 4).map((item, index) => (
                  <motion.div
                    key={index}
                    className={`absolute ${item.color} text-2xl`}
                    style={{
                      top: `${20 + index * 20}%`,
                      left: index % 2 === 0 ? '-10px' : 'calc(100% - 30px)',
                    }}
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 4 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                  >
                    <item.Icon />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection('#about')}
          >
            <span className="text-sm text-muted-foreground font-medium">Scroll to explore</span>
            <motion.div
              className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center pulse-glow"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

