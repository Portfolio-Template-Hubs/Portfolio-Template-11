import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Home, User, Code, Briefcase, FolderOpen, MessageCircle } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'skills', 'experience', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', id: 'home', icon: <Home size={16} /> },
    { name: 'Skills', href: '#skills', id: 'skills', icon: <Code size={16} /> },
    { name: 'Experience', href: '#experience', id: 'experience', icon: <Briefcase size={16} /> },
    { name: 'Projects', href: '#projects', id: 'projects', icon: <FolderOpen size={16} /> },
    { name: 'Contact', href: '#contact', id: 'contact', icon: <MessageCircle size={16} /> }
  ];

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Mail size={20} />, href: 'mailto:your@email.com', label: 'Email' }
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-content">
            <a href="#home" className="navbar-brand" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}>
              <span className="logo-text">Nikhil</span>
              <span className="logo-dot">.</span>
            </a>

            {/* Desktop Menu */}
            <div className="navbar-menu desktop-menu">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                  title={item.name}
                >
                  <span className="nav-icon">{item.icon}</span>
                  {item.name}
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="navbar-social desktop-menu">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="menu-icon">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
            <div className="mobile-menu-content">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                >
                  {item.icon}
                  {item.name}
                </a>
              ))}
              
              <div className="mobile-social">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mobile-social-link"
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;