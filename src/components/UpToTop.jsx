"use client"
import { FaArrowUp } from "react-icons/fa"
import { useCallback, useEffect, useState } from "react"

const UpToTop = () => {
    const [showButton, setShowButton] = useState(false)

    // Handle scroll event to show/hide button (with throttling for performance)
    const handleScroll = useCallback(() => {
        const shouldShow = window.scrollY > 100
        setShowButton(shouldShow)
    }, [])

    // Handle click to scroll to top
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    // Add scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })

        // Check initial scroll position
        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [handleScroll])

    return (
        <button
            onClick={handleScrollToTop}
            className={`fixed bottom-20 right-5 bg-accent/70 text-white p-3 z-100 cursor-pointer rounded-full hover:bg-accent transition-opacity duration-300 hover:scale-105 overflow-hidden curser-pointer ${
                showButton ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Scroll to top"
        >
            <FaArrowUp className="text-xl animate-up-to-top" />
        </button>
    )
}
export default UpToTop;