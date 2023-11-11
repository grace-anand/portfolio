import { motion } from "framer-motion";

const TransitionEffect = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen z-30 bg-primary"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: 0, width: 0 }}
        transition={{ duration: 0.8, type: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen z-20 bg-background"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: 0, width: 0 }}
        transition={{ delay: 0.2, duration: 0.8, type: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen z-10 bg-foreground"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: 0, width: 0 }}
        transition={{ delay: 0.4, duration: 0.8, type: "easeInOut" }}
      ></motion.div>
    </>
  );
};

export default TransitionEffect;
