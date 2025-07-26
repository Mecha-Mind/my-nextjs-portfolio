// frame motion
import { delay, motion } from "framer-motion";

// router

// variant
const transitionVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: "100%",
    // opacity: 0,
  },
};
const Transition = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 right-full bg-[#2e2257] w-screen h-screen z-30"
        variants={transitionVariants}
        initial={"initial"}
        animate={"animate"}
        exit={"exit"}
        transition={{ delay: 0.1, duration: 0.4, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="fixed top-0 right-full bg-[# 3b2d71] w-screen h-screen z-20"
        variants={transitionVariants}
        initial={"initial"}
        animate={"animate"}
        exit={"exit"}
        transition={{ delay: 0.2, duration: 0.4, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="fixed top-0 right-full bg-[#4b3792] w-screen h-screen z-10"
        variants={transitionVariants}
        initial={"initial"}
        animate={"animate"}
        exit={"exit"}
        transition={{ delay: 0.3, duration: 0.4, ease: "easeInOut" }}
      ></motion.div>
    </>
  );
};

export default Transition;
