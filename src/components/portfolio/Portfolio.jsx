import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring } from "framer-motion";
const items = [
  {
    id: 1,
    title: "E-commerce Website",
    img: "",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, libero. Illo non dolorem rem illum vero numquam reiciendis animi cum?",
  },
  {
    id: 2,
    title: "E-commerce pempek",
    img: "",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, libero. Illo non dolorem rem illum vero numquam reiciendis animi cum?",
  },
  {
    id: 3,
    title: "E-commerce Website",
    img: "",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, libero. Illo non dolorem rem illum vero numquam reiciendis animi cum?",
  },
  {
    id: 4,
    title: "E-commerce Website",
    img: "",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, libero. Illo non dolorem rem illum vero numquam reiciendis animi cum?",
  },
];

const Single = ({ itemi }) => {
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="kotak"></div>
          <div className="textContainer">
            <h2>{itemi.title}</h2>
            <p>{itemi.desc}</p>
            <button>See Demo</button>
          </div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((itemi) => (
        <Single itemi={itemi} key={itemi.id} />
      ))}
    </div>
  );
};

export default Portfolio;
