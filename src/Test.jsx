import { delay, motion } from "framer-motion";

const Test = () => {
  const variants = {
    visible: (i) => ({ opacity: 1, x: 100, transition: { delay: i * 3 } }),
    hidden: { opacity: 0 },
  };
  const items = ["items1", "items2", "items3", "items4"];

  return (
    <div className="course">
      <motion.ul initial="hidden" animate="visible" variants={variants}>
        {items.map((item, i) => (
          <motion.li key={item} variants={variants} custom={i}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Test;
