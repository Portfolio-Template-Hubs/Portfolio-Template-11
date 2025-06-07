import React, { useState, useEffect } from 'react';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skillsData = [
    { name: 'JavaScript', level: 90, icon: '🟨', category: 'Frontend' },
    { name: 'React', level: 85, icon: '⚛️', category: 'Frontend' },
    { name: 'CSS/SCSS', level: 88, icon: '🎨', category: 'Frontend' },
    { name: 'HTML5', level: 95, icon: '🌐', category: 'Frontend' },
    { name: 'Node.js', level: 80, icon: '🟢', category: 'Backend' },
    { name: 'Python', level: 75, icon: '🐍', category: 'Backend' },
    { name: 'MongoDB', level: 70, icon: '🍃', category: 'Database' },
    { name: 'PostgreSQL', level: 68, icon: '🐘', category: 'Database' },
    { name: 'Git', level: 85, icon: '🔧', category: 'Tools' },
    { name: 'Docker', level: 72, icon: '🐳', category: 'Tools' },
    { name: 'Figma', level: 75, icon: '🎭', category: 'Design' },
    { name: 'Photoshop', level: 70, icon: '📸', category: 'Design' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const getSkillColor = (level) => {
    if (level >= 90) return '#00f5ff'; // Cyan
    if (level >= 80) return '#7c3aed'; // Purple
    if (level >= 70) return '#f59e0b'; // Amber
    return '#ef4444'; // Red
  };

  const getCategoryClass = (category) => {
    const categoryClasses = {
      Frontend: 'frontend-gradient',
      Backend: 'backend-gradient',
      Database: 'database-gradient',
      Tools: 'tools-gradient',
      Design: 'design-gradient'
    };
    return categoryClasses[category] || 'default-gradient';
  };

  const getSkillLevelText = (level) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <section className="skills-section" id="skills">
      {/* Animated Background */}
      <div className="animated-background">
        <div className="bg-blob bg-blob-1"></div>
        <div className="bg-blob bg-blob-2"></div>
        <div className="bg-blob bg-blob-3"></div>
      </div>

      <div className="skills-container">
        {/* Header */}
        <div className="skills-header">
          <h2 className="skills-title">My Skills</h2>
          <p className="skills-subtitle">
            Crafting digital experiences with cutting-edge technologies and creative solutions
          </p>
          <div className="title-underline"></div>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div
              key={skill.name}
              className={`skill-card ${isVisible ? 'visible' : ''}`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              {/* Animated Border */}
              <div className="skill-card-border"></div>

              {/* Content */}
              <div className="skill-card-content">
                {/* Icon and Category Badge */}
                <div className="skill-header">
                  <div className="skill-icon">{skill.icon}</div>
                  <span className={`skill-category ${getCategoryClass(skill.category)}`}>
                    {skill.category}
                  </span>
                </div>

                {/* Skill Name */}
                <h3 className="skill-name">{skill.name}</h3>

                {/* Progress Circle */}
                <div className="progress-circle-container">
                  <svg className="progress-circle" viewBox="0 0 80 80">
                    {/* Background Circle */}
                    <circle
                      cx="40"
                      cy="40"
                      r="30"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="8"
                      fill="none"
                    />
                    {/* Progress Circle */}
                    <circle
                      cx="40"
                      cy="40"
                      r="30"
                      stroke={getSkillColor(skill.level)}
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 30}`}
                      strokeDashoffset={isVisible ? `${2 * Math.PI * 30 * (1 - skill.level / 100)}` : `${2 * Math.PI * 30}`}
                      className="progress-stroke"
                      style={{
                        transitionDelay: `${index * 100 + 500}ms`,
                        filter: `drop-shadow(0 0 8px ${getSkillColor(skill.level)})`
                      }}
                    />
                  </svg>
                  {/* Percentage Text */}
                  <div className="progress-percentage">
                    <span>{skill.level}%</span>
                  </div>
                </div>

                {/* Skill Level Bar */}
                <div className="skill-bar-container">
                  <div
                    className="skill-bar-fill"
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      background: `linear-gradient(90deg, ${getSkillColor(skill.level)}, ${getSkillColor(skill.level)}aa)`,
                      transitionDelay: `${index * 100 + 700}ms`,
                      boxShadow: `0 0 10px ${getSkillColor(skill.level)}66`
                    }}
                  ></div>
                </div>

                {/* Level Description */}
                <p className="skill-level-text">{getSkillLevelText(skill.level)}</p>
              </div>

              {/* Hover Glow Effect */}
              <div className="skill-card-glow"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="stats-grid">
          {[
            { number: '50+', label: 'Projects Completed', icon: '🚀' },
            { number: '3+', label: 'Years Experience', icon: '⏰' },
            { number: '12+', label: 'Technologies Mastered', icon: '💎' }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className={`stat-card ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 200 + 1000}ms` }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="floating-element floating-1"></div>
      <div className="floating-element floating-2"></div>
      <div className="floating-element floating-3"></div>
      <div className="floating-element floating-4"></div>
    </section>
  );
};

export default Skills;