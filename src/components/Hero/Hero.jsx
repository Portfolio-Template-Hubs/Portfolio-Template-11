import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="home" className="hero-section">
      {/* Pure black background - all animations removed */}
      
      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-text" variants={itemVariants}>
            <motion.div className="greeting-wrapper" variants={textVariants}>
              <motion.span 
                className="greeting"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.span 
                  className="wave"
                  animate={{ 
                    rotate: [0, 14, -8, 14, -4, 10, 0],
                    scale: [1, 1.2, 1, 1.1, 1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                >
                  👋
                </motion.span> 
                Hi there, I'm
              </motion.span>
            </motion.div>
            
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <motion.span 
                className="name-highlight"
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  repeatType: "reverse" 
                }}
              >
                Nikhil Sharma
              </motion.span>
              <motion.span 
                className="cursor"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              >
                |
              </motion.span>
            </motion.h1>
            
            <motion.div 
              className="role-container"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.p className="hero-subtitle">
                <motion.span 
                  className="role-text role-dev"
                  whileHover={{ 
                    scale: 1.05,
                    textShadow: "0 0 20px rgba(45, 212, 191, 0.5)"
                  }}
                >
                  Full Stack Developer
                </motion.span>
                <span className="separator"> & </span>
                <motion.span 
                  className="role-text role-designer"
                  whileHover={{ 
                    scale: 1.05,
                    textShadow: "0 0 20px rgba(167, 139, 250, 0.5)"
                  }}
                >
                  UI/UX Designer
                </motion.span>
              </motion.p>
            </motion.div>
            
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              I craft <motion.span 
                className="highlight highlight-1"
                whileHover={{ scale: 1.1 }}
              >
                beautiful
              </motion.span>, 
              <motion.span 
                className="highlight highlight-2"
                whileHover={{ scale: 1.1 }}
              > responsive</motion.span>, and 
              <motion.span 
                className="highlight highlight-3"
                whileHover={{ scale: 1.1 }}
              > user-friendly</motion.span> web applications 
              that solve real-world problems with clean and efficient code.
            </motion.p>

            {/* Achievement badges */}
            <motion.div 
              className="achievement-badges"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <div className="badge">
                <span className="badge-number">50+</span>
                <span className="badge-text">Projects</span>
              </div>
              <div className="badge">
                <span className="badge-number">3+</span>
                <span className="badge-text">Years Exp</span>
              </div>
              <div className="badge">
                <span className="badge-number">100%</span>
                <span className="badge-text">Satisfaction</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-actions" 
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.3 }}
          >
            <motion.a
              href="#projects"
              className="btn btn-primary"
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                boxShadow: "0 15px 40px rgba(45, 212, 191, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View My Work</span>
              <motion.span 
                className="btn-icon"
                whileHover={{ x: 8, rotate: -45 }}
                transition={{ duration: 0.2 }}
              >
                ↗
              </motion.span>
            </motion.a>
            
            <motion.a
              href="#contact"
              className="btn btn-outline"
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                backgroundColor: "rgba(255, 255, 255, 0.15)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              <span>Download CV</span>
            </motion.a>
          </motion.div>

          <motion.div 
            className="hero-social" 
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ 
                scale: 1.3, 
                rotate: 10, 
                y: -5,
                boxShadow: "0 10px 30px rgba(45, 212, 191, 0.3)"
              }}
              transition={{ duration: 0.2 }}
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ 
                scale: 1.3, 
                rotate: -10, 
                y: -5,
                boxShadow: "0 10px 30px rgba(167, 139, 250, 0.3)"
              }}
              transition={{ duration: 0.2 }}
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:your@email.com"
              className="social-link"
              whileHover={{ 
                scale: 1.3, 
                rotate: 10, 
                y: -5,
                boxShadow: "0 10px 30px rgba(249, 115, 22, 0.3)"
              }}
              transition={{ duration: 0.2 }}
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.7, rotateY: 60 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: "backOut" }}
        >
          <motion.div
            className="profile-image-container"
            whileHover={{ 
              scale: 1.08, 
              rotateY: 15,
              transition: { duration: 0.4 }
            }}
          >
            <div className="profile-image">
              <div className="image-placeholder">
                <motion.span
                  animate={{ 
                    textShadow: "0 0 20px rgba(255,255,255,0.5)"
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Your Photo
                </motion.span>
              </div>
              {/* Image overlay and glow removed */}
            </div>
            
            {/* Enhanced Status Indicator */}
            <motion.div 
              className="status-indicator"
              animate={{ 
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 20px rgba(45, 212, 191, 0.3)",
                  "0 0 30px rgba(45, 212, 191, 0.5)",
                  "0 0 20px rgba(45, 212, 191, 0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div 
                className="status-dot"
                animate={{ 
                  scale: [1, 1.4, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(45, 212, 191, 0.7)",
                    "0 0 0 10px rgba(45, 212, 191, 0)",
                    "0 0 0 0 rgba(45, 212, 191, 0.7)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.div>
              <span className="status-text">Available for work</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <motion.a
          href="#about"
          className="scroll-link"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          whileHover={{ scale: 1.1 }}
        >
          <motion.div
            animate={{ rotate: [0, 180, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <ChevronDown size={28} />
          </motion.div>
          <span className="scroll-text">Discover More</span>
        </motion.a>
      </motion.div>
      
      {/* All particles and light rays removed */}
    </section>
  )
}

export default Hero