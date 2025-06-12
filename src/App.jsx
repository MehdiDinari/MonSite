import './App.css'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaCode, FaRocket, FaHeart, FaMapMarkerAlt, FaPhone, FaBriefcase, FaGraduationCap, FaLanguage, FaCertificate, FaLaptopCode, FaRobot, FaMobileAlt, FaCheckCircle, FaPaperPlane, FaUser, FaBook, FaComments } from 'react-icons/fa'
import { HiSparkles, HiLightningBolt, HiMail, HiCog, HiAcademicCap, HiCode, HiOfficeBuilding } from 'react-icons/hi'
import { SiPython, SiReact, SiJavascript, SiTensorflow, SiFlutter, SiMongodb, SiNodedotjs, SiDjango } from 'react-icons/si'

// Portfolio Data
const portfolioData = {
  personal: {
    name: "Mehdi Dinari",
    title: "Computer Science Engineering Student",
    subtitle: "Passionate about creating innovative solutions through technology",
    email: "mehdi.dinari@usmba.ac.ma",
    phone: "+212770687259",
    location: "Morocco",
    github: "https://github.com/MehdiDinari",
    linkedin: "https://www.linkedin.com/in/mehdi-dinari-b0487a2a9/"
  },
  about: {
    description: "I'm a passionate Computer Science Engineering student with expertise in full-stack development, machine learning, and mobile applications. I love turning complex problems into simple, beautiful solutions."
  },
  skills: {
    "Programming Languages": ["Python", "JavaScript", "Java", "C++"],
    "Frontend Development": ["React", "HTML/CSS", "Tailwind CSS", "Bootstrap"],
    "Backend Development": ["Node.js", "Django", "Flask", "Express"],
    "Machine Learning": ["TensorFlow", "Scikit-Learn", "Pandas", "NumPy"],
    "Mobile Development": ["Flutter", "React Native", "Android"],
    "Databases": ["MongoDB", "MySQL", "PostgreSQL", "SQLite"],
    "Tools & DevOps": ["Git", "Docker", "AWS", "Linux"]
  },
  education: [
    {
      degree: "Engineering in Computer Science",
      institution: "Université Sidi Mohamed Ben Abdellah",
      location: "Fès, Morocco",
      period: "2022 - Present"
    }
  ],
  certifications: [
    { title: "Python Programming", issuer: "Coursera", year: "2023" },
    { title: "Machine Learning", issuer: "edX", year: "2023" },
    { title: "React Development", issuer: "Udemy", year: "2024" },
    { title: "AWS Cloud Practitioner", issuer: "Amazon", year: "2024" }
  ],
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "French", level: "Fluent" },
    { name: "English", level: "Advanced" }
  ],
  services: [
    {
      icon: "💻",
      title: "Full-Stack Development",
      description: "Complete web applications from frontend to backend with modern technologies.",
      features: ["Custom Web Applications", "API Development", "Database Design", "Responsive Design"]
    },
    {
      icon: "🤖",
      title: "Machine Learning & AI",
      description: "Intelligent solutions using machine learning and artificial intelligence.",
      features: ["Predictive Analytics", "Computer Vision", "Natural Language Processing", "Data Visualization"]
    },
    {
      icon: "📱",
      title: "Mobile Development",
      description: "Cross-platform mobile applications for iOS and Android.",
      features: ["Cross-Platform Apps", "Native Performance", "UI/UX Design", "App Store Deployment"]
    }
  ],
  experience: [
    {
      position: "Full-Stack Developer Intern",
      company: "Tech Solutions",
      location: "Fès, Morocco",
      period: "Summer 2024",
      description: "Developed web applications using React and Node.js, implemented RESTful APIs, and worked with MongoDB databases.",
      achievements: [
        "Built a complete e-commerce platform with payment integration",
        "Improved application performance by 40% through optimization",
        "Collaborated with a team of 5 developers using Agile methodology"
      ],
      technologies: ["React", "Node.js", "MongoDB", "JavaScript"]
    },
    {
      position: "Machine Learning Intern",
      company: "AI Research Lab",
      location: "Rabat, Morocco",
      period: "Summer 2023",
      description: "Worked on machine learning projects focusing on computer vision and natural language processing.",
      achievements: [
        "Developed an image classification model with 95% accuracy",
        "Created a sentiment analysis tool for social media data",
        "Published research findings in a conference paper"
      ],
      technologies: ["Python", "TensorFlow", "Machine Learning", "Data Analysis"]
    }
  ],
  projects: [
    {
      title: "Vocal Emotion Detector",
      description: "Python-based application that records audio clips and detects emotional states using deep learning.",
      category: "Machine Learning",
      technologies: ["Python", "Keras", "TensorFlow"],
      github: "https://github.com/MehdiDinari/vocal-emotion-detector"
    },
    {
      title: "Movie Advisor",
      description: "Movie recommendation system using machine learning algorithms to suggest personalized content.",
      category: "Machine Learning",
      technologies: ["Python", "Scikit-Learn", "XGBoost"],
      github: "https://github.com/MehdiDinari/movie-advisor"
    },
    {
      title: "Spotify Clone",
      description: "Music streaming application with React frontend and Django backend, featuring user authentication and music playback.",
      category: "Full Stack",
      technologies: ["Django", "React", "Tailwind"],
      github: "https://github.com/MehdiDinari/spotify-clone"
    }
  ]
}

