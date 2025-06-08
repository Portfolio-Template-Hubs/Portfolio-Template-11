import React from 'react'
import { motion } from 'framer-motion'
import './Timeline.css'

const Timeline = () => {
  const timelineData = [
    {
      year: "2024",
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      type: "work",
      description: "Leading development of enterprise web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting scalable solutions.",
      skills: ["React", "Node.js", "AWS", "TypeScript", "Docker"],
      icon: "💼",
      color: "#667eea"
    },
    {
      year: "2023",
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      type: "work",
      description: "Developed multiple client projects from concept to deployment. Specialized in modern web technologies and responsive design principles.",
      skills: ["React", "Express.js", "MongoDB", "CSS3", "Git"],
      icon: "🚀",
      color: "#10b981"
    },
    {
      year: "2022",
      title: "Bachelor's in Computer Science",
      company: "Tech University",
      type: "education",
      description: "Graduated with honors. Focused on software engineering, data structures, algorithms, and web development technologies.",
      skills: ["Java", "Python", "JavaScript", "SQL", "Data Structures"],
      icon: "🎓",
      color: "#f59e0b"
    },
    {
      year: "2021",
      title: "Frontend Developer Intern",
      company: "StartUp Hub",
      type: "work",
      description: "Built responsive web interfaces and collaborated with design teams. Gained experience in modern frontend frameworks and agile development.",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Figma"],
      icon: "💻",
      color: "#8b5cf6"
    },
    {
      year: "2020",
      title: "Web Development Bootcamp",
      company: "Code Academy",
      type: "education",
      description: "Intensive 6-month program covering full-stack web development. Built several projects including e-commerce platforms and portfolio websites.",
      skills: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL"],
      icon: "📚",
      color: "#ef4444"
    }
  ]

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
    hidden: { 
      opacity: 0,
      x: -50
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="timeline" id="timeline">
      <motion.div 
        className="timeline-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          🌟 My Journey
        </motion.h2>
        
        <motion.p className="section-subtitle" variants={itemVariants}>
          A chronological overview of my education and professional experience that shaped my career
        </motion.p>
        
        <div className="timeline-wrapper">
          <div className="timeline-line"></div>
          
          {timelineData.map((item, index) => (
            <motion.div 
              key={index}
              className={`timeline-item ${item.type} ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className="timeline-content">
                <div className="timeline-year">{item.year}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <h4 className="timeline-company">{item.company}</h4>
                <p className="timeline-description">{item.description}</p>
                
                <div className="timeline-skills">
                  {item.skills.map((skill, idx) => (
                    <motion.span 
                      key={idx} 
                      className="skill-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1, duration: 0.3 }}
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: item.color,
                        color: "white",
                        boxShadow: `0 4px 15px ${item.color}40`
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              <div className="timeline-marker">
                <div className="timeline-icon" style={{ '--marker-color': item.color }}>
                  <span className="timeline-icon-emoji">{item.icon}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Timeline

