import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaLaptopCode, FaMobile, FaDatabase, FaTools, FaLanguage, FaGraduationCap, FaCertificate, FaStar, FaTrophy } from 'react-icons/fa';
import { SiPython, SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiDocker, SiGit, SiFigma } from 'react-icons/si';
import { HiSparkles, HiLightningBolt, HiAcademicCap } from 'react-icons/hi';
import { portfolioData } from '../data/portfolio';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.90 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const skillIcons = {
    "Programming Languages": { icon: FaCode, color: "text-blue-500" },
    "Frontend Development": { icon: FaLaptopCode, color: "text-green-500" },
    "Backend Development": { icon: FaDatabase, color: "text-purple-500" },
    "Full Stack": { icon: HiLightningBolt, color: "text-yellow-500" },
    "Mobile Development": { icon: FaMobile, color: "text-pink-500" },
    "Databases": { icon: FaDatabase, color: "text-red-500" },
    "Machine Learning": { icon: HiSparkles, color: "text-indigo-500" },
    "Tools & DevOps": { icon: FaTools, color: "text-orange-500" }
  };

  const techIcons = {
    "Python": SiPython,
    "JavaScript": SiJavascript,
    "React": SiReact,
    "Node.js": SiNodedotjs,
    "MongoDB": SiMongodb,
    "Docker": SiDocker,
    "Git": SiGit,
    "Figma": SiFigma
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 particle-bg opacity-50" />
      
      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-20"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <motion.div
              className="flex items-center justify-center gap-3 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <HiAcademicCap className="text-4xl text-blue-500" />
              </motion.div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text">About Me</h2>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <HiSparkles className="text-4xl text-purple-500" />
              </motion.div>
            </motion.div>
            <motion.p 
              className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              {portfolioData.about.description}
            </motion.p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold gradient-text flex items-center justify-center gap-3">
                <FaStar className="text-yellow-500" />
                Technical Skills
                <FaStar className="text-yellow-500" />
              </h3>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Object.entries(portfolioData.skills).map(([category, skills], index) => {
                const skillInfo = skillIcons[category] || { icon: FaCode, color: "text-gray-500" };
                return (
                  <motion.div
                    key={category}
                    variants={itemVariants}
                    className="glass-morphism rounded-xl p-6 hover:glow-effect transition-all duration-300 tilt-effect group"
                    whileHover={{ y: -10, scale: 1.02 }}
                    initial={{ opacity: 0, rotateY: -90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        className={`p-3 rounded-lg bg-accent/20 ${skillInfo.color}`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <skillInfo.icon className="text-xl" />
                      </motion.div>
                      <h4 className="text-lg font-semibold text-primary group-hover:gradient-text transition-all duration-300">
                        {category}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, skillIndex) => {
                        const TechIcon = techIcons[skill];
                        return (
                          <motion.span
                            key={skillIndex}
                            className="px-3 py-2 bg-accent/30 text-accent-foreground rounded-full text-sm font-medium flex items-center gap-2 hover:bg-accent/50 transition-all duration-300 shimmer"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
                          >
                            {TechIcon && <TechIcon className="text-sm" />}
                            {skill}
                          </motion.span>
                        );
                      })}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold gradient-text flex items-center justify-center gap-3">
                <FaGraduationCap className="text-blue-500" />
                Education Journey
                <FaGraduationCap className="text-blue-500" />
              </h3>
            </motion.div>
            <div className="space-y-6">
              {portfolioData.education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass-morphism rounded-xl p-6 hover:glow-effect transition-all duration-300 group"
                  whileHover={{ scale: 1.02, y: -5 }}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <motion.h4 
                      className="text-lg font-semibold text-primary group-hover:gradient-text transition-all duration-300 flex items-center gap-2"
                      whileHover={{ x: 10 }}
                    >
                      <HiAcademicCap className="text-blue-500" />
                      {edu.degree}
                    </motion.h4>
                    <motion.span 
                      className="text-sm text-muted-foreground bg-accent/20 px-3 py-1 rounded-full"
                      whileHover={{ scale: 1.05 }}
                    >
                      {edu.period}
                    </motion.span>
                  </div>
                  <p className="text-foreground font-medium flex items-center gap-2">
                    <FaGraduationCap className="text-green-500" />
                    {edu.institution}
                  </p>
                  <p className="text-muted-foreground flex items-center gap-2">
                    <FaCode className="text-purple-500" />
                    {edu.location}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold gradient-text flex items-center justify-center gap-3">
                <FaCertificate className="text-yellow-500" />
                Certifications & Achievements
                <FaTrophy className="text-yellow-500" />
              </h3>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {portfolioData.certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass-morphism rounded-xl p-6 text-center hover:glow-effect transition-all duration-300 tilt-effect group"
                  whileHover={{ y: -10, rotateY: 5 }}
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
                >
                  <motion.div
                    className="mb-4"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  >
                    <FaCertificate className="text-4xl text-yellow-500 mx-auto" />
                  </motion.div>
                  <h4 className="font-semibold text-primary mb-2 group-hover:gradient-text transition-all duration-300">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-1 flex items-center justify-center gap-2">
                    <FaStar className="text-yellow-400" />
                    {cert.issuer}
                  </p>
                  <motion.p 
                    className="text-sm font-medium bg-accent/20 px-3 py-1 rounded-full inline-block"
                    whileHover={{ scale: 1.1 }}
                  >
                    {cert.year}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold gradient-text flex items-center justify-center gap-3">
                <FaLanguage className="text-green-500" />
                Languages
                <FaLanguage className="text-green-500" />
              </h3>
            </motion.div>
            <div className="flex flex-wrap justify-center gap-6">
              {portfolioData.languages.map((lang, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass-morphism rounded-xl p-6 text-center min-w-[140px] hover:glow-effect transition-all duration-300 tilt-effect group"
                  whileHover={{ y: -10, scale: 1.05 }}
                  initial={{ opacity: 0, y: 50, rotate: 90 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    <FaLanguage className="text-3xl text-green-500 mx-auto mb-3" />
                  </motion.div>
                  <h4 className="font-semibold text-primary group-hover:gradient-text transition-all duration-300">
                    {lang.name}
                  </h4>
                  <motion.p 
                    className="text-sm text-muted-foreground bg-accent/20 px-3 py-1 rounded-full mt-2 inline-block"
                    whileHover={{ scale: 1.1 }}
                  >
                    {lang.level}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="glass-morphism rounded-2xl p-8 text-center gradient-animated"
          >
            <h3 className="text-2xl font-bold mb-8 text-white">Key Achievements</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "4+", label: "Years of Python Experience", icon: SiPython },
                { number: "6+", label: "Projects Completed", icon: FaCode },
                { number: "3", label: "Professional Internships", icon: FaTrophy },
                { number: "5+", label: "Certifications Earned", icon: FaCertificate }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="space-y-3"
                  whileHover={{ scale: 1.1, y: -5 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, type: "spring" }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: index }}
                  >
                    <stat.icon className="text-4xl text-white mx-auto mb-2" />
                  </motion.div>
                  <motion.div 
                    className="text-4xl font-bold text-white"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-white/80 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