// Theme Hook
function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light'
    }
    return 'light'
  })

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return { theme, toggleTheme }
}

// Header Component
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b border-border/50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.1 }}
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

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              onClick={() => scrollToSection('#contact')}
              className="btn-gradient text-primary-foreground px-4 py-2 rounded-lg font-medium glow-effect"
              whileHover={{ scale: 1.05 }}
            >
              Get In Touch
            </motion.button>
            
            <motion.a
              href="/cv.pdf"
              download
              className="border border-border px-4 py-2 rounded-lg hover:bg-accent transition-all duration-200 font-medium flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <FaDownload size={16} />
              Download CV
            </motion.a>

            <div className="flex items-center space-x-2">
              {[
                { icon: FaGithub, href: portfolioData.personal.github },
                { icon: FaLinkedin, href: portfolioData.personal.linkedin },
                { icon: FaEnvelope, href: `mailto:${portfolioData.personal.email}` }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-accent transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>

            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-accent transition-all duration-200"
              whileHover={{ scale: 1.1 }}
            >
              {theme === 'dark' ? <HiLightningBolt size={20} /> : <HiSparkles size={20} />}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

// Hero Component
function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const fullText = portfolioData.personal.name

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 150)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 particle-bg relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                
                <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  {portfolioData.personal.subtitle}
                </p>
              </motion.div>
            </div>

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
                  whileHover={{ scale: 1.05 }}
                >
                  <item.icon className={`${item.color} text-lg`} />
                  <span className="text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                onClick={() => scrollToSection('#contact')}
                className="btn-gradient text-primary-foreground px-8 py-4 rounded-xl font-medium text-lg shadow-2xl"
                whileHover={{ scale: 1.05 }}
              >
                <span className="flex items-center justify-center gap-3">
                  <HiSparkles className="text-xl" />
                  Get In Touch
                </span>
              </motion.button>
              
              <motion.a
                href="/cv.pdf"
                download
                className="border-2 border-border px-8 py-4 rounded-xl font-medium text-lg flex items-center justify-center gap-3 glass-morphism hover:glow-effect transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <FaDownload className="text-xl" />
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full gradient-animated"
                style={{ padding: '4px' }}
              >
                <div className="w-full h-full rounded-full bg-background"></div>
              </motion.div>
              
              <motion.div
                className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden glass-morphism"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-full h-full gradient-animated flex items-center justify-center">
                  <span className="text-8xl font-bold text-white/90">
                    {portfolioData.personal.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// About Component
function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 particle-bg opacity-50" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-20"
        >
          <div className="text-center space-y-6">
            <motion.div className="flex items-center justify-center gap-3 mb-4">
              <HiAcademicCap className="text-4xl text-blue-500" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text">About Me</h2>
              <HiSparkles className="text-4xl text-purple-500" />
            </motion.div>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {portfolioData.about.description}
            </p>
          </div>

          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold gradient-text">Technical Skills</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Object.entries(portfolioData.skills).map(([category, skills], index) => (
                <motion.div
                  key={category}
                  className="glass-morphism rounded-xl p-6 hover:glow-effect transition-all duration-300"
                  whileHover={{ y: -10 }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-accent/20 text-blue-500">
                      <FaCode className="text-xl" />
                    </div>
                    <h4 className="text-lg font-semibold text-primary">{category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-2 bg-accent/30 text-accent-foreground rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Services Component
function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 gradient-animated opacity-10" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="text-center space-y-6">
            <motion.div className="flex items-center justify-center gap-4 mb-6">
              <HiCog className="text-5xl text-blue-500" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text">My Services</h2>
              <HiSparkles className="text-5xl text-purple-500" />
            </motion.div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              What I can do for you and your business with cutting-edge technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {portfolioData.services.map((service, index) => (
              <motion.div
                key={index}
                className="glass-morphism rounded-2xl p-8 hover:glow-effect transition-all duration-500 tilt-effect group"
                whileHover={{ y: -15 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-7xl mb-6">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4 text-primary group-hover:gradient-text transition-all duration-300">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <FaCheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Experience Component
function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 particle-bg opacity-30" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="text-center space-y-6">
            <motion.div className="flex items-center justify-center gap-4 mb-6">
              <FaBriefcase className="text-5xl text-blue-500" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text">Professional Experience</h2>
              <FaRocket className="text-5xl text-purple-500" />
            </motion.div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My journey through various internships and professional experiences in technology.
            </p>
          </div>

          <div className="space-y-12">
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={index}
                className="glass-morphism rounded-2xl p-8 hover:glow-effect transition-all duration-500"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-primary flex items-center gap-3">
                      <FaBriefcase className="text-blue-500" />
                      {exp.position}
                    </h3>
                    <p className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <HiOfficeBuilding className="text-purple-500" />
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 mt-4 lg:mt-0">
                    <span className="bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
                      {exp.period}
                    </span>
                    <span className="bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-primary">Key Achievements:</h4>
                  {exp.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start space-x-3">
                      <FaCheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <span className="text-sm leading-relaxed">{achievement}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-2 bg-accent/30 text-accent-foreground rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Projects Component
function Projects() {
  const [filter, setFilter] = useState('All')
  const categories = ['All', ...new Set(portfolioData.projects.map(project => project.category))]
  const filteredProjects = filter === 'All' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(project => project.category === filter)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 particle-bg opacity-40" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="text-center space-y-6">
            <motion.div className="flex items-center justify-center gap-4 mb-6">
              <FaRocket className="text-5xl text-blue-500" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text">Featured Projects</h2>
              <HiCode className="text-5xl text-purple-500" />
            </motion.div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my latest work in web development, machine learning, and mobile applications.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  filter === category
                    ? 'btn-gradient text-primary-foreground shadow-lg'
                    : 'glass-morphism hover:glow-effect'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="glass-morphism rounded-2xl overflow-hidden hover:glow-effect transition-all duration-500"
                whileHover={{ y: -15 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-8xl text-white/80">
                    {project.category === 'Machine Learning' && '🤖'}
                    {project.category === 'Full Stack' && '💻'}
                    {project.category === 'Mobile Development' && '📱'}
                  </div>
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {project.category}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-accent/30 text-accent-foreground rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-accent/20 hover:bg-accent/40 text-accent-foreground px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      <FaGithub />
                      View Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Contact Component
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 particle-bg opacity-50" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="text-center space-y-6">
            <motion.div className="flex items-center justify-center gap-4 mb-6">
              <HiMail className="text-5xl text-blue-500" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text">Let's Connect</h2>
              <FaRocket className="text-5xl text-purple-500" />
            </motion.div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm always interested in new opportunities and exciting projects. Whether you have a question, want to collaborate, or just want to say hello, I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="glass-morphism rounded-2xl p-8 space-y-6 hover:glow-effect transition-all duration-500">
                <h3 className="text-2xl font-bold gradient-text">Get in Touch</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ready to bring your ideas to life? Let's discuss how I can help you create something amazing together.
                </p>

                <div className="space-y-4">
                  {[
                    { icon: FaEnvelope, label: 'Email', value: portfolioData.personal.email, href: `mailto:${portfolioData.personal.email}` },
                    { icon: FaPhone, label: 'Phone', value: portfolioData.personal.phone, href: `tel:${portfolioData.personal.phone}` },
                    { icon: FaMapMarkerAlt, label: 'Location', value: portfolioData.personal.location }
                  ].map((contact, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 rounded-xl glass-morphism">
                      <div className="p-3 rounded-lg bg-accent/20 text-blue-500">
                        <contact.icon className="text-xl" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground font-medium">{contact.label}</p>
                        {contact.href ? (
                          <a href={contact.href} className="text-primary hover:gradient-text transition-all duration-300 font-medium">
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{contact.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-morphism rounded-2xl p-8 hover:glow-effect transition-all duration-500">
                <h3 className="text-xl font-bold gradient-text mb-6">Follow Me</h3>
                <div className="flex space-x-4">
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
                      className="p-4 rounded-xl glass-morphism hover:glow-effect transition-all duration-300 flex-1 text-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <social.icon className="text-2xl mx-auto mb-2" />
                      <span className="text-sm font-medium">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="glass-morphism rounded-2xl p-8 hover:glow-effect transition-all duration-500">
                <h3 className="text-2xl font-bold gradient-text mb-6">Send a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl bg-accent/20 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-accent/20 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="What's this about?"
                      className="w-full px-4 py-3 rounded-xl bg-accent/20 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3 rounded-xl bg-accent/20 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full btn-gradient text-primary-foreground px-8 py-4 rounded-xl font-medium text-lg shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center justify-center gap-3">
                      <FaPaperPlane className="text-xl" />
                      Send Message
                    </span>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Footer Component
function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border/50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">{portfolioData.personal.name}</h3>
            <p className="text-muted-foreground">{portfolioData.personal.title}</p>
            <p className="text-sm text-muted-foreground">
              passionate about creating innovative solutions through technology.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {['About', 'Services', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.querySelector(`#${item.toLowerCase()}`)
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="text-left text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 {portfolioData.personal.name}. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            {[
              { icon: FaGithub, href: portfolioData.personal.github },
              { icon: FaLinkedin, href: portfolioData.personal.linkedin },
              { icon: FaEnvelope, href: `mailto:${portfolioData.personal.email}` }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

