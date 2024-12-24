import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const variants = {
    initial: {
      x: -500,
      y: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial" //whileInView="animate"
      animate={"animate"}
      ref={ref}
    >
      <motion.div className="textContainer">
        <p>
          focus on helping your brand grow <br />
          and move forwards
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Business.
          </h1>
          <button>What We Do</button>
        </div>
      </motion.div>
      <motion.div className="listServices">
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Branding</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quaerat architecto sint quibusdam? Similique illum repellendus eius suscipit. Eius, sed!</p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Branding</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quaerat architecto sint quibusdam? Similique illum repellendus eius suscipit. Eius, sed!</p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Branding</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quaerat architecto sint quibusdam? Similique illum repellendus eius suscipit. Eius, sed!</p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
