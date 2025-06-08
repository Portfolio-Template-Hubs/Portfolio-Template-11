import React from 'react'
import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="about" id="about">
      <motion.div 
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          About Me
        </motion.h2>
        
        <div className="about-content">
          <motion.div className="about-text" variants={itemVariants}>
            <motion.p variants={itemVariants}>
              I'm a passionate full-stack developer with a love for creating 
              innovative digital solutions. With expertise in modern web technologies, 
              I bring ideas to life through clean, efficient code and stunning user experiences.
            </motion.p>
            
            <motion.p variants={itemVariants}>
              My journey in tech started with curiosity and has evolved into a 
              career focused on continuous learning and problem-solving. I believe 
              in the power of technology to transform businesses and improve lives.
            </motion.p>
            
            <motion.div className="about-highlights" variants={itemVariants}>
              <div className="highlight">
                <h4>🎯 Mission</h4>
                <p>To create meaningful digital experiences that make a difference</p>
              </div>
              <div className="highlight">
                <h4>💡 Vision</h4>
                <p>To be at the forefront of technological innovation</p>
              </div>
              <div className="highlight">
                <h4>⚡ Passion</h4>
                <p>Turning complex problems into elegant solutions</p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div className="about-image" variants={itemVariants}>
            <div className="image-container">
              <motion.div 
                className="floating-card card-1"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                💻
              </motion.div>
              <motion.div 
                className="floating-card card-2"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -2, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                🚀
              </motion.div>
              <motion.div 
                className="floating-card card-3"
                animate={{ 
                  y: [0, -5, 0],
                  rotate: [0, 1, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              >
                ✨
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About

