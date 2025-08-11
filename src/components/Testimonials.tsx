import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { AnimatedElement } from './AnimatedElements'
export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote:
        'This is a great all-around debt relief company.',
      author: 'Sarah Johnson',
      title: 'Client since 2020',
    },
    {
      id: 2,
      quote:
        'Their team helped me create a plan that actually worked for my situation.',
      author: 'Michael Rodriguez',
      title: 'Client since 2021',
    },
    {
      id: 3,
      quote:
        "The personalized approach made all the difference. I finally feel like I'm back in control of my finances.",
      author: 'Jennifer Williams',
      title: 'Client since 2019',
    },
  ]
  const [[page, direction], setPage] = useState([0, 0])
  // Wrap to handle infinite carousel
  const paginate = (newDirection: any) => {
    const newPage = page + newDirection
    if (newPage < 0) {
      setPage([testimonials.length - 1, newDirection])
    } else if (newPage >= testimonials.length) {
      setPage([0, newDirection])
    } else {
      setPage([newPage, newDirection])
    }
  }
  // Handle dot navigation
  const goToPage = (index: any) => {
    const direction = index > page ? 1 : -1
    setPage([index, direction])
  }
  // Swipe handlers
  const handleDragEnd = (e: any, { offset, velocity }: any) => {
    const swipe = Math.abs(offset.x) > 50 || Math.abs(velocity.x) > 0.3
    if (swipe) {
      if (offset.x > 0) {
        paginate(-1)
      } else {
        paginate(1)
      }
    }
  }
  // Animation variants
  const variants = {
    enter: (direction: any) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: any) => ({
      x: direction < 0 ? 500 : -500,
      opacity: 0,
    }),
  }
  return (
    <div className="py-16 text-[#1a2f5a] bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <AnimatedElement type="fadeIn">
          <h2 className="text-3xl font-bold mb-12">
            Our Clients Rave About Us
          </h2>
        </AnimatedElement>
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden px-4">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: {
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                  },
                  opacity: {
                    duration: 0.2,
                  },
                }}
                drag="x"
                dragConstraints={{
                  left: 0,
                  right: 0,
                }}
                dragElastic={0.1}
                onDragEnd={handleDragEnd}
                className="py-8 px-4 cursor-grab active:cursor-grabbing"
              >
                <p className="text-xl italic mb-4">
                  "{testimonials[page].quote}"
                </p>
                <p className="font-semibold mt-6">
                  {testimonials[page].author}
                </p>
                <p className="text-sm text-gray-500">
                  {testimonials[page].title}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Navigation dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${page === index ? 'bg-white' : 'bg-gray-400 hover:bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          {/* Arrow navigation */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#1a2f5a]/50 hover:bg-[#1a2f5a]/80 p-2 rounded-full text-white transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#1a2f5a]/50 hover:bg-[#1a2f5a]/80 p-2 rounded-full text-white transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  )
}
