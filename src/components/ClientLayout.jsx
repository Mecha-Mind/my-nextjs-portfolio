"use client"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import Transition from "./Transition"


const ClientLayout = ({children}) => {
    const pathname = usePathname();
    return (
        <>
        <AnimatePresence mode="wait" onExitComplete={() => console.log("Exit complete for", pathname)}>
            <motion.div key={pathname} className="h-full">
                <Transition />
                {children}
            </motion.div>
        </AnimatePresence>
        </>
    )
}

export default ClientLayout