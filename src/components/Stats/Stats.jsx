import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Stats.css'

const Stats = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    awards: 0
  })

  const finalValues = {
    projects: 50,
    clients: 25,
    experience: 3,
    awards: 8
  }

  const stats = [
    {
      key: 'projects',
      value: finalValues.projects,
      label: 'Projects Completed',
      icon: '🚀',
      suffix: '+'
    },
    {
      key: 'clients',
      value: finalValues.clients,
      label: 'Happy Clients',
      icon: '😊',
      suffix: '+'
    },
    {
      key: 'experience',
      value: finalValues.experience,
      label: 'Years Experience',
      icon: '💼',
      suffix: '+'
    },
    {
      key: 'awards',
      value: finalValues.awards,
      label: 'Awards Won',
      icon: '🏆',
      suffix: ''
    }
  ]

  const animateCounters = () => {
    stats.forEach(stat => {
      let start = 0
      const end = finalValues[stat.key]
      const duration = 2000
      const increment = end / (duration / 16)
      
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCounters(prev => ({ ...prev, [stat.key]: end }))
          clearInterval(timer)
        } else {
          setCounters(prev => ({ ...prev, [stat.key]: Math.ceil(start) }))
        }
      }, 16)
    })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters()
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    const element = document.querySelector('.stats')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  return (
    <section className="stats" id="stats">
      <motion.div 
        className="stats-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          My Achievements
        </motion.h2>
        
        <motion.div className="stats-grid" variants={containerVariants}>
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="stat-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">
                {counters[stat.key]}{stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Stats

