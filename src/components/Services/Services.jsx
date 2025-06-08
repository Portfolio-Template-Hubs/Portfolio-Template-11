import React from 'react'
import { motion } from 'framer-motion'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user interfaces with modern design principles.',
      features: ['Responsive Design', 'User Research', 'Prototyping', 'Wireframing']
    },
    {
      icon: '💻',
      title: 'Frontend Development',
      description: 'Building interactive and performant web applications using latest technologies.',
      features: ['React/Vue/Angular', 'JavaScript/TypeScript', 'CSS3/SASS', 'Mobile First']
    },
    {
      icon: '⚙️',
      title: 'Backend Development',
      description: 'Developing robust server-side applications and APIs for scalable solutions.',
      features: ['Node.js/Python', 'Database Design', 'API Development', 'Cloud Integration']
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      description: 'Creating cross-platform mobile applications for iOS and Android.',
      features: ['React Native', 'Flutter', 'App Store Deploy', 'Performance Optimization']
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Implementing cloud infrastructure and DevOps practices for modern applications.',
      features: ['AWS/Azure', 'Docker/Kubernetes', 'CI/CD Pipeline', 'Monitoring']
    },
    {
      icon: '🔧',
      title: 'Consulting',
      description: 'Providing technical guidance and strategic planning for your projects.',
      features: ['Architecture Review', 'Code Audit', 'Performance Analysis', 'Best Practices']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="services" id="services">
      <motion.div 
        className="services-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          My Services
        </motion.h2>
        
        <motion.p className="section-subtitle" variants={itemVariants}>
          I offer a comprehensive range of services to bring your digital vision to life
        </motion.p>
        
        <motion.div className="services-grid" variants={containerVariants}>
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <motion.button 
                className="service-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Services

