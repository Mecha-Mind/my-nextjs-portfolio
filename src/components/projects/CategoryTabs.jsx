"use client"

import { useState } from "react"

// مكون التابس
const CategoryTabs = ({ categories, activeCategory, onCategoryChange }) => {
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleTabClick = (categoryId) => {
    if (categoryId === activeCategory) return

    setIsTransitioning(true)

    // Small delay to show transition effect
    setTimeout(() => {
      onCategoryChange(categoryId)
      setIsTransitioning(false)
    }, 150)
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up-delay-3">
      {categories.map((category, index) => (
        <button
          key={category.id}
          onClick={() => handleTabClick(category.id)}
          disabled={isTransitioning}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed ${
            activeCategory === category.id
              ? "bg-accent text-white shadow-lg shadow-accent/30"
              : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
          }`}
          style={{
            animationDelay: `${index * 0.1}s`
          }}
        >
          {/* Animated background */}
          {activeCategory === category.id && (
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent/80 animate-pulse"></div>
          )}

          <span className="relative z-10">
            {category.title}
          </span>
        </button>
      ))}
    </div>
  )
}

export default CategoryTabs
