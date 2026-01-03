"use client"
import { FaArrowUp } from "react-icons/fa"
import { useCallback, useEffect, useState } from "react"

const UpToTop = () => {
    const [showButton, setShowButton] = useState(false)

    // Handle scroll event to show/hide button
    const handleScroll = useCallback(() => {
        if (window.scrollY > 100) {
            setShowButton(true)
        } else {
            setShowButton(false)
        }
    }, [])

    // Handle click to scroll to top
    const handleScrollToTop = useCallback(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])

    // Add scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        // Check initial scroll position
        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [handleScroll])

    return (
        <button
            onClick={handleScrollToTop}
            className={`fixed bottom-26 right-5 bg-accent cursor-pointer text-white p-2 rounded-full hover:bg-accent transition-all duration-300 z-100 hover:scale-105
                 ${
                showButton ? "opacity-100" : "opacity-0"
            }`}
            aria-label="Scroll to top"
        >
            <FaArrowUp className="text-2xl animate-up-to-top" />
        </button>
    )
}
export default UpToTop;