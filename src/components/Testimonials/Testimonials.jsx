import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Testimonials.css'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      image: "👩‍💼",
      content: "Working with this developer was an absolute pleasure. The attention to detail and innovative solutions exceeded our expectations. Our website performance improved by 300%!",
      rating: 5,
      company: "TechStart Inc."
    },
    {
      name: "Michael Chen",
      role: "Product Manager, Innovation Labs",
      image: "👨‍💻",
      content: "Exceptional work! The project was delivered on time and the code quality was outstanding. The responsive design works flawlessly across all devices.",
      rating: 5,
      company: "Innovation Labs"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, Creative Agency",
      image: "👩‍🎨",
      content: "The creative approach and technical expertise resulted in a stunning website that perfectly represents our brand. Client inquiries increased by 250%!",
      rating: 5,
      company: "Creative Agency"
    },
    {
      name: "David Thompson",
      role: "Founder, E-commerce Solutions",
      image: "👨‍💼",
      content: "Professional, reliable, and incredibly talented. The e-commerce platform built for us has been running smoothly and generating excellent sales conversions.",
      rating: 5,
      company: "E-commerce Solutions"
    },
    {
      name: "Lisa Wang",
      role: "CTO, FinTech Startup",
      image: "👩‍🔬",
      content: "The mobile app development was seamless. Great communication throughout the project and the final product exceeded all our requirements.",
      rating: 5,
      company: "FinTech Startup"
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const goToTestimonial = (index) => {
    setCurrentIndex(index)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 5000)
  }

  useEffect(() => {
    if (!isAutoPlay) return
    
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlay])

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

  const testimonialVariants = {
    enter: {
      x: 300,
      opacity: 0
    },
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      x: -300,
      opacity: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
        ★
      </span>
    ))
  }

  return (
    <section className="testimonials" id="testimonials">
      <motion.div 
        className="testimonials-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          What Clients Say
        </motion.h2>
        
        <motion.p className="section-subtitle" variants={itemVariants}>
          Don't just take my word for it - here's what my clients have to say about working with me
        </motion.p>
        
        <div className="testimonials-carousel">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="testimonial-card"
              variants={testimonialVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <div className="testimonial-content">
                <div className="quote-mark">“</div>
                <p className="testimonial-text">{testimonials[currentIndex].content}</p>
                <div className="testimonial-rating">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
              </div>
              
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonials[currentIndex].image}
                </div>
                <div className="author-info">
                  <h4>{testimonials[currentIndex].name}</h4>
                  <p>{testimonials[currentIndex].role}</p>
                  <span>{testimonials[currentIndex].company}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="carousel-controls">
            <button 
              className="carousel-btn prev" 
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              ‹
            </button>
            <button 
              className="carousel-btn next" 
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              ›
            </button>
          </div>
          
          <div className="carousel-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Testimonials

