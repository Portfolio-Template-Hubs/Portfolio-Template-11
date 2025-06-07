import React from 'react'
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
      ]
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
      ]
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
      ]
    }
  ]

  return (
    <section id="experience" className="experience-section">
      <div className="experience-section">
        <div className="section-header">
          <span className="section-tag">My Journey</span>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            A timeline of my growth and achievements in the tech industry
          </p>
        </div>

        <div className="timeline">
          <div className="timeline-line"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-marker">
                <div className="marker-inner"></div>
              </div>
              
              <div className="experience-card">
                <div className="card-header">
                  <div className="job-info">
                    <h3 className="job-title">{exp.title}</h3>
                    <div className="company-info">
                      <span className="company-name">{exp.company}</span>
                      <span className="location">{exp.location}</span>
                    </div>
                  </div>
                  <div className="period-badge">{exp.period}</div>
                </div>

                <p className="job-description">{exp.description}</p>

                <div className="technologies">
                  <h4>Technologies Used:</h4>
                  <div className="tech-tags">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="achievements">
                  <h4>Key Achievements:</h4>
                  <ul className="achievement-list">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="experience-stats">
          <div className="stat-item">
            <div className="stat-number">3+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10+</div>
            <div className="stat-label">Technologies Mastered</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">3</div>
            <div className="stat-label">Companies Worked</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience