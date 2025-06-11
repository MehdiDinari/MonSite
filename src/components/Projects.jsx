import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaEye, FaRocket, FaStar, FaHeart, FaLightbulb, FaTools, FaDatabase, FaMobile, FaDesktop, FaBrain } from 'react-icons/fa';
import { SiPython, SiReact, SiJavascript, SiTensorflow, SiFlutter, SiMongodb, SiNodedotjs, SiDjango } from 'react-icons/si';
import { HiSparkles, HiLightningBolt, HiCode } from 'react-icons/hi';
import { portfolioData } from '../data/portfolio';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [filter, setFilter] = useState('All');

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
    hidden: { opacity: 0, y: 80, scale: 0.8, rotateY: -90 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const techIcons = {
    "Python": SiPython,
    "React": SiReact,
    "JavaScript": SiJavascript,
    "TensorFlow": SiTensorflow,
    "Flutter": SiFlutter,
    "MongoDB": SiMongodb,
    "Node.js": SiNodedotjs,
    "Django": SiDjango,
    "Scikit-Learn": FaCode,
    "XGBoost": FaCode,
    "Keras": SiTensorflow,
    "SQLite": FaDatabase,
    "JWT": FaCode,
    "Tailwind": FaCode
  };

  const categoryIcons = {
    "Web Development": FaDesktop,
    "Machine Learning": FaBrain,
    "Mobile Development": FaMobile,
    "Data Science": FaDatabase,
    "Full Stack": FaCode
  };

  const categories = ['All', ...new Set(portfolioData.projects.map(project => project.category))];

  const filteredProjects = filter === 'All' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 particle-bg opacity-40" />
      <motion.div
        className="absolute inset-0 gradient-animated opacity-10"
        animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 25, repeat: Infinity }}
      />
      
      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <motion.div
              className="flex items-center justify-center gap-4 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: 360, scale: [1, 1.4, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                <FaRocket className="text-5xl text-blue-500" />
              </motion.div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text">Featured Projects</h2>
              <motion.div
                animate={{ rotate: -360, scale: [1, 1.4, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                <HiCode className="text-5xl text-purple-500" />
              </motion.div>
            </motion.div>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              variants={itemVariants}
            >
              A showcase of my latest work in web development, machine learning, and mobile applications.
            </motion.p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => {
              const CategoryIcon = categoryIcons[category] || FaCode;
              return (
                <motion.button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                    filter === category
                      ? 'btn-gradient text-primary-foreground shadow-lg'
                      : 'glass-morphism hover:glow-effect'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                >
                  <CategoryIcon className="text-lg" />
                  {category}
                </motion.button>
              );
            })}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                layout
                className="glass-morphism rounded-2xl overflow-hidden hover:glow-effect transition-all duration-500 tilt-effect group relative"
                whileHover={{ y: -15, scale: 1.02, rotateY: 5 }}
                initial={{ opacity: 0, scale: 0, rotateY: -180 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                {/* Project Image/Icon */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center overflow-hidden">
                  {/* Animated Background */}
                  <motion.div
                    className="absolute inset-0 gradient-animated opacity-30"
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                    transition={{ duration: 10, repeat: Infinity }}
                  />
                  
                  {/* Project Icon */}
                  <motion.div
                    className="relative z-10 text-8xl text-white/80"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    {project.category === 'Machine Learning' && <FaBrain />}
                    {project.category === 'Web Development' && <FaDesktop />}
                    {project.category === 'Mobile Development' && <FaMobile />}
                    {project.category === 'Data Science' && <FaDatabase />}
                    {project.category === 'Full Stack' && <FaCode />}
                  </motion.div>

                  {/* Floating Tech Icons */}
                  {project.technologies.slice(0, 3).map((tech, techIndex) => {
                    const TechIcon = techIcons[tech] || FaCode;
                    return (
                      <motion.div
                        key={techIndex}
                        className="absolute text-2xl text-white/60"
                        style={{
                          top: `${20 + techIndex * 25}%`,
                          right: `${10 + techIndex * 15}px`,
                        }}
                        animate={{
                          y: [0, -10, 0],
                          rotate: [0, 360],
                          scale: [0.8, 1, 0.8]
                        }}
                        transition={{
                          duration: 3 + techIndex,
                          repeat: Infinity,
                          delay: techIndex * 0.5
                        }}
                      >
                        <TechIcon />
                      </motion.div>
                    );
                  })}

                  {/* Overlay on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-200"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaGithub className="text-white text-xl" />
                      </motion.a>
                      <motion.button
                        className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-200"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaEye className="text-white text-xl" />
                      </motion.button>
                    </div>
                  </motion.div>

                  {/* Category Badge */}
                  <motion.div 
                    className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {project.category}
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <motion.h3 
                    className="text-xl font-bold text-primary group-hover:gradient-text transition-all duration-300 flex items-center gap-2"
                    whileHover={{ x: 10 }}
                  >
                    <FaLightbulb className="text-yellow-500" />
                    {project.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-muted-foreground text-sm leading-relaxed"
                    variants={itemVariants}
                  >
                    {project.description}
                  </motion.p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => {
                      const TechIcon = techIcons[tech] || FaCode;
                      return (
                        <motion.span
                          key={techIndex}
                          className="px-3 py-1 bg-accent/30 text-accent-foreground rounded-full text-xs font-medium flex items-center gap-1 hover:bg-accent/50 transition-all duration-300 shimmer"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: (index * 0.2) + (techIndex * 0.05) }}
                        >
                          <TechIcon className="text-xs" />
                          {tech}
                        </motion.span>
                      );
                    })}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-accent/20 hover:bg-accent/40 text-accent-foreground px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub />
                      View Code
                    </motion.a>
                    <motion.button
                      className="px-4 py-2 btn-gradient text-primary-foreground rounded-lg text-sm font-medium flex items-center gap-2"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaEye />
                      Learn More
                    </motion.button>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${index % 3 === 0 ? '#667eea20, #764ba220' : index % 3 === 1 ? '#f093fb20, #f5576c20' : '#4facfe20, #00f2fe20'})`,
                    border: '2px solid transparent',
                    backgroundClip: 'padding-box'
                  }}
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* GitHub CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-8 glass-morphism rounded-2xl p-12 relative overflow-hidden"
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 gradient-animated opacity-20"
              animate={{ scale: [1, 1.1, 1], rotate: [0, 360] }}
              transition={{ duration: 12, repeat: Infinity }}
            />
            
            <div className="relative z-10">
              <motion.div
                className="flex items-center justify-center gap-4 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <FaGithub className="text-4xl text-gray-600" />
                </motion.div>
                <h3 className="text-3xl font-bold gradient-text">Want to see more?</h3>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaHeart className="text-4xl text-red-500" />
                </motion.div>
              </motion.div>
              
              <motion.p 
                className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg"
                variants={itemVariants}
              >
                Check out my GitHub profile for more projects, contributions, and code samples.
              </motion.p>
              
              <motion.a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 btn-gradient text-primary-foreground px-10 py-4 rounded-xl font-medium text-lg shadow-2xl relative overflow-hidden group"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <FaGithub className="text-xl" />
                  </motion.div>
                  Visit GitHub Profile
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FaExternalLinkAlt />
                  </motion.div>
                </span>
                
                {/* Button hover effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gray-600 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

