// "use client"
// import ProjectsBtn from "./ProjectsBtn";
// // import ParticlesContainer from "./ParticlesContainer";
// import { fadeIn } from "../../variants";

// const HomeContent = () => {
//     return (
//         <>
//             {/* text */}
//             <div className="w-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
//                 <div className="container flex flex-col justify-center h-full text-center lg:text-left lg:pt-40 mx-auto min-h-dvh">
//                 {/* title */}
//                     <h1
//                         variants={fadeIn("down", 0.2)}
//                         initial="hidden"
//                         animate="show"
//                         exit="hidden"
//                         className="h1"
//                     >
//                         Frontend Developer specializing in <span className="text-accent">React & Next.js</span>
//                     </h1>
//                     {/* subtitle */}
//                     <p
//                         variants={fadeIn("down", 0.3)}
//                         initial="hidden"
//                         animate="show"
//                         exit="hidden"
//                         className="mx-auto lg:mx-0 mb-10 lg:mb-15 max-w-sm lg:max-w-xl"
//                     >
//                         I build modern, performant web interfaces with focus on clean architecture, responsive design, and secure client-server interactions.
//                     </p>
//                     {/* btn */}
//                     <div
//                         variants={fadeIn("down", 0.4)}
//                         initial="hidden"
//                         animate="show"
//                         exit="hidden"
//                         className="flex justify-center xl:hidden relative"
//                     >
//                         <ProjectsBtn />
//                     </div>
//                     {/* xl screen btn */}
//                     <div
//                         className="hidden xl:flex"
//                         variants={fadeIn("down", 0.5)}
//                         initial="hidden"
//                         animate="show"
//                         exit="hidden"
//                     >
//                         <ProjectsBtn />
//                     </div>
//                 </div>
//             </div>
//             {/* image */}
//             <div className="w-full h-full absolute right-0 bottom-0">
//                 {/* bg image */}
//                 <div className="bg-none lg:bg-explosion lg:bg-cover lg:bg-right lg:bg-no-repeat w-full h-full mix-blend-color-dodge absolute"></div>
//             </div>
//         </>
//     );
// };

// export default HomeContent;