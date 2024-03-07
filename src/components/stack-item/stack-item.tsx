import { motion } from "framer-motion";
import Image from "next/image";

const textMotion = {
  rest: { opacity: 0, ease: "easeOut", type: "tween", translateY: 5 },
  hover: {
    opacity: 1,
    translateY: 0,
    transition: {
      type: "tween",
      ease: "easeOut",
    },
  },
};

const imageMotion = {
  rest: { translateY: 0 },
  hover: {
    translateY: -5,
    transition: {
      type: "tween",
      ease: "easeOut",
    },
  },
};

export const StackItem = () => {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <motion.img
        src={`https://icongr.am/devicon/react-original.svg?size=100`}
        width={80}
        height={80}
        alt="test"
        title="test"
        variants={imageMotion}
        loading="lazy"
        // className="aspect-[1] object-contain mix-blend-color-burn"
      />
      <motion.span variants={textMotion}>ReactJS</motion.span>
    </motion.div>
  );
};
