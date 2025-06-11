import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle, FaRocket, FaCode, FaUsers, FaLightbulb, FaTrophy, FaGraduationCap } from 'react-icons/fa';
import { HiSparkles, HiLightningBolt, HiOfficeBuilding } from 'react-icons/hi';
import { SiPython, SiReact, SiJavascript, SiMongodb, SiDocker, SiGit, SiTensorflow, SiFlutter } from 'react-icons/si';
import { portfolioData } from '../data/portfolio';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -100, scale: 0.8 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
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
    "MongoDB": SiMongodb,
    "Docker": SiDocker,
    "Git": SiGit,
    "TensorFlow": SiTensorflow,
    "Flutter": SiFlutter,
    "Machine Learning": FaLightbulb,
    "Data Analysis": FaCode,
    "Web Development": FaCode,
    "Mobile Development": FaCode
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 particle-bg opacity-30" />
      <motion.div
        className="absolute inset-0 gradient-animated opacity-5"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity }}
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
                animate={{ rotate: 360, scale: [1, 1.3, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                <FaBriefcase className="text-5xl text-blue-500" />
              </motion.div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text">Professional Experience</h2>
              <motion.div
                animate={{ rotate: -360, scale: [1, 1.3, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                <FaRocket className="text-5xl text-purple-500" />
              </motion.div>
            </motion.div>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              variants={itemVariants}
            >
              My journey through various internships and professional experiences in technology.
            </motion.p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <motion.div 
              className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"
              initial={{ height: 0 }}
              animate={{ height: isInView ? "100%" : 0 }}
              transition={{ duration: 2, delay: 0.5 }}
            />

            {/* Experience Items */}
            <div className="space-y-12">
              {portfolioData.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex items-start space-x-8"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.3, duration: 0.8 }}
                >
                  {/* Timeline Dot */}
                  <motion.div 
                    className="relative z-10 flex-shrink-0"
                    whileHover={{ scale: 1.3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="w-16 h-16 rounded-full glass-morphism flex items-center justify-center glow-effect"
                      animate={{ 
                        boxShadow: [
                          "0 0 20px rgba(59, 130, 246, 0.5)",
                          "0 0 40px rgba(147, 51, 234, 0.7)",
                          "0 0 20px rgba(59, 130, 246, 0.5)"
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      >
                        <HiOfficeBuilding className="text-2xl text-blue-500" />
                      </motion.div>
                    </motion.div>
                    
                    {/* Floating particles around dot */}
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-purple-500 rounded-full"
                        style={{
                          top: `${-10 + i * 8}px`,
                          left: `${-10 + i * 8}px`,
                        }}
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                          rotate: [0, 360]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.5
                        }}
                      />
                    ))}
                  </motion.div>

                  {/* Experience Card */}
                  <motion.div
                    className="flex-1 glass-morphism rounded-2xl p-8 hover:glow-effect transition-all duration-500 tilt-effect group relative overflow-hidden"
                    whileHover={{ y: -10, scale: 1.02 }}
                    initial={{ opacity: 0, rotateY: index % 2 === 0 ? -90 : 90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.8 }}
                  >
                    {/* Animated Background */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${index % 3 === 0 ? '#667eea, #764ba2' : index % 3 === 1 ? '#f093fb, #f5576c' : '#4facfe, #00f2fe'})`
                      }}
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ duration: 6, repeat: Infinity }}
                    />

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                        <div className="space-y-2">
                          <motion.h3 
                            className="text-2xl font-bold text-primary group-hover:gradient-text transition-all duration-300 flex items-center gap-3"
                            whileHover={{ x: 10 }}
                          >
                            <FaBriefcase className="text-blue-500" />
                            {exp.position}
                          </motion.h3>
                          <motion.p 
                            className="text-lg font-semibold text-foreground flex items-center gap-2"
                            whileHover={{ x: 5 }}
                          >
                            <HiOfficeBuilding className="text-purple-500" />
                            {exp.company}
                          </motion.p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 mt-4 lg:mt-0">
                          <motion.span 
                            className="bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                          >
                            <FaCalendarAlt className="text-green-500" />
                            {exp.period}
                          </motion.span>
                          <motion.span 
                            className="bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                          >
                            <FaMapMarkerAlt className="text-red-500" />
                            {exp.location}
                          </motion.span>
                        </div>
                      </div>

                      {/* Description */}
                      <motion.p 
                        className="text-muted-foreground mb-6 leading-relaxed"
                        variants={itemVariants}
                      >
                        {exp.description}
                      </motion.p>

                      {/* Achievements */}
                      <div className="space-y-3 mb-6">
                        <motion.h4 
                          className="font-semibold text-primary flex items-center gap-2"
                          whileHover={{ x: 5 }}
                        >
                          <FaTrophy className="text-yellow-500" />
                          Key Achievements:
                        </motion.h4>
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.div 
                            key={achIndex} 
                            className="flex items-start space-x-3 group/achievement"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: (index * 0.3) + (achIndex * 0.1) }}
                            whileHover={{ x: 10, scale: 1.02 }}
                          >
                            <motion.div
                              className="flex-shrink-0 mt-1"
                              whileHover={{ rotate: 360, scale: 1.3 }}
                              transition={{ duration: 0.5 }}
                            >
                              <FaCheckCircle className="w-4 h-4 text-green-500 group-hover/achievement:text-blue-500 transition-colors duration-300" />
                            </motion.div>
                            <span className="text-sm leading-relaxed group-hover/achievement:text-primary transition-colors duration-300">
                              {achievement}
                            </span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="space-y-3">
                        <motion.h4 
                          className="font-semibold text-primary flex items-center gap-2"
                          whileHover={{ x: 5 }}
                        >
                          <FaCode className="text-blue-500" />
                          Technologies Used:
                        </motion.h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => {
                            const TechIcon = techIcons[tech] || FaCode;
                            return (
                              <motion.span
                                key={techIndex}
                                className="px-3 py-2 bg-accent/30 text-accent-foreground rounded-full text-sm font-medium flex items-center gap-2 hover:bg-accent/50 transition-all duration-300 shimmer"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: (index * 0.3) + (techIndex * 0.05) }}
                              >
                                <TechIcon className="text-sm" />
                                {tech}
                              </motion.span>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Experience Type Badge */}
                    <motion.div 
                      className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <FaGraduationCap className="inline mr-1" />
                      INTERNSHIP
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills Gained Section */}
          <motion.div
            variants={itemVariants}
            className="glass-morphism rounded-2xl p-12 text-center relative overflow-hidden"
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 gradient-animated opacity-20"
              animate={{ scale: [1, 1.1, 1], rotate: [0, 360] }}
              transition={{ duration: 15, repeat: Infinity }}
            />
            
            <div className="relative z-10">
              <motion.div
                className="flex items-center justify-center gap-4 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <HiLightningBolt className="text-4xl text-yellow-500" />
                </motion.div>
                <h3 className="text-3xl font-bold gradient-text">Skills & Expertise Gained</h3>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <HiSparkles className="text-4xl text-blue-500" />
                </motion.div>
              </motion.div>
              
              <motion.p 
                className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg"
                variants={itemVariants}
              >
                Through these experiences, I've developed a comprehensive skill set in modern technologies and best practices.
              </motion.p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { skill: "Full-Stack Development", icon: FaCode, color: "text-blue-500" },
                  { skill: "Machine Learning", icon: FaLightbulb, color: "text-purple-500" },
                  { skill: "Team Collaboration", icon: FaUsers, color: "text-green-500" },
                  { skill: "Problem Solving", icon: FaTrophy, color: "text-yellow-500" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="space-y-3 p-6 glass-morphism rounded-xl hover:glow-effect transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -5 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1, type: "spring" }}
                  >
                    <motion.div
                      animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: index }}
                    >
                      <item.icon className={`text-4xl ${item.color} mx-auto`} />
                    </motion.div>
                    <h4 className="font-semibold text-primary">{item.skill}</h4>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

