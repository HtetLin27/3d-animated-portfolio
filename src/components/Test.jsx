import React from "react";
import { motion } from "motion/react";

const shapeVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
    },
  },
};

const Test = () => {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div
        variants={shapeVariants}
        initial="initial"
        animate="animate"
        style={{
          width: 300,
          height: 300,
          background: "red",
        }}
      ></motion.div>
    </section>
  );
};

export default Test;
