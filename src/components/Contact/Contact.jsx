import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Twitter,
  MessageCircle,
  Clock,
  CheckCircle,
  AlertCircle,
  Sparkles,
  Heart,
  Coffee,
  Zap,
  Star,
  Globe
} from 'lucide-react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 3000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      content: 'nikhil@example.com',
      link: 'mailto:nikhil@example.com',
      color: '#ef4444'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      color: '#10b981'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      content: 'San Francisco, CA',
      link: '#',
      color: '#f59e0b'
    },
    {
      icon: <Clock size={24} />,
      title: 'Availability',
      content: 'Mon - Fri, 9AM - 6PM',
      link: '#',
      color: '#8b5cf6'
    }
  ]

  const socialLinks = [
    {
      icon: <Github size={20} />,
      name: 'GitHub',
      url: 'https://github.com/nikhilsharma',
      color: '#6b7280'
    },
    {
      icon: <Linkedin size={20} />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/nikhilsharma',
      color: '#0077b5'
    },
    {
      icon: <Twitter size={20} />,
      name: 'Twitter',
      url: 'https://twitter.com/nikhilsharma',
      color: '#1da1f2'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    }
  }

  return (
    <motion.section 
      id="contact" 
      className="contact-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Skills-style Animated Background */}
      <div className="animated-background">
        <div className="bg-blob bg-blob-1"></div>
        <div className="bg-blob bg-blob-2"></div>
        <div className="bg-blob bg-blob-3"></div>
      </div>
      
      {/* Animated Background */}
      <div className="contact-background">
        <div className="contact-orb contact-orb-1"></div>
        <div className="contact-orb contact-orb-2"></div>
        <div className="contact-orb contact-orb-3"></div>
        <div className="floating-elements">
          <motion.div 
            className="floating-element"
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <MessageCircle size={24} />
          </motion.div>
          <motion.div 
            className="floating-element"
            animate={{
              y: [20, -20, 20],
              rotate: [360, 0],
              scale: [1.2, 1, 1.2]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            <Zap size={20} />
          </motion.div>
          <motion.div 
            className="floating-element"
            animate={{
              y: [-10, 30, -10],
              rotate: [0, -360],
              scale: [1, 0.8, 1]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
          >
            <Sparkles size={18} />
          </motion.div>
        </div>
      </div>

      <div className="contact-container">
        {/* Section Header */}
        <motion.div className="contact-header" variants={itemVariants}>
          <motion.div className="section-badge" variants={itemVariants}>
            <MessageCircle size={16} />
            <span>Get In Touch</span>
          </motion.div>
          <motion.h2 variants={itemVariants}>
            Let's Create Something 
            <span className="gradient-text">Amazing Together</span>
          </motion.h2>
          <div className="title-underline"></div>
          <motion.p variants={itemVariants}>
            Have a project in mind or just want to chat about technology? 
            I'd love to hear from you. Let's turn your ideas into reality!
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="contact-content">
          {/* Contact Form */}
          <motion.div className="contact-form-container" variants={cardVariants}>
            <div className="form-header">
              <h3>Send Me a Message</h3>
              <p>I'll get back to you within 24 hours</p>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <motion.div 
                  className="input-group"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <div className="input-border"></div>
                </motion.div>
                
                <motion.div 
                  className="input-group"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  <div className="input-border"></div>
                </motion.div>
              </div>
              
              <motion.div 
                className="input-group"
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
                <div className="input-border"></div>
              </motion.div>
              
              <motion.div 
                className="input-group"
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
                <div className="input-border"></div>
              </motion.div>
              
              <motion.button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div 
                      className="loading-spinner"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
              
              {submitStatus && (
                <motion.div 
                  className={`submit-status ${submitStatus}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  {submitStatus === 'success' ? (
                    <>
                      <CheckCircle size={16} />
                      Message sent successfully!
                    </>
                  ) : (
                    <>
                      <AlertCircle size={16} />
                      Something went wrong. Please try again.
                    </>
                  )}
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div className="contact-info" variants={itemVariants}>
            <div className="info-header">
              <h3>Get in Touch</h3>
              <p>Choose your preferred way to connect</p>
            </div>
            
            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  className="contact-card"
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{ '--card-color': info.color }}
                >
                  <div className="card-icon">
                    {info.icon}
                  </div>
                  <div className="card-content">
                    <h4>{info.title}</h4>
                    <p>{info.content}</p>
                  </div>
                  <div className="card-arrow">
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      →
                    </motion.div>
                  </div>
                </motion.a>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="social-section">
              <h4>Connect on Social Media</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 10
                    }}
                    whileTap={{ scale: 0.9 }}
                    style={{ '--social-color': social.color }}
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
            
            {/* Fun Fact */}
            <motion.div 
              className="fun-fact"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="fact-icon">
                <Coffee size={20} />
              </div>
              <p>
                <strong>Fun Fact:</strong> I'm powered by coffee and turn ideas into code! 
                <motion.span 
                  animate={{ 
                    scale: [1, 1.2, 1],
                    color: ['#ef4444', '#f97316', '#ef4444']
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
                >
                  <Heart size={14} fill="currentColor" style={{ marginLeft: '5px' }} />
                </motion.span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Stars */}
      <div className="contact-stars">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="contact-star"
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.8, 1.2, 0.8],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.7
            }}
          >
            <Star size={10} fill="currentColor" />
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Contact

