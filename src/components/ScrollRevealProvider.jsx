"use client"
import { useEffect } from "react"
import { initScrollReveal } from "@/utils/scrollReveal"
export default function ScrollRevealProvider({ children }) {
    useEffect(() => {
        initScrollReveal()
    }, [])
    return children
}