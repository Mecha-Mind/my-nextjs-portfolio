"use client"

// مكون التابس - بدون delay علشان مفيش glitch
const CategoryTabs = ({ categories, activeCategory, onCategoryChange }) => {
  const handleTabClick = (categoryId) => {
    if (categoryId === activeCategory) return
    onCategoryChange(categoryId)
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category, index) => (
        <button
          key={category.id}
          onClick={() => handleTabClick(category.id)}
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
