import React from 'react'
import { motion } from 'framer-motion'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting microservices.",
      technologies: ["React", "Node.js", "AWS", "Docker", "TypeScript"],
      achievements: [
        "Increased application performance by 40%",
        "Led team of 5 developers",
        "Implemented CI/CD pipeline"
      ],
      icon: "🚀"
    },
    {
      title: "Frontend Developer",
      company: "Digital Innovations",
      period: "2020 - 2022",
      location: "New York, NY",
      description: "Developed responsive web applications and collaborated with design teams to create exceptional user experiences.",
      technologies: ["React", "JavaScript", "SASS", "Figma", "Git"],
      achievements: [
        "Built 15+ responsive websites",
        "Reduced load time by 35%",
        "Implemented design system"
      ],
      icon: "💻"
    },
    {
      title: "Junior Web Developer",
      company: "StartupHub",
      period: "2019 - 2020",
      location: "Austin, TX",
      description: "Started career building dynamic websites and learning modern web development practices in a fast-paced startup environment.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      achievements: [
        "Completed 20+ projects",
        "Learned 3 new frameworks",
        "Contributed to open source"
      ],
      icon: "⚡"
    }
  ]

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
    hidden: { 
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="experience" className="experience-main-section">
      <div className="experience-container">
        <motion.div 
          className="experience-section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="experience-section-tag">✨ My Journey</span>
          <h2 className="experience-section-title">Professional Experience</h2>
          <p className="experience-section-subtitle">
            A timeline of my growth and achievements in the tech industry
          </p>
        </motion.div>

        <motion.div 
          className="experience-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="experience-timeline-line"></div>
          
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className={`experience-timeline-item ${index % 2 === 0 ? 'experience-left' : 'experience-right'}`}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className="experience-timeline-marker">
                <div className="experience-marker-inner">
                  <span className="experience-marker-icon">{exp.icon}</span>
                </div>
              </div>
              
              <div className="experience-work-card">
                <div className="experience-card-header">
                  <div className="experience-job-info">
                    <h3 className="experience-job-title">{exp.title}</h3>
                    <div className="experience-company-info">
                      <span className="experience-company-name">{exp.company}</span>
                      <span className="experience-job-location">
                        📍 {exp.location}
                      </span>
                    </div>
                  </div>
                  <div className="experience-period-badge">{exp.period}</div>
                </div>

                <p className="experience-job-description">{exp.description}</p>

                <div className="experience-technologies">
                  <h4>🚀 Technologies Used:</h4>
                  <div className="experience-tech-tags">
                    {exp.technologies.map((tech, techIndex) => (
                      <motion.span 
                        key={techIndex} 
                        className="experience-tech-tag"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.1 }}
                        whileHover={{ 
                          scale: 1.1,
                          boxShadow: "0 8px 25px rgba(102, 126, 234, 0.4)"
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="experience-achievements">
                  <h4>🏆 Key Achievements:</h4>
                  <ul className="experience-achievement-list">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.li 
                        key={achIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: achIndex * 0.1 }}
                      >
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="experience-stats-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            { number: "5+", label: "Years Experience", icon: "📅" },
            { number: "50+", label: "Projects Completed", icon: "🎯" },
            { number: "15+", label: "Technologies Mastered", icon: "⚡" },
            { number: "3", label: "Companies Worked", icon: "🏢" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="experience-stat-item"
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              <div className="experience-stat-icon">{stat.icon}</div>
              <div className="experience-stat-number">{stat.number}</div>
              <div className="experience-stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience