import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaLaptopCode, FaRobot, FaMobileAlt, FaCheckCircle, FaArrowRight, FaCode, FaDatabase, FaChartLine, FaEye, FaBrain, FaLanguage, FaCloud, FaStore, FaShieldAlt } from 'react-icons/fa';
import { SiReact, SiPython, SiTensorflow, SiFlutter, SiAndroid, SiApple } from 'react-icons/si';
import { HiSparkles, HiLightningBolt, HiCog } from 'react-icons/hi';
import { portfolioData } from '../data/portfolio';

const Services = () => {
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
    hidden: { opacity: 0, y: 80, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const serviceIcons = {
    "💻": { component: FaLaptopCode, color: "text-blue-500" },
    "🤖": { component: FaRobot, color: "text-purple-500" },
    "📱": { component: FaMobileAlt, color: "text-green-500" }
  };

  const featureIcons = {
    "Custom Web Applications": FaCode,
    "API Development": FaDatabase,
    "Database Design": FaDatabase,
    "Responsive Design": FaLaptopCode,
    "Performance Optimization": HiLightningBolt,
    "Predictive Analytics": FaChartLine,
    "Computer Vision": FaEye,
    "Natural Language Processing": FaLanguage,
    "Data Visualization": FaChartLine,
    "Model Deployment": FaCloud,
    "Cross-Platform Apps": FaMobileAlt,
    "Native Android Development": SiAndroid,
    "UI/UX Design": HiCog,
    "App Store Deployment": FaStore,
    "Custom StorefrontsPayment": FaShieldAlt,
    "Payment Integration": FaShieldAlt,
    "Product & Order Management": FaDatabase,
    "Mobile-Optimized Checkout": FaMobileAlt,
    "Analytics & Reporting": FaChartLine,
    "Cross-Platform Codebase": FaCode,
    "Push Notifications": HiSparkles,
    "App Store Submission": FaStore,
    "Offline Support": FaDatabase,
    "Custom UI Components": HiCog,
    "User Authentication": FaShieldAlt,
    "API Integration": FaDatabase,
    "Admin Dashboards": FaChartLine,
    "Cloud Deployment": FaCloud,
    "Subscription Billing": FaShieldAlt
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-animated opacity-10" />
      <div className="absolute inset-0 particle-bg" />
      
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
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <HiCog className="text-5xl text-blue-500" />
              </motion.div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text">My Services</h2>
              <motion.div
                animate={{ rotate: -360, scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <HiSparkles className="text-5xl text-purple-500" />
              </motion.div>
            </motion.div>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              variants={itemVariants}
            >
              What I can do for you and your business with cutting-edge technology.
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {portfolioData.services.map((service, index) => {
              const iconInfo = serviceIcons[service.icon] || { component: FaCode, color: "text-gray-500" };
              const IconComponent = iconInfo.component;
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass-morphism rounded-2xl p-8 hover:glow-effect transition-all duration-500 tilt-effect group relative overflow-hidden"
                  whileHover={{ y: -15, scale: 1.02 }}
                  initial={{ opacity: 0, rotateY: -90, z: -100 }}
                  animate={{ opacity: 1, rotateY: 0, z: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                >
                  {/* Animated Background Gradient */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${index === 0 ? '#667eea, #764ba2' : index === 1 ? '#f093fb, #f5576c' : '#4facfe, #00f2fe'})`
                    }}
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 6, repeat: Infinity }}
                  />

                  {/* Service Icon */}
                  <motion.div 
                    className="relative z-10 mb-6"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className={`text-7xl ${iconInfo.color} relative`}>
                      <motion.div
                        animate={{ 
                          boxShadow: [
                            "0 0 20px rgba(59, 130, 246, 0.3)",
                            "0 0 40px rgba(147, 51, 234, 0.5)",
                            "0 0 20px rgba(59, 130, 246, 0.3)"
                          ]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="inline-block p-4 rounded-2xl bg-accent/10"
                      >
                        <IconComponent />
                      </motion.div>
                      
                      {/* Floating particles around icon */}
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 bg-blue-500 rounded-full"
                          style={{
                            top: `${20 + i * 15}%`,
                            left: `${80 + i * 10}%`,
                          }}
                          animate={{
                            y: [0, -20, 0],
                            opacity: [0.3, 1, 0.3],
                            scale: [0.5, 1, 0.5]
                          }}
                          transition={{
                            duration: 2 + i * 0.5,
                            repeat: Infinity,
                            delay: i * 0.3
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>

                  {/* Service Title */}
                  <motion.h3 
                    className="text-2xl font-bold mb-4 text-primary group-hover:gradient-text transition-all duration-300 relative z-10"
                    whileHover={{ x: 10 }}
                  >
                    {service.title}
                  </motion.h3>

                  {/* Service Description */}
                  <motion.p 
                    className="text-muted-foreground mb-6 leading-relaxed relative z-10"
                    variants={itemVariants}
                  >
                    {service.description}
                  </motion.p>

                  {/* Features List */}
                  <div className="space-y-3 relative z-10">
                    {service.features.map((feature, featureIndex) => {
                      const FeatureIcon = featureIcons[feature] || FaCheckCircle;
                      return (
                        <motion.div 
                          key={featureIndex} 
                          className="flex items-center space-x-3 group/feature"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (index * 0.2) + (featureIndex * 0.1) }}
                          whileHover={{ x: 10, scale: 1.02 }}
                        >
                          <motion.div
                            className="flex-shrink-0"
                            whileHover={{ rotate: 360, scale: 1.2 }}
                            transition={{ duration: 0.5 }}
                          >
                            <FeatureIcon className="w-4 h-4 text-green-500 group-hover/feature:text-blue-500 transition-colors duration-300" />
                          </motion.div>
                          <span className="text-sm font-medium group-hover/feature:text-primary transition-colors duration-300">
                            {feature}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Hover Effect Border */}
                  <motion.div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, ${index === 0 ? '#667eea20, #764ba220' : index === 1 ? '#f093fb20, #f5576c20' : '#4facfe20, #00f2fe20'})`,
                      border: '2px solid transparent',
                      backgroundClip: 'padding-box'
                    }}
                    animate={{
                      scale: [1, 1.02, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* Tech Stack Icons */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-30 group-hover:opacity-70 transition-opacity duration-300">
                    {index === 0 && (
                      <>
                        <SiReact className="text-blue-500 text-xl" />
                        <FaCode className="text-green-500 text-xl" />
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <SiPython className="text-yellow-500 text-xl" />
                        <SiTensorflow className="text-orange-500 text-xl" />
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <SiFlutter className="text-blue-400 text-xl" />
                        <SiAndroid className="text-green-500 text-xl" />
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-8 glass-morphism rounded-2xl p-12 relative overflow-hidden"
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 gradient-animated opacity-20"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 8, repeat: Infinity }}
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
                  <HiSparkles className="text-4xl text-yellow-500" />
                </motion.div>
                <h3 className="text-3xl font-bold gradient-text">Ready to start your project?</h3>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <HiLightningBolt className="text-4xl text-blue-500" />
                </motion.div>
              </motion.div>
              
              <motion.p 
                className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg"
                variants={itemVariants}
              >
                Let's discuss how I can help bring your ideas to life with cutting-edge technology and innovative solutions.
              </motion.p>
              
              <motion.button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn-gradient text-primary-foreground px-10 py-4 rounded-xl font-medium text-lg shadow-2xl relative overflow-hidden group"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  <HiSparkles className="text-xl" />
                  Let's Work Together
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FaArrowRight />
                  </motion.div>
                </span>
                
                {/* Button hover effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

