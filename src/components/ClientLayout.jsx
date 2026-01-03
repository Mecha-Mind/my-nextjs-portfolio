// "use client"
// import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
// import { useEffect, useState } from "react"
// import { usePathname } from "next/navigation"
// import Transition from "./Transition"
// import InitialLoader from "./InitialLoader"


// const ClientLayout = ({children}) => {
//     const pathname = usePathname();
//     const prefersReducedMotion = useReducedMotion()
//     const [introDone, setIntroDone] = useState(false)

//     useEffect(() => {
//         // If already seen this session, mark done immediately
//         if (typeof window !== "undefined" && sessionStorage.getItem("introSeen")) {
//             setIntroDone(true)
//         }
//     }, [])

//     return (
//         <>
//         <InitialLoader onDone={() => setIntroDone(true)} />
//         <AnimatePresence mode="wait" onExitComplete={() => console.log("Exit complete for", pathname)}>
//             <div key={pathname} className="h-full">
//                 {introDone && !prefersReducedMotion && <Transition />}
//                 {children}
//             </div>
//         </AnimatePresence>
//         </>
//     )
// }

// export default ClientLayout