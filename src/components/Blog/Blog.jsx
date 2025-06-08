import React from 'react'
import { motion } from 'framer-motion'
import './Blog.css'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Building Modern React Applications with TypeScript",
      excerpt: "Learn how to leverage TypeScript in your React projects for better type safety and developer experience.",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "React",
      image: "💻",
      tags: ["React", "TypeScript", "JavaScript"]
    },
    {
      id: 2,
      title: "CSS Grid vs Flexbox: When to Use Which?",
      excerpt: "A comprehensive guide to understanding the differences between CSS Grid and Flexbox and when to use each layout method.",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "CSS",
      image: "🎨",
      tags: ["CSS", "Layout", "Design"]
    },
    {
      id: 3,
      title: "Optimizing Node.js Performance for Production",
      excerpt: "Essential techniques and best practices for optimizing your Node.js applications for production environments.",
      date: "March 5, 2024",
      readTime: "10 min read",
      category: "Backend",
      image: "⚙️",
      tags: ["Node.js", "Performance", "Backend"]
    },
    {
      id: 4,
      title: "The Future of Web Development: Trends to Watch",
      excerpt: "Exploring the latest trends and technologies that are shaping the future of web development in 2024 and beyond.",
      date: "February 28, 2024",
      readTime: "12 min read",
      category: "Trends",
      image: "🚀",
      tags: ["Trends", "Future", "Technology"]
    },
    {
      id: 5,
      title: "Building RESTful APIs with Express.js",
      excerpt: "A step-by-step guide to creating robust and scalable RESTful APIs using Express.js and best practices.",
      date: "February 20, 2024",
      readTime: "9 min read",
      category: "Backend",
      image: "🌐",
      tags: ["Express.js", "API", "Backend"]
    },
    {
      id: 6,
      title: "Responsive Design Best Practices for 2024",
      excerpt: "Modern approaches to creating responsive web designs that work seamlessly across all devices and screen sizes.",
      date: "February 15, 2024",
      readTime: "7 min read",
      category: "Design",
      image: "📱",
      tags: ["Responsive", "Design", "Mobile"]
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
    <section className="blog" id="blog">
      <motion.div 
        className="blog-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          Latest Articles
        </motion.h2>
        
        <motion.p className="section-subtitle" variants={itemVariants}>
          Insights, tutorials, and thoughts on web development and technology
        </motion.p>
        
        <motion.div className="blog-grid" variants={containerVariants}>
          {blogPosts.map((post, index) => (
            <motion.article 
              key={post.id}
              className="blog-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="blog-image">
                <div className="blog-emoji">{post.image}</div>
                <div className="blog-category">{post.category}</div>
              </div>
              
              <div className="blog-content">
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                
                <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>
                
                <div className="blog-tags">
                  {post.tags.map((tag, idx) => (
                    <span key={idx} className="blog-tag">{tag}</span>
                  ))}
                </div>
                
                <motion.button 
                  className="blog-read-more"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read More →
                </motion.button>
              </div>
            </motion.article>
          ))}
        </motion.div>
        
        <motion.div className="blog-cta" variants={itemVariants}>
          <motion.button 
            className="view-all-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Articles
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Blog

