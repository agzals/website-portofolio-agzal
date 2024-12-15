import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
  open: {
    transition: {
      staggerChildren: 1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 60,
    opacity: 0,
  },
};
const Links = () => {
  const [color, setColor] = useState({
    color: "white",
    Brand: "mercy",
  });
  const items = ["Homepage", "Services", "Portofolio", "Contact", "About"];

  return (
    <motion.div className="links" variants={variants}>
      <h1>mobil saya warna {color.color}</h1>
      <button onClick={setColor(color.color("biru"))}></button>
      {items.map((item) => (
        <motion.a href={"#${item}"} key={item} variants={itemVariants}>
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
