import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);
  
  const [projects] = useState([
    {
      id: 1,
      title: "NexusShop Pro",
      category: "web",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&w=800",
      description: "Next-generation e-commerce platform with AI-powered recommendations and real-time analytics.",
      technologies: ["Next.js", "TypeScript", "Prisma", "Stripe", "Vercel"],
      liveLink: "https://nexusshop-demo.vercel.app",
      githubLink: "https://github.com/username/nexusshop",
      features: [
        "AI product recommendations",
        "Advanced payment gateway",
        "Real-time inventory sync",
        "Multi-vendor marketplace"
      ],
      stats: {
        users: "25K+",
        revenue: "$2M+",
        rating: "4.9"
      },
      color: "#6366f1"
    },
    {
      id: 2,
      title: "VisionCraft AI",
      category: "ai",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&w=800",
      description: "Revolutionary AI image generation platform with custom model training and style transfer capabilities.",
      technologies: ["Python", "PyTorch", "FastAPI", "React", "AWS"],
      liveLink: "https://visioncraft-ai.com",
      githubLink: "https://github.com/username/visioncraft",
      features: [
        "Custom model training",
        "Style transfer engine",
        "Batch processing",
        "API marketplace"
      ],
      stats: {
        images: "500K+",
        models: "50+",
        accuracy: "98%"
      },
      color: "#8b5cf6"
    },
    {
      id: 3,
      title: "SocialPulse Analytics",
      category: "web",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&w=800",
      description: "Comprehensive social media management suite with advanced analytics and automated content scheduling.",
      technologies: ["Vue.js", "Node.js", "PostgreSQL", "Redis", "Docker"],
      liveLink: "https://socialpulse-analytics.com",
      githubLink: "https://github.com/username/socialpulse",
      features: [
        "Multi-platform integration",
        "Sentiment analysis",
        "Automated posting",
        "Competitor tracking"
      ],
      stats: {
        platforms: "12+",
        users: "50K+",
        posts: "5M+"
      },
      color: "#06b6d4"
    },
    {
      id: 4,
      title: "FitTracker Elite",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&w=800",
      description: "Premium fitness tracking app with AI personal trainer and comprehensive health monitoring.",
      technologies: ["React Native", "TensorFlow", "Firebase", "Expo", "Redux"],
      liveLink: "https://fittracker-elite.app",
      githubLink: "https://github.com/username/fittracker",
      features: [
        "AI personal trainer",
        "Health vitals tracking",
        "Social challenges",
        "Nutrition AI advisor"
      ],
      stats: {
        downloads: "100K+",
        workouts: "2M+",
        rating: "4.8"
      },
      color: "#10b981"
    },
    {
      id: 5,
      title: "CryptoVault Secure",
      category: "blockchain",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&w=800",
      description: "Enterprise-grade cryptocurrency wallet with advanced security features and DeFi integration.",
      technologies: ["Solidity", "Hardhat", "React", "Web3.js", "IPFS"],
      liveLink: "https://cryptovault-secure.io",
      githubLink: "https://github.com/username/cryptovault",
      features: [
        "Multi-signature security",
        "DeFi protocol integration",
        "Hardware wallet support",
        "Cross-chain swapping"
      ],
      stats: {
        transactions: "1M+",
        security: "99.99%",
        chains: "15+"
      },
      color: "#f59e0b"
    },
    {
      id: 6,
      title: "SmartHome Command",
      category: "iot",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&w=800",
      description: "Intelligent home automation system with voice AI and predictive energy management.",
      technologies: ["Python", "TensorFlow", "Raspberry Pi", "MQTT", "Flutter"],
      liveLink: "https://smarthome-command.tech",
      githubLink: "https://github.com/username/smarthome",
      features: [
        "Voice AI assistant",
        "Predictive automation",
        "Energy optimization",
        "Security integration"
      ],
      stats: {
        devices: "500+",
        savings: "40%",
        users: "15K+"
      },
      color: "#ef4444"
    }
  ]);

  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter, projects]);

  const categories = [
    { id: 'all', name: 'All Projects', icon: '🚀' },
    { id: 'web', name: 'Web Apps', icon: '🌐' },
    { id: 'mobile', name: 'Mobile', icon: '📱' },
    { id: 'ai', name: 'AI/ML', icon: '🤖' },
    { id: 'blockchain', name: 'Blockchain', icon: '⛓️' },
    { id: 'iot', name: 'IoT', icon: '🔌' }
  ];

  const ProjectCard = ({ project, index }) => (
    <div 
      className={`project-card`}
      style={{ 
        animationDelay: `${index * 0.1}s`,
        '--accent-color': project.color 
      }}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          <div className="project-links">
            <a href={project.liveLink} className="project-link live" target="_blank" rel="noopener noreferrer">
              <span>🔗</span>
              <span className="link-text">Live Demo</span>
            </a>
            <a href={project.githubLink} className="project-link github" target="_blank" rel="noopener noreferrer">
              <span>📂</span>
              <span className="link-text">Source Code</span>
            </a>
          </div>
        </div>
        <div className="project-category-badge">{categories.find(cat => cat.id === project.category)?.icon}</div>
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-stats">
          {Object.entries(project.stats).map(([key, value]) => (
            <div key={key} className="stat-item">
              <span className="stat-value">{value}</span>
              <span className="stat-label">{key}</span>
            </div>
          ))}
        </div>

        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>

        <div className="project-features">
          <h4>✨ Key Features</h4>
          <ul>
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <section className="projects-section">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading amazing projects...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="projects-section" ref={containerRef}>
      <div className="projects-container">
        <div className="projects-header">
          <span className="section-tag">🎯 Portfolio Showcase</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Explore my latest work combining cutting-edge technology with innovative design
          </p>
          <div className="header-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-dot"></div>
            <div className="decoration-line"></div>
          </div>
        </div>

        <div className="projects-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
            >
              <span className="filter-icon">{category.icon}</span>
              <span className="filter-text">{category.name}</span>
              <div className="filter-ripple"></div>
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="projects-cta">
          <div className="cta-content">
            <h3>🚀 Want to see more?</h3>
            <p>Check out my complete portfolio with 20+ projects</p>
            <a href="https://github.com/yourusername" className="cta-button" target="_blank" rel="noopener noreferrer">
              <span>View All Projects</span>
              <span className="button-arrow">→</span>
            </a>
          </div>
          <div className="cta-background">
            <div className="cta-circle"></div>
            <div className="cta-circle"></div>
            <div className="cta-circle"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;