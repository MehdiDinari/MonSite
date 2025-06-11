import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaUser, FaSubject, FaComment, FaGithub, FaLinkedin, FaHeart, FaRocket, FaCheckCircle, FaSpinner } from 'react-icons/fa';
import { HiSparkles, HiLightningBolt, HiMail } from 'react-icons/hi';
import { portfolioData } from '../data/portfolio';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 particle-bg opacity-50" />
      <motion.div
        className="absolute inset-0 gradient-animated opacity-15"
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
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <HiMail className="text-5xl text-blue-500" />
              </motion.div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text">Let's Connect</h2>
              <motion.div
                animate={{ rotate: -360, scale: [1, 1.3, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <FaRocket className="text-5xl text-purple-500" />
              </motion.div>
            </motion.div>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              variants={itemVariants}
            >
              I'm always interested in new opportunities and exciting projects. Whether you have a question, want to collaborate, or just want to say hello, I'd love to hear from you.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <motion.div
                className="glass-morphism rounded-2xl p-8 space-y-6 hover:glow-effect transition-all duration-500"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <motion.h3 
                  className="text-2xl font-bold gradient-text flex items-center gap-3"
                  whileHover={{ x: 10 }}
                >
                  <HiSparkles className="text-yellow-500" />
                  Get in Touch
                </motion.h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ready to bring your ideas to life? Let's discuss how I can help you create something amazing together.
                </p>

                {/* Contact Details */}
                <div className="space-y-4">
                  {[
                    { 
                      icon: FaEnvelope, 
                      label: 'Email', 
                      value: portfolioData.personal.email,
                      href: `mailto:${portfolioData.personal.email}`,
                      color: 'text-blue-500'
                    },
                    { 
                      icon: FaPhone, 
                      label: 'Phone', 
                      value: portfolioData.personal.phone,
                      href: `tel:${portfolioData.personal.phone}`,
                      color: 'text-green-500'
                    },
                    { 
                      icon: FaMapMarkerAlt, 
                      label: 'Location', 
                      value: portfolioData.personal.location,
                      color: 'text-red-500'
                    }
                  ].map((contact, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-4 p-4 rounded-xl glass-morphism hover:glow-effect transition-all duration-300 group"
                      whileHover={{ x: 10, scale: 1.02 }}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <motion.div
                        className={`p-3 rounded-lg bg-accent/20 ${contact.color}`}
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                      >
                        <contact.icon className="text-xl" />
                      </motion.div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground font-medium">{contact.label}</p>
                        {contact.href ? (
                          <motion.a
                            href={contact.href}
                            className="text-primary hover:gradient-text transition-all duration-300 font-medium"
                            whileHover={{ scale: 1.05 }}
                          >
                            {contact.value}
                          </motion.a>
                        ) : (
                          <p className="text-foreground font-medium">{contact.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="glass-morphism rounded-2xl p-8 hover:glow-effect transition-all duration-500"
                whileHover={{ scale: 1.02, y: -5 }}
                variants={itemVariants}
              >
                <motion.h3 
                  className="text-xl font-bold gradient-text mb-6 flex items-center gap-3"
                  whileHover={{ x: 10 }}
                >
                  <FaHeart className="text-red-500" />
                  Follow Me
                </motion.h3>
                <div className="flex space-x-4">
                  {[
                    { 
                      icon: FaGithub, 
                      href: portfolioData.personal.github, 
                      label: "GitHub",
                      color: "hover:text-gray-600",
                      bg: "hover:bg-gray-100 dark:hover:bg-gray-800"
                    },
                    { 
                      icon: FaLinkedin, 
                      href: portfolioData.personal.linkedin, 
                      label: "LinkedIn",
                      color: "hover:text-blue-600",
                      bg: "hover:bg-blue-100 dark:hover:bg-blue-900"
                    },
                    { 
                      icon: FaEnvelope, 
                      href: `mailto:${portfolioData.personal.email}`, 
                      label: "Email",
                      color: "hover:text-red-500",
                      bg: "hover:bg-red-100 dark:hover:bg-red-900"
                    }
                  ].map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-xl glass-morphism ${social.color} ${social.bg} transition-all duration-300 group flex-1 text-center`}
                      aria-label={social.label}
                      whileHover={{ scale: 1.1, y: -5, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                    >
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                      >
                        <social.icon className="text-2xl mx-auto mb-2" />
                      </motion.div>
                      <span className="text-sm font-medium">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <motion.div
                className="glass-morphism rounded-2xl p-8 hover:glow-effect transition-all duration-500 relative overflow-hidden"
                whileHover={{ scale: 1.01, y: -5 }}
              >
                {/* Animated background for form */}
                <motion.div
                  className="absolute inset-0 gradient-animated opacity-5"
                  animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
                  transition={{ duration: 15, repeat: Infinity }}
                />

                <div className="relative z-10">
                  <motion.h3 
                    className="text-2xl font-bold gradient-text mb-6 flex items-center gap-3"
                    whileHover={{ x: 10 }}
                  >
                    <FaPaperPlane className="text-blue-500" />
                    Send a Message
                  </motion.h3>

                  {/* Success Message */}
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: -20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center gap-3"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1 }}
                      >
                        <FaCheckCircle className="text-green-500 text-xl" />
                      </motion.div>
                      <span className="text-green-600 dark:text-green-400 font-medium">
                        Message sent successfully! I'll get back to you soon.
                      </span>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      {/* Name Field */}
                      <motion.div
                        className="space-y-2"
                        whileHover={{ scale: 1.02 }}
                      >
                        <label className="text-sm font-medium text-foreground flex items-center gap-2">
                          <FaUser className="text-blue-500" />
                          Name *
                        </label>
                        <motion.input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Your name"
                          className="w-full px-4 py-3 rounded-xl bg-accent/20 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none"
                          whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
                        />
                      </motion.div>

                      {/* Email Field */}
                      <motion.div
                        className="space-y-2"
                        whileHover={{ scale: 1.02 }}
                      >
                        <label className="text-sm font-medium text-foreground flex items-center gap-2">
                          <FaEnvelope className="text-green-500" />
                          Email *
                        </label>
                        <motion.input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="your.email@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-accent/20 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none"
                          whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(34, 197, 94, 0.3)" }}
                        />
                      </motion.div>
                    </div>

                    {/* Subject Field */}
                    <motion.div
                      className="space-y-2"
                      whileHover={{ scale: 1.01 }}
                    >
                      <label className="text-sm font-medium text-foreground flex items-center gap-2">
                        <FaSubject className="text-purple-500" />
                        Subject *
                      </label>
                      <motion.input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="What's this about?"
                        className="w-full px-4 py-3 rounded-xl bg-accent/20 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none"
                        whileFocus={{ scale: 1.01, boxShadow: "0 0 20px rgba(147, 51, 234, 0.3)" }}
                      />
                    </motion.div>

                    {/* Message Field */}
                    <motion.div
                      className="space-y-2"
                      whileHover={{ scale: 1.01 }}
                    >
                      <label className="text-sm font-medium text-foreground flex items-center gap-2">
                        <FaComment className="text-orange-500" />
                        Message *
                      </label>
                      <motion.textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        placeholder="Tell me about your project..."
                        className="w-full px-4 py-3 rounded-xl bg-accent/20 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none resize-none"
                        whileFocus={{ scale: 1.01, boxShadow: "0 0 20px rgba(249, 115, 22, 0.3)" }}
                      />
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-gradient text-primary-foreground px-8 py-4 rounded-xl font-medium text-lg shadow-2xl relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            >
                              <FaSpinner className="text-xl" />
                            </motion.div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <motion.div
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <FaPaperPlane className="text-xl" />
                            </motion.div>
                            Send Message
                            <motion.div
                              animate={{ rotate: [0, 360] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            >
                              <HiSparkles className="text-xl" />
                            </motion.div>
                          </>
                        )}
                      </span>
                      
                      {/* Button hover effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.1 }}
                      />
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

