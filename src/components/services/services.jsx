import "./services.scss";
import { motion } from "framer-motion";

const Services = () => {
  const variants = {
    initial: {
      opacity: 0,
    },
  };
  return (
    <motion.div className="services" variants={variants}>
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
            <b>Unique</b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>For Your</b> Business.
          </h1>
          <button>What We Do</button>
        </div>
      </motion.div>
      <motion.div className="listServices">
        <div className="box">
          <h2>Branding</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quaerat architecto sint quibusdam? Similique illum repellendus eius suscipit. Eius, sed!</p>
          <button>Go</button>
        </div>
        <div className="box">
          <h2>Branding</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quaerat architecto sint quibusdam? Similique illum repellendus eius suscipit. Eius, sed!</p>
          <button>Go</button>
        </div>
        <div className="box">
          <h2>Branding</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quaerat architecto sint quibusdam? Similique illum repellendus eius suscipit. Eius, sed!</p>
          <button>Go</button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
