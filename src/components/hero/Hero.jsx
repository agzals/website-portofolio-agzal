import { motion } from "framer-motion";
import "./hero.scss";

const Hero = () => {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animasi: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.8,
      },
    },
    scrollButton: {
      opacity: 1,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
    imageScroll: {
      x: 400,
      opacity: 0,
    },
  };

  const slidingText = {
    initial: {
      x: 0,
    },
    animasi: {
      x: "-220%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 20,
      },
    },
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animasi">
          <motion.h2 variants={textVariants}>AGZAL SUFI</motion.h2>
          <motion.h1 variants={textVariants}>Web developer and UI Designer</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button>See the latest works</motion.button>
            <motion.button>Our Contact</motion.button>
          </motion.div>
          <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
        </motion.div>
      </div>
      <motion.div variants={slidingText} initial="initial" animate="animasi" className="slidingText">
        Front End Website Developer
      </motion.div>
      <motion.div className="imageContainer" initial="imageScroll">
        <motion.img variants={textVariants} animate="animasi" initial="imageScroll" className="gambar" src="/agzal.png" alt="" />
      </motion.div>
    </div>
  );
};

export default Hero;
