import React from 'react'
import { motion } from 'framer-motion'
import { 
  Github, 
  Linkedin, 
  Mail, 
  Twitter, 
  Instagram,
  Heart,
  ArrowUp,
  Code,
  Palette,
  Coffee,
  Star,
  Sparkles
} from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      url: 'https://github.com/nikhilsharma',
      color: '#6B7280'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: 'https://linkedin.com/in/nikhilsharma',
      color: '#0077B5'
    },
    {
      name: 'Twitter',
      icon: <Twitter size={20} />,
      url: 'https://twitter.com/nikhilsharma',
      color: '#1DA1F2'
    },
    {
      name: 'Instagram',
      icon: <Instagram size={20} />,
      url: 'https://instagram.com/nikhilsharma',
      color: '#E4405F'
    },
    {
      name: 'Email',
      icon: <Mail size={20} />,
      url: 'mailto:nikhil@example.com',
      color: '#EF4444'
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  }

  return (
    <motion.footer 
      className="footer-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Animated Background Elements */}
      <div className="footer-background">
        <div className="footer-orb footer-orb-1"></div>
        <div className="footer-orb footer-orb-2"></div>
        <div className="footer-orb footer-orb-3"></div>
        <div className="floating-icons">
          <motion.div 
            className="floating-icon"
            animate={{ 
              y: [-10, 10, -10],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Code size={24} />
          </motion.div>
          <motion.div 
            className="floating-icon"
            animate={{ 
              y: [10, -10, 10],
              rotate: [360, 180, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            <Palette size={20} />
          </motion.div>
          <motion.div 
            className="floating-icon"
            animate={{ 
              y: [-5, 15, -5],
              rotate: [0, -180, -360]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
          >
            <Sparkles size={18} />
          </motion.div>
        </div>
      </div>

      <div className="container">
        {/* Main Footer Content */}
        <motion.div className="footer-content" variants={itemVariants}>
          <div className="footer-brand">
            <motion.h3 variants={itemVariants}>
              Nikhil Sharma
            </motion.h3>
            <motion.p variants={itemVariants}>
              Full Stack Developer & UI/UX Enthusiast
            </motion.p>
            <motion.div className="footer-tagline" variants={itemVariants}>
              <Coffee size={16} />
              <span>Crafting digital experiences with passion</span>
            </motion.div>
          </div>

          <div className="footer-links">
            <motion.div className="footer-section-links" variants={itemVariants}>
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </motion.div>

            <motion.div className="footer-section-links" variants={itemVariants}>
              <h4>Services</h4>
              <ul>
                <li><a href="#">Web Development</a></li>
                <li><a href="#">UI/UX Design</a></li>
                <li><a href="#">Mobile Apps</a></li>
                <li><a href="#">Consulting</a></li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Social Media Links */}
        <motion.div className="footer-social" variants={itemVariants}>
          <h4>Connect With Me</h4>
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                variants={iconVariants}
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 10,
                  transition: { type: "spring", stiffness: 300 }
                }}
                whileTap={{ scale: 0.9 }}
                style={{ '--social-color': social.color }}
                title={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div className="footer-divider" variants={itemVariants}></motion.div>

        {/* Bottom Section */}
        <motion.div className="footer-bottom" variants={itemVariants}>
          <div className="footer-copyright">
            <p>
              &copy; {currentYear} Nikhil Sharma. Made with{' '}
              <motion.span 
                className="heart"
                animate={{
                  scale: [1, 1.2, 1],
                  color: ['#ef4444', '#f97316', '#ef4444']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Heart size={14} fill="currentColor" />
              </motion.span>{' '}
              and lots of coffee.
            </p>
          </div>
          
          <motion.button 
            className="scroll-to-top"
            onClick={scrollToTop}
            whileHover={{ 
              scale: 1.1,
              backgroundColor: 'rgba(139, 92, 246, 0.8)'
            }}
            whileTap={{ scale: 0.9 }}
            variants={itemVariants}
          >
            <ArrowUp size={20} />
          </motion.button>
        </motion.div>

        {/* Stars decoration */}
        <div className="footer-stars">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="footer-star"
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5
              }}
            >
              <Star size={12} fill="currentColor" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
